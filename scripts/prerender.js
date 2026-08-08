#!/usr/bin/env node
/**
 * Prerenders every route to static HTML.
 *
 * CRA ships a single empty index.html, which means crawlers that don't execute
 * JavaScript — Bing, most social scrapers, and every LLM crawler — see nothing
 * but a <div id="root">. This serves the build over HTTP, walks each route in
 * headless Chrome, and writes the fully rendered DOM back to disk so each URL
 * has real HTML with its own <title>, description and Open Graph tags.
 *
 * Failure here is non-fatal: the build still produces a working SPA.
 */
const fs = require('fs');
const http = require('http');
const path = require('path');
const routes = require('../src/seo/routes.json');

const BUILD_DIR = path.join(__dirname, '..', 'build');
const PORT = 4183;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
  '.mov': 'video/quicktime',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
};

// All routes in both languages: /piano and /tw/piano, etc.
const allRoutes = Object.values(routes.languagePrefixes).flatMap((prefix) =>
  routes.canonical.map((route) => {
    if (route === '/') return prefix === '' ? '/' : prefix;
    return `${prefix}${route}`;
  })
);

// Static files win; anything else falls back to the app shell so client routing works.
//
// The shell is snapshotted in memory before any route is written, because the
// first route rendered is "/" and that overwrites build/index.html. Serving the
// overwritten file to later routes would bake the home page's <title>, canonical
// and description into every subsequent page on top of its own.
function createServer(shell) {
  return http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    const candidate = path.join(BUILD_DIR, urlPath);
    // Anything without a file extension is a route, so always serve the shell —
    // never a previously prerendered file, which would compound its metadata.
    const isFile =
      path.extname(urlPath) !== '' && fs.existsSync(candidate) && fs.statSync(candidate).isFile();

    if (!isFile) {
      res.writeHead(200, { 'Content-Type': MIME['.html'] });
      return res.end(shell);
    }

    const ext = path.extname(candidate).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    return fs.createReadStream(candidate).pipe(res);
  });
}

function outputPathFor(route) {
  if (route === '/') return path.join(BUILD_DIR, 'index.html');
  return path.join(BUILD_DIR, route.replace(/^\//, ''), 'index.html');
}

async function main() {
  const shellPath = path.join(BUILD_DIR, 'index.html');
  if (!fs.existsSync(shellPath)) {
    console.error('[prerender] No build/index.html found — run `npm run build` first.');
    process.exit(1);
  }

  const shell = fs.readFileSync(shellPath, 'utf8');
  if (!shell.includes('data-default="true"')) {
    console.error('[prerender] build/index.html looks already prerendered.');
    console.error('[prerender] Run `npm run build` for a clean shell instead of prerendering twice.');
    process.exit(1);
  }

  let puppeteer;
  try {
    puppeteer = require('puppeteer');
  } catch (err) {
    console.warn('[prerender] puppeteer not installed — skipping prerender.');
    console.warn('[prerender] The site will still work, but pages will not be crawlable.');
    return;
  }

  const server = createServer(shell);
  await new Promise((resolve) => server.listen(PORT, resolve));

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  });

  let rendered = 0;
  try {
    const page = await browser.newPage();

    // Lets components opt out of rendering during prerender. Anything that
    // manipulates the DOM outside React (the Leaflet map) has to stay out of the
    // static HTML or hydration will fail against markup React didn't produce.
    await page.evaluateOnNewDocument(() => {
      window.__PRERENDER__ = true;
    });

    // Skip media and third-party tiles — they don't change the HTML we capture
    // but they do make each page take seconds instead of milliseconds.
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const type = req.resourceType();
      const url = req.url();
      const heavy = type === 'media' || type === 'font';
      const thirdPartyImage = type === 'image' && !url.includes(`localhost:${PORT}`);
      if (heavy || thirdPartyImage) return req.abort();
      return req.continue();
    });

    for (const route of allRoutes) {
      const url = `http://localhost:${PORT}${route}`;
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });

      // Wait until React has mounted and <Seo /> has supplied a real title.
      await page.waitForFunction(
        () => {
          const root = document.getElementById('root');
          return root && root.children.length > 0 && document.title.trim().length > 0;
        },
        { timeout: 30000 }
      );

      const html = await page.evaluate(() => {
        // Drop the fallback tags from public/index.html so the saved page has
        // exactly one title and one description — the ones <Seo /> rendered.
        document.querySelectorAll('[data-default="true"]').forEach((el) => el.remove());
        return `<!DOCTYPE html>\n${document.documentElement.outerHTML}`;
      });

      const outPath = outputPathFor(route);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, html, 'utf8');

      const title = (html.match(/<title[^>]*>([^<]*)<\/title>/) || [, ''])[1];
      console.log(`[prerender] ${route.padEnd(24)} ${(html.length / 1024).toFixed(0)}kb  ${title}`);
      rendered += 1;
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log(`[prerender] Wrote ${rendered}/${allRoutes.length} routes.`);
  if (rendered !== allRoutes.length) {
    throw new Error(`only ${rendered} of ${allRoutes.length} routes rendered`);
  }
}

main().catch((err) => {
  // A failed prerender must never take a production deploy down with it — the
  // SPA still works, it just isn't crawlable. Check deploy logs for the
  // "Wrote 12/12 routes" line to confirm prerendering actually ran.
  console.error('');
  console.error('  ****************************************************************');
  console.error('  * PRERENDER FAILED — pages will NOT be crawlable by search      *');
  console.error('  * engines. The site itself still works. Reason:                 *');
  console.error(`  * ${err.message.slice(0, 60).padEnd(60)} *`);
  console.error('  ****************************************************************');
  console.error('');
});
