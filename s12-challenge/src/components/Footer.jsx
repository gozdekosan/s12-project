import React, { useContext } from 'react';
import data from '../data/data.json';
import { LanguageContext } from '../context/LanguageContext.jsx';
import { ThemeContext } from '../context/ThemeContext.jsx';

function Footer() {
  const { language } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);
  const content = data.languages[language].footer;

  return (
    <div className={`${isDarkMode ? 'bg-[#252128] text-white' : 'bg-[#F9F9F9] text-[#120B39]'} py-12 px-6`}>
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <h1 className={`text-5xl font-bold font-inter ${isDarkMode ? 'text-[#8F88FF]' : 'text-[#4731D3]'}`}>
          {content.title}
        </h1>
        <p className={`text-gray-600 text-2xl ${isDarkMode ? 'text-white' : 'text-[#4731D3]'}`}>
          {content.subtitle}
        </p>
         <p className={`font-inter text-xl font-medium underline ${isDarkMode ? 'text-[#8F88FF]' : 'text-[#4731D3]'}`}>
          {content.email}
        </p>

       <nav className="flex justify-center mt-6">
  <ul className="flex space-x-6">
    {content.socialLinks.map((link, index) => (
      <li key={index}>
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          <img
            src={isDarkMode && link.iconDark ? link.iconDark : link.icon}
            alt={link.name}
            className="h-10 w-auto"
          />
        </a>
      </li>
    ))}
  </ul>
</nav>

      </div>
    </div>
  );
}

export default Footer;
