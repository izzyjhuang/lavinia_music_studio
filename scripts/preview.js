#!/usr/bin/env node
/**
 * Serves build/ exactly the way Netlify will: prerendered files win, everything
 * else falls back to the app shell. Use it to sanity-check the production build
 * locally — `npm run preview`.
 */
const fs = require('fs');
const http = require('http');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '..', 'build');
const PORT = process.env.PORT || 4173;

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

if (!fs.existsSync(path.join(BUILD_DIR, 'index.html'))) {
  console.error('No build/ found — run `npm run build` first.');
  process.exit(1);
}

http
  .createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    const direct = path.join(BUILD_DIR, urlPath);

    // A route resolves to its prerendered <route>/index.html; assets resolve directly.
    const candidates = [
      direct,
      path.join(direct, 'index.html'),
      path.join(BUILD_DIR, 'index.html'),
    ];
    const filePath = candidates.find((p) => fs.existsSync(p) && fs.statSync(p).isFile());
    const ext = path.extname(filePath).toLowerCase();

    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  })
  .listen(PORT, () => {
    console.log(`\n  Preview running at http://localhost:${PORT}\n`);
  });
