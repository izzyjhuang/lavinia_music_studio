import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  SITE_NAME,
  OG_IMAGE,
  metaFor,
  urlsFor,
  localBusinessSchema,
} from '../seo/siteMeta';

// React 19 hoists <title>, <meta> and <link> rendered anywhere in the tree
// into <head>, so this needs no helmet dependency. The prerenderer captures
// the resulting DOM, which is what search engines and social scrapers read.
const Seo = () => {
  const { pathname } = useLocation();
  const { title, description, key, lang } = metaFor(pathname);
  const urls = urlsFor(key);
  const schema = key === '/'; // studio-level structured data belongs on one page only
  const canonical = urls[lang];
  const htmlLang = lang === 'tw' ? 'zh-Hant' : 'en';

  // <html lang> is not hoistable, so set it directly.
  React.useEffect(() => {
    document.documentElement.lang = htmlLang;
  }, [htmlLang]);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Tells Google the two language versions are the same page. */}
      <link rel="alternate" hrefLang="en" href={urls.en} />
      <link rel="alternate" hrefLang="zh-Hant" href={urls.tw} />
      <link rel="alternate" hrefLang="x-default" href={urls.en} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={lang === 'tw' ? 'zh_TW' : 'en_US'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
      )}
    </>
  );
};

export default Seo;
