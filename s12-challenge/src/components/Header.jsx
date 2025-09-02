import React, { useContext } from 'react';
import data from '../data/data.json';
import { LanguageContext } from '../context/LanguageContext.jsx';
import { ThemeContext } from '../context/ThemeContext.jsx';

function Header() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const modeText = isDarkMode ? 'LIGHT MODE' : 'DARK MODE';
  const content = data.languages[language].header;
  const buttonText = language === 'en' ? `TÜRKÇE'YE GEÇ` : 'SWITCH ENGLISH';

  return (
    <div
      className="flex w-screen h-screen px-6"
      style={{
        background: isDarkMode
          ? 'linear-gradient(to right, #171043 0%, #171043 70%, #1A210B 70%, #1A210B 100%)'
          : 'linear-gradient(to right, #4731D3 0%, #4731D3 70%, #CBF281 70%, #CBF281 100%)',
      }}
    >
      <header className="relative w-full flex flex-col md:flex-row items-center justify-center">

        <h2 className="text-[#CBF281] text-3xl font-bold absolute top-2 left-6">
          {content.title}
        </h2>


        <div className="flex flex-row items-center justify-end md:justify-start w-full md:w-auto absolute top-0 left-auto right-4 sm:right-16 md:left-[50%] lg:left-[50%] xl:left-[58%]">
          <button
            className={`!bg-transparent border-none p-0 transition mr-4 ${
              isDarkMode ? 'text-[#8F88FF]' : 'text-[#CBF281]'
            }`}
            onClick={toggleLanguage}
          >
            <span>{buttonText.split(' ')[0]}</span>{' '}
            <span className={isDarkMode ? 'text-[#777777]' : 'text-[#D9D9D9]'}>
              {buttonText.split(' ')[1]}
            </span>
          </button>

          <label
            htmlFor="darkModeToggle"
            className={`flex items-center cursor-pointer font-bold text-lg ${
              isDarkMode ? 'text-[#D9D9D9]' : 'text-[#4731D3]'
            }`}
          >
            <input
              type="checkbox"
              id="darkModeToggle"
              className="hidden"
              checked={isDarkMode}
              onChange={toggleTheme}
            />
            <div
              className="w-12 h-6 rounded-full p-1 ease-in-out"
              style={{
                backgroundColor: isDarkMode ? '#3A3A3A' : '#8F88FF',
              }}
            >
              <div
                className="w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out"
                style={{
                  transform: isDarkMode ? 'translateX(0)' : 'translateX(26px)',
                  backgroundColor: '#FFE86E',
                }}
              />
            </div>
            <span className="ml-2 text-sm">{modeText}</span>
          </label>
        </div>


        <div className="flex flex-col-reverse md:flex-row items-center w-full max-w-6xl mx-auto mt-12 md:mt-0">

          <div className="flex flex-col md:w-1/2 space-y-4 md:pr-12 text-left">
            <h1 className="text-2xl font-bold text-[#CBF281]">{content.mainHeading}</h1>
            <p className="text-2xl italic text-white">{content.description}</p>

            <nav className="flex justify-center md:justify-start">
              <ul className="flex space-x-6">
                {content.socialLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <img
                        src={isDarkMode ? link.iconDark : link.icon}
                        alt={link.name}
                        className="h-10 w-auto"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex justify-center mb-6 md:mb-0">
            <img
              src="./src/assets/image-1.png"
              className="w-full h-auto sm:w-120 sm:h-120 md:w-[28rem] md:h-[30rem] object-cover rounded-lg"
              alt="Profile"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;