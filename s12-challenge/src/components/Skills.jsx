import React from 'react';
import { useSelector } from 'react-redux';
import data from '../data/data.json';

function Skills() {

  const language = useSelector((state) => state.language.current);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const content = data.languages[language].skills;

  return (
    <div
      className={`max-w-4xl mx-auto p-6 flex ${isDarkMode ? 'bg-[#252128]' : 'bg-white'}`}
      style={{ marginRight: 'calc(25%)' }}
    >
      <h1
        className={`!text-left text-2xl font-bold mr-8 ${
          isDarkMode ? 'text-white' : 'text-[#4832D3]'
        }`}
      >
        {content.title}
      </h1>

      <div className="grid grid-cols-2 gap-6">
        {content.items.map((skill, index) => (
          <div key={index} className="flex items-center space-x-6">
            <img
              src={skill.icon}
              className="w-40 h-40 object-contain transform hover:scale-110 transition duration-300"
              alt={skill.name}
            />
            <span
              className={`text-2xl font-medium font-inter ${
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
