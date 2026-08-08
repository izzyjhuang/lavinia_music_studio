import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageContext = React.createContext();

const langFromPath = (pathname) => (/^\/tw(\/|$)/.test(pathname) ? 'tw' : 'en');

const LanguageWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Derived from the URL only. Reading localStorage here would make the first
  // client render disagree with the prerendered HTML and break hydration.
  const [language, setLanguage] = useState(() => langFromPath(pathname));

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    const newPath =
      lang === 'tw'
        ? '/tw' + (pathname === '/' ? '' : pathname)
        : pathname.replace(/^\/tw/, '') || '/';
    navigate(newPath, { replace: true });
  };

  // Apply a saved preference only on a bare landing at the root. Deep links keep
  // whatever language their URL says, so an English search result never bounces
  // a visitor into the Chinese version.
  useEffect(() => {
    if (pathname !== '/') return;
    const stored = localStorage.getItem('language');
    if (stored === 'tw') {
      setLanguage('tw');
      navigate('/tw', { replace: true });
    }
  }, [pathname, navigate]);

  // Keep state in sync when the URL changes by any other means (back button, links).
  useEffect(() => {
    const fromPath = langFromPath(pathname);
    setLanguage((current) => (current === fromPath ? current : fromPath));
  }, [pathname]);

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
