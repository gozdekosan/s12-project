import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [language, setLanguage] = useState('en');

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  return (
    <div>
      <Header language={language} onLanguageToggle={handleLanguageToggle} />
      <Skills language={language} />
      <Profile language={language} />
      <Projects language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;