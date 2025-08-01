import React from 'react';
import { useLanguage } from '../LanguageContext';

const LanguageSelector = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <select value={language} onChange={e => toggleLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="zh">繁體中文（台灣）</option>
    </select>
  );
};

export default LanguageSelector; 