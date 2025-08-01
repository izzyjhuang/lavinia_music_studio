import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import owlLogo from '../images/owl-logo.png';
import { useLanguage } from './LanguageWrapper';

const bannerTitle = {
  en: 'Lavinia Lee Music Studio',
  tw: '李老師音樂教室'
};

const Banner = () => {
  const { language } = useLanguage();
  // Map zh to tw since we're using /tw in the URL
  const langKey = language === 'zh' ? 'tw' : language;
  return (
    <Link to="/" className="banner-link">
      <div className="banner">
        <img src={owlLogo} alt="Owl Logo" className="banner-logo" />
        <span className="banner-title">{bannerTitle[language]}</span>
      </div>
    </Link>
  );
};

export default Banner; 