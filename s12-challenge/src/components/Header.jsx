import React from 'react';
import data from '../data/data.json';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLanguage } from '../store/languageSlice';
import { toggleTheme } from '../store/themeSlice';

function Header() {
  const language = useSelector(state => state.language.current);
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const content = data.languages[language].header;
  const modeText = isDarkMode ? 'LIGHT MODE' : 'DARK MODE';
  const buttonText = language === 'en' ? 'TÜRKÇEYE GEÇ' : 'SWITCH ENGLISH';

  return (
    <div
      className="flex w-screen h-screen px-6"
      style={{
        background: isDarkMode
          ? 'linear-gradient(to right, #171043 0%, #171043 70%, #211F0B 70%, #211F0B 100%)'
          : 'linear-gradient(to right, #4731D3 0%, #4731D3 70%, #CBF281 70%, #CBF281 100%)',
      }}
    >
      <header className="relative w-full flex flex-col items-center justify-center">
        <h2 className="text-[#CBF281] text-3xl font-bold absolute top-2 left-6">
          {content.title}
        </h2>

        <div className="flex items-center absolute top-0" style={{ left: 'calc(59%)' }}>
          <button
            className="!bg-transparent border-none p-0 transition mr-4"
            onClick={() => dispatch(toggleLanguage())}
          >
            <span style={{ color: '#CBF281' }}>{buttonText.split(' ')[0]}</span>{' '}
            <span style={{ color: '#777777' }}>{buttonText.split(' ')[1]}</span>
          </button>

          <label
            htmlFor="darkModeToggle"
            className="flex items-center cursor-pointer text-[#4731D3] font-bold text-lg"
          >
            <input
              type="checkbox"
              id="darkModeToggle"
              className="hidden"
              checked={isDarkMode}
              onChange={() => dispatch(toggleTheme())}
            />
            <div
              className="w-14 h-8 rounded-full p-1 transition-colors duration-300 ease-in-out"
              style={{
                backgroundColor: isDarkMode ? '#3A3A3A' : '#8F88FF',
              }}
            >
              <div
                className="w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out"
                style={{
                  transform: isDarkMode ? 'translateX(26px)' : 'translateX(0)',
                  backgroundColor: '#FFE86E',
                }}
              />
            </div>
            <span className="ml-2 text-sm">{modeText}</span>
          </label>
        </div>

        <div className="max-w-lg mt-12" style={{ marginRight: 'calc(35%)' }}>
          <h1 className="text-2xl font-bold text-[#CBF281] text-left">
            {content.mainHeading}
          </h1>
          <p className="text-2xl italic mb-6 text-white text-left">{content.description}</p>
          <nav className="flex justify-center">
            <ul className="flex space-x-6">
              {content.socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <img src={link.icon} alt={link.name} style={{ width: 'auto', height: '2.5rem' }} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <img
          src="./src/assets/image-1.png"
          className="absolute top-1/2 transform -translate-y-1/2"
          style={{ width: '28rem', height: '30rem', left: 'calc(71.43% - 14rem)' }}
        />
      </header>
    </div>
  );
}

export default Header;
