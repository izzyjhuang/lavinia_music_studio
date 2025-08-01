import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import owlLogo from '../images/owl-logo.png';
import { useLanguage } from '../LanguageContext';

const bannerTitle = {
  en: 'Lavinia Lee Music Studio',
  zh: '李老師音樂教室'
};

const Banner = () => {
  const { language } = useLanguage();
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