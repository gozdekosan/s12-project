import React, { useContext } from 'react';
import data from '../data/data.json';
import { LanguageContext } from '../context/LanguageContext.jsx';
import { ThemeContext } from '../context/ThemeContext.jsx';

function Profile() {
  const { language } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);
  const content = data.languages[language].profile;

  return (
    <div
      className={`p-6 transition-colors duration-500 ${
        isDarkMode ? 'bg-[#171043] text-white' : 'bg-[#4731D3] text-white'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-left text-[#CBF281]">
          {content.title}
        </h1>
        <div className="mx-auto flex flex-col md:flex-row items-start justify-center gap-16 w-full">
          <div className="flex flex-col w-full md:w-1/3 space-y-4 text-lg !mt-10">
            <h2 className="text-2xl font-semibold text-left text-white">{content.basicInfo.basicInfoTitle}</h2>
            <div className="space-y-2 text-left">
              {[
               { label: "Doğum tarihi", value: content.basicInfo.birthDate },
               { label: "İkamet şehri", value: content.basicInfo.city },
               { label: "Eğitim durumu", value: content.basicInfo.education },
               { label: "Tercih edilen rol", value: content.basicInfo.preferredRole },
               ].map((item, index) => (
                <div key={index} className="flex">
                <div className="w-27 text-[#CBF281] font-semibold mr-2">{item.label}</div>
                <div className="flex-1">{item.value}</div>
                </div>
              ))}
              </div>
          </div>

          <div className="w-full md:w-2/5 h-auto flex-shrink-0">
            <img
              src={content.image}
              className="w-full h-full object-cover rounded-lg"
              alt="Profile"
            />
          </div>

          <div className="flex flex-col w-full md:w-2/5 space-y-4 !mt-10">
            <h2 className="text-2xl font-semibold text-left text-white">{content.aboutMe.aboutTitle}</h2>
            <p className="text-left text-lg font-normal">
              {content.aboutMe.description1}
            </p>
            <p className="text-left text-lg font-normal">
              {content.aboutMe.description2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
