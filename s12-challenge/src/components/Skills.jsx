import React, { useContext } from 'react';
import data from '../data/data.json';
import { LanguageContext } from '../context/LanguageContext.jsx';
import { ThemeContext } from '../context/ThemeContext.jsx';

function Skills() {
  const { language } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);
  const content = data.languages[language].skills;

  return (
    <div
      className={`max-w-4xl mx-auto p-6 flex flex-col ${
        isDarkMode ? 'bg-[#2B2727]' : 'bg-white'
      }`}
      style={{ marginRight: 'calc(25%)' }}
    >
      <h1
        className={`!text-left text-2xl font-bold mr-8 mb-6 ${
          isDarkMode ? 'text-[#CBF281]' : 'text-[#4832D3]'
        }`}
      >
        {content.title}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-8">
        {content.items.map((skill, index) => (
          <div key={index} className="flex items-center space-x-8 md:pl-4">
            <img
              src={skill.icon}
              alt={skill.name}
              className="object-contain
                         w-20 h-20 sm:w-24 sm:h-24 md:w-[140px] md:h-[140px]"
              style={{ maxWidth: '140px', maxHeight: '140px' }}
            />
            <span
              className={`text-lg md:text-xl font-medium font-inter ${
                isDarkMode ? 'text-white' : 'text-[#777777]'
              }`}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;