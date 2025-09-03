import React, { useContext,useEffect } from 'react';
import data from '../data/data.json';
import { LanguageContext } from '../context/LanguageContext.jsx';
import { ThemeContext } from '../context/ThemeContext.jsx';
import axios from 'axios';

function Projects() {
  const { language } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);
  const content = data.languages[language].projects;

  const api = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: 'x-api-key: reqres-free-v1',
});

useEffect(() => {
    async function postData() {
      try {
        for (let project of content.items) {
          const response = await api.post('/projects', {
            name: project.name,
            description: project.description,
            tags: project.tags,
            image: project.image,
            links: project.links,
          });
          console.log(`POST sonucu (${project.name}):`, response.data);
        }
      } catch (err) {
        console.error('Hata:', err.message);
      }
    }
    postData();
  }, [content.items]);

  return (
    <div className={`p-8 min-h-screen ${isDarkMode ? 'bg-[#1A210B] text-white' : 'bg-[#CBF281] text-[#4731D3]'}`}>
      <div className="max-w-5xl mx-auto">
        <h1 className={`text-4xl font-bold mb-8 text-left ${isDarkMode ? 'text-[#CBF281]' : 'text-[#4731D3]'}`}>
          {content.title}
        </h1>


        {content.items.map((project, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg mb-8 flex flex-col md:flex-row gap-8 items-start  ${isDarkMode ? 'bg-[#2B2727]' : 'bg-white '}`}
          >
            <img
              src={project.image}
              alt={`${project.name} Projesi`}
              className="w-full h-auto max-h-[360px] object-cover rounded-lg md:w-1/2"
            />
            <div className="flex flex-col w-full md:w-1/2">
               <h2 className={`text-3xl font-semibold mb-2 text-left ${isDarkMode ? 'text-[#C1BAED]' : 'text-[#4338CA]'}`}>
                {project.name}
              </h2>
              <p className={`text-gray-700 mb-4 text-lg text-left ${isDarkMode ? 'text-white' : 'text-[#383838]'}`}>
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap mb-4 justify-start">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-[#8173DA] text-white' : 'bg-[#5B3DF5] text-white'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
                <nav className="flex gap-4">
               {project.links.map((link, linkIndex) => (
               <a
                 key={linkIndex}
                 href={link.url}
                className={`font-medium !underline decoration-2 decoration-current ${isDarkMode ? '!text-[#CBF281]' : '!text-[#120B39]'}`}
               >
              {link.text}
              </a>
                ))}
                </nav>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
