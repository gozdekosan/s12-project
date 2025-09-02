import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { LanguageProvider } from './context/LanguageContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

function App() {
  const [language, setLanguage] = useState('en');

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  return (
    <div>
       <LanguageProvider>
      <ThemeProvider>
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      </ThemeProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;