import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const language = useSelector((state) => state.language.current);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className={isDarkMode ? 'bg-[#252128]': 'bg-white'}>
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
