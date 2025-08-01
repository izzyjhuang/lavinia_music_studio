import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from './LanguageWrapper';

const navText = {
  en: {
    about: 'About Me',
    piano: 'Piano',
    violin: 'Violin/Viola',
    students: 'Student Resources',
    contact: 'Contact',
  },
  tw: {
    about: '關於我',
    piano: '鋼琴',
    violin: '小提琴/中提琴',
    students: '學生資源',
    contact: '聯絡',
  }
};

const Navbar = () => {
  const { language } = useLanguage();
  const location = useLocation();
  // Map zh to tw since we're using /tw in the URL
  const langKey = language === 'zh' ? 'tw' : language;
  const t = navText[langKey];
  return (
    <nav>
      <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>{t.about}</Link>
      <Link to="/piano" className={location.pathname === '/piano' ? 'active' : ''}>{t.piano}</Link>
      <Link to="/violin-viola" className={location.pathname === '/violin-viola' ? 'active' : ''}>{t.violin}</Link>
      <Link to="/current-students" className={location.pathname === '/current-students' ? 'active' : ''}>{t.students}</Link>
      <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>{t.contact}</Link>
      <LanguageSelector />
    </nav>
  );
};

export default Navbar; 