import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LanguageContext = React.createContext();

const LanguageWrapper = ({ children }) => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState(() => {
    // Check URL first, then localStorage, then default to 'en'
    const urlLang = window.location.pathname.split('/')[1];
    if (urlLang === 'tw') return 'tw';
    return localStorage.getItem('language') || 'en';
  });

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    // Update URL
    const currentPath = window.location.pathname;
    const newPath = lang === 'tw' ? '/tw' + (currentPath === '/' ? '' : currentPath) : currentPath.replace(/^\/tw/, '');
    navigate(newPath, { replace: true });
  };

  useEffect(() => {
    // Update URL when language changes
    if (language === 'tw' && !window.location.pathname.startsWith('/tw')) {
      const newPath = '/tw' + (window.location.pathname === '/' ? '' : window.location.pathname);
      navigate(newPath, { replace: true });
    } else if (language === 'en' && window.location.pathname.startsWith('/tw')) {
      const newPath = window.location.pathname.replace(/^\/tw/, '');
      navigate(newPath, { replace: true });
    }
  }, [language, navigate]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageWrapper');
  }
  return context;
};

export default LanguageWrapper;
