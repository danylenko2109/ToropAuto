import { useState, useEffect } from 'react';
import { translations } from '../data/translations';

export const useLanguage = () => {
  const [currentLang, setCurrentLang] = useState('ru');

  useEffect(() => {
    const savedLang = localStorage.getItem('torop-auto-lang');
    if (savedLang && translations[savedLang]) {
      setCurrentLang(savedLang);
    }
  }, []);

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setCurrentLang(lang);
      localStorage.setItem('torop-auto-lang', lang);
    }
  };

  const t = (key) => {
    return translations[currentLang][key] || key;
  };

  return {
    currentLang,
    changeLanguage,
    t
  };
};