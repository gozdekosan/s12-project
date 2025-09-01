import React from 'react';
import data from '../data/data.json';
import { useSelector } from 'react-redux';

function Profile() {
  const language = useSelector(state => state.language.current);
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const content = data.languages[language].profile;

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-[#4731D3] text-white'} p-6`}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-left text-[#CBF281]">{content.title}</h1>
        <div className="mx-auto flex flex-col md:flex-row items-start justify-center gap-16 w-full">
          <div className="flex flex-col w-full md:w-1/3 space-y-4 text-lg !mt-10">
            <h2 className="text-2xl font-semibold text-left text-white">{content.basicInfo.basicInfoTitle}</h2>
            <div className="space-y-2 text-left">
              <p><span className="text-[#CBF281] font-normal">Doğum tarihi:</span> {content.basicInfo.birthDate}</p>
              <p><span className="text-[#CBF281] font-normal">İkamet şehri:</span> {content.basicInfo.city}</p>
              <p><span className="text-[#CBF281] font-normal">Eğitim durumu:</span> {content.basicInfo.education}</p>
              <p><span className="text-[#CBF281] font-normal">Tercih edilen rol:</span> {content.basicInfo.preferredRole}</p>
            </div>
          </div>

          <div className="w-full md:w-2/5 h-auto flex-shrink-0">
            <img src={content.image} className="w-full h-full object-cover rounded-lg" alt="Profile" />
          </div>

          <div className="flex flex-col w-full md:w-2/5 space-y-4 !mt-10">
            <h2 className="text-2xl font-semibold text-left text-white">{content.aboutMe.aboutTitle}</h2>
            <p className="text-left text-lg font-normal">{content.aboutMe.description1}</p>
            <p className="text-left text-lg font-normal">{content.aboutMe.description2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
