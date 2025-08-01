import React from 'react';
import { useLanguage } from './LanguageWrapper';

const LanguageSelector = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <select value={language} onChange={e => toggleLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="tw">繁體中文（台灣）</option>
    </select>
  );
};

export default LanguageSelector; 