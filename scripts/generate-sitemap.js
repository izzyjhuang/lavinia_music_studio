#!/usr/bin/env node
/**
 * Writes build/sitemap.xml and build/robots.txt.
 *
 * Every URL is listed with its hreflang alternates so Google treats the English
 * and Traditional Chinese pages as the same page in two languages rather than
 * as duplicate content.
 */
const fs = require('fs');
const path = require('path');
const routes = require('../src/seo/routes.json');

const BUILD_DIR = path.join(__dirname, '..', 'build');
const { siteUrl, languagePrefixes } = routes;

// Keep noindex pages out of the sitemap — submitting a URL you also tell Google
// not to index is a contradictory signal.
const noindex = routes.noindex || [];
const canonical = routes.canonical.filter((r) => !noindex.includes(r));

// Home first, then the pages a parent is most likely to search for.
const PRIORITY = {
  '/': '1.0',
  '/piano': '0.9',
  '/violin-viola': '0.9',
  '/music-lessons-glenview': '0.8',
  '/music-lessons-northbrook': '0.8',
  '/music-lessons-wilmette': '0.8',
  '/about': '0.7',
  '/contact': '0.7',
};

// Trailing slashes match what the host actually serves — /piano 301s to /piano/,
// and listing the redirecting form would waste crawl budget on every URL.
const urlFor = (prefix, route) =>
  `${siteUrl}${prefix}${route === '/' ? '/' : `${route}/`}`;

function buildSitemap() {
  const today = new Date().toISOString().split('T')[0];
  const entries = [];

  for (const prefix of Object.values(languagePrefixes)) {
    for (const route of canonical) {
      const alternates = Object.entries(languagePrefixes)
        .map(([lang, p]) => {
          const hreflang = lang === 'tw' ? 'zh-Hant' : 'en';
          return `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${urlFor(p, route)}"/>`;
        })
        .join('\n');

      entries.push(
        [
          '  <url>',
          `    <loc>${urlFor(prefix, route)}</loc>`,
          alternates,
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor('', route)}"/>`,
          `    <lastmod>${today}</lastmod>`,
          `    <changefreq>monthly</changefreq>`,
          `    <priority>${PRIORITY[route] || '0.5'}</priority>`,
          '  </url>',
        ].join('\n')
      );
    }
  }

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    entries.join('\n'),
    '</urlset>',
    '',
  ].join('\n');
}

const robots = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

fs.mkdirSync(BUILD_DIR, { recursive: true });
fs.writeFileSync(path.join(BUILD_DIR, 'sitemap.xml'), buildSitemap(), 'utf8');
fs.writeFileSync(path.join(BUILD_DIR, 'robots.txt'), robots, 'utf8');

const count = canonical.length * Object.keys(languagePrefixes).length;
console.log(`[sitemap] Wrote build/sitemap.xml (${count} URLs) and build/robots.txt`);
