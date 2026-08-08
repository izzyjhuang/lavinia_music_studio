import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageWrapper';
import { LOCATIONS } from '../seo/locations';
import './Footer.css';

const text = {
  en: {
    areas: 'Lessons by area',
    built: 'This website was built with ReactJS',
  },
  tw: {
    areas: '各地區課程',
    built: 'This website was built with ReactJS',
  },
};

const Footer = () => {
  const { language } = useLanguage();
  const langKey = language === 'zh' ? 'tw' : language;
  const prefix = langKey === 'tw' ? '/tw' : '';

  return (
    <footer className="site-footer">
      {/* Sitewide links so the per-suburb pages are reachable by crawlers from
          every page, not only from the sitemap. */}
      <nav className="footer-areas" aria-label={text[langKey].areas}>
        {/* One interpolation, not `{value}:` — adjacent text nodes serialise as a
            single node and then fail to hydrate. */}
        <span className="footer-areas-label">{`${text[langKey].areas}:`}</span>
        {Object.values(LOCATIONS).map((loc) => (
          <Link key={loc.slug} to={`${prefix}/${loc.slug}`} className="footer-area-link">
            {loc.h1[langKey]}
          </Link>
        ))}
      </nav>
      <div>{text[langKey].built}</div>
      <div>© Copyright 2025 Lavinia Lee Music Studio</div>
    </footer>
  );
};

export default Footer;
