import React, { useState } from 'react';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const modeText = isDarkMode ? 'DARK MODE' : 'LIGHT MODE';

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className="flex w-screen h-screen px-6"
      style={{
        background: `linear-gradient(to right, #4731D3 0%, #4731D3 70%, #CBF281 70%, #CBF281 100%)`,
      }}
    >
      <header className="relative w-full flex flex-col items-center">
        <h2 className="text-[#CBF281] text-3xl font-bold absolute top-[-2rem] left-0">
          gozde
        </h2>

        <div className="flex items-center absolute top-0" style={{ left: 'calc(58%)' }}>
          <button className="bg-transparent border-none p-0 transition mr-4">
            <span style={{ color: '#CBF281' }}>TÜRKÇE</span>{' '}
            <span style={{ color: '#777777' }}>YE GEÇ</span>
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
              onChange={handleToggle}
            />
            <div
              className="w-14 h-8 rounded-full p-1 transition-colors duration-300 ease-in-out"
              style={{
                backgroundColor: isDarkMode ? '#8F88FF' : '#3A3A3A',
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

        <div className="max-w-lg mt-12" left="calc(0% - 15rem)">
          <h1 className="text-2xl font-bold text-[#CBF281] text-left">
            I am a Frontend Developer...
          </h1>
          <p className="text-2xl italic mb-6 text-white text-left">
            ..who likes to craft solid and scalable frontend products with great
            user experiences.
          </p>
          <nav className="flex justify-center">
            <ul className="flex space-x-6">
              <li>
                <a href="https://github.com/gozdekosan" target="_blank">
                  <img
                    src="./src/assets/header/github.png"
                    alt="Github"
                    style={{ width: 'auto', height: '2.5rem' }}
                  />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/gozdekosan" target="_blank">
                  <img
                    src="./src/assets/header/linkedin.png"
                    alt="Linkedin"
                    style={{ width: 'auto', height: '2.5rem' }}
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <img
          src="./src/assets/image-1.png"
          className="absolute top-1/2 transform -translate-y-1/2"
          style={{
            width: '28rem',
            height: '30rem',
            left: 'calc(71.43% - 14rem)',
          }}
        />
      </header>
    </div>
  );
}

export default Header;