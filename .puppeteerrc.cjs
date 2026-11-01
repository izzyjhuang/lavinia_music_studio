const { join } = require('path');

// Keep the Chrome download inside node_modules. Netlify caches node_modules
// between builds but not ~/.cache, so with the default location a cached build
// skips puppeteer's postinstall and the prerender can't find Chrome.
module.exports = {
  cacheDirectory: join(__dirname, 'node_modules', '.cache', 'puppeteer'),
};
