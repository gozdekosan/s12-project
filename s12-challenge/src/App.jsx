import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'
import {ThemeContext } from './context/ThemeContext.jsx';
import { useContext } from 'react';

function App() {
  const [language, setLanguage] = useState('en');
  const { isDarkMode} = useContext(ThemeContext);

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  return (
     <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-[#2B2727] text-white' : 'bg-white text-black'
      }`}
    >
  
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
     
    </div>
  );
}

export default App;