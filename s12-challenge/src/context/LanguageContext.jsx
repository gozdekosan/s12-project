import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

 
  useEffect(() => {
    const storedLang = localStorage.getItem('appLanguage');
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('appLanguage', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'tr' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
