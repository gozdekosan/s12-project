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
      className={`p-6 pb-12  ${
        isDarkMode ? 'bg-[#171043] text-white' : 'bg-[#4731D3] text-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-left text-[#CBF81]">
          {content.title}
        </h1>
        <div className="mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-16 w-full">
     
          <div className="flex flex-col w-full md:w-1/3 space-y-4 text-xl !mt-10 items-center md:items-start">
            <h2 className="text-3xl font-semibold text-white text-left">
              {content.basicInfo.basicInfoTitle}
            </h2>
            <div className="space-y-2 text-left w-full max-w-md">
              {[
                { label: "Doğum tarihi", value: content.basicInfo.birthDate },
                { label: "İkamet şehri", value: content.basicInfo.city },
                { label: "Eğitim durumu", value: content.basicInfo.education },
                { label: "Tercih edilen rol", value: content.basicInfo.preferredRole },
              ].map((item, index) => (
                <div key={index} className="flex flex-row justify-start">
                  <div className="w-27 text-[#CBF281] font-semibold mr-2 text-left">{item.label}</div>
                  <div className="flex-1 text-left">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

  
          <div className="w-full md:w-1/3 h-auto flex-shrink-0 flex justify-center items-center">
            <img
              src={content.image}
              className="w-full h-full object-cover rounded-lg"
              alt="Profile"
            />
          </div>

    
          <div className="flex flex-col w-full md:w-1/3 space-y-6 !mt-10 items-center md:items-start">
            <div className="w-full max-w-md">
              <h2 className="text-3xl font-semibold text-white text-left mb-4">
                {content.aboutMe.aboutTitle}
              </h2>
              <p className="text-left text-xl font-normal mb-4">
                {content.aboutMe.description1}
              </p>
              <p className="text-left text-xl font-normal">
                {content.aboutMe.description2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;