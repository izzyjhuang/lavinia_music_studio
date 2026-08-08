import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  SITE_NAME,
  OG_IMAGE,
  metaFor,
  urlsFor,
  localBusinessSchema,
  breadcrumbSchema,
} from '../seo/siteMeta';

// Head tags are applied imperatively rather than rendered as JSX.
//
// React 19 can hoist <title>/<meta>/<link> from anywhere in the tree, but when
// it hydrates a prerendered page it APPENDS them instead of matching the ones
// already in <head> — leaving two titles, two canonicals and six hreflang links,
// plus a hydration mismatch on every route. Mutating the existing tags in an
// effect sidesteps both: effects don't participate in hydration, and upserting
// by selector updates the prerendered tag in place.
function upsert(selector, tagName, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(tagName);
    document.head.appendChild(el);
  }
  // The fallback tags in public/index.html carry data-default, and the
  // prerenderer deletes anything still marked that way. Once this component has
  // written real values into a tag, drop the marker so it survives the capture.
  el.removeAttribute('data-default');
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

function removeIfPresent(selector) {
  const el = document.head.querySelector(selector);
  if (el) el.remove();
}

const Seo = () => {
  const { pathname } = useLocation();
  const { title, description, key, lang, noindex } = metaFor(pathname);
  const urls = urlsFor(key);
  const canonical = urls[lang];
  const htmlLang = lang === 'tw' ? 'zh-Hant' : 'en';
  const isHome = key === '/';

  React.useEffect(() => {
    document.documentElement.lang = htmlLang;
    document.title = title;
    // Same reason as upsert(): the fallback <title> must lose its marker.
    const titleEl = document.head.querySelector('title');
    if (titleEl) titleEl.removeAttribute('data-default');

    upsert('meta[name="description"]', 'meta', { name: 'description', content: description });
    upsert('link[rel="canonical"]', 'link', { rel: 'canonical', href: canonical });

    upsert('link[rel="alternate"][hreflang="en"]', 'link', { rel: 'alternate', hreflang: 'en', href: urls.en });
    upsert('link[rel="alternate"][hreflang="zh-Hant"]', 'link', { rel: 'alternate', hreflang: 'zh-Hant', href: urls.tw });
    upsert('link[rel="alternate"][hreflang="x-default"]', 'link', { rel: 'alternate', hreflang: 'x-default', href: urls.en });

    const og = {
      'og:type': 'website',
      'og:site_name': SITE_NAME,
      'og:title': title,
      'og:description': description,
      'og:url': canonical,
      'og:image': OG_IMAGE,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:locale': lang === 'tw' ? 'zh_TW' : 'en_US',
    };
    Object.entries(og).forEach(([property, content]) =>
      upsert(`meta[property="${property}"]`, 'meta', { property, content })
    );

    const tw = {
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': OG_IMAGE,
    };
    Object.entries(tw).forEach(([name, content]) =>
      upsert(`meta[name="${name}"]`, 'meta', { name, content })
    );

    if (noindex) {
      upsert('meta[name="robots"]', 'meta', { name: 'robots', content: 'noindex, follow' });
    } else {
      removeIfPresent('meta[name="robots"]');
    }

    // Structured data, keyed by data-schema so each block is replaced rather
    // than accumulating on client-side navigation.
    const schemas = { breadcrumb: breadcrumbSchema(key, lang, title) };
    if (isHome) schemas.studio = localBusinessSchema();

    ['studio', 'breadcrumb'].forEach((name) => {
      const selector = `script[data-schema="${name}"]`;
      if (!schemas[name]) return removeIfPresent(selector);
      const el = upsert(selector, 'script', { type: 'application/ld+json', 'data-schema': name });
      el.textContent = JSON.stringify(schemas[name]);
      return el;
    });

    // Signals the prerenderer that metadata has been applied — without it the
    // capture can race the effect and save the fallback <title>.
    document.documentElement.dataset.seoReady = 'true';
  }, [title, description, canonical, htmlLang, lang, key, noindex, isHome, urls.en, urls.tw]);

  return null;
};

export default Seo;
