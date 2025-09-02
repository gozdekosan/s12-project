import React, { useContext } from 'react';
import data from '../data/data.json';
import { LanguageContext } from '../context/LanguageContext.jsx';

function Projects() {
  const { language } = useContext(LanguageContext);
  const content = data.languages[language].projects;

  return (
    <div className="bg-[#CBF281] p-8 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-left text-[#4731D3]">
          {content.title}
        </h1>

        {content.items.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg mb-8 flex flex-col md:flex-row gap-8 items-start"
          >
            <img
              src={project.image}
              alt={`${project.name} Projesi`}
              className="w-full h-auto max-h-[360px] object-cover rounded-lg transition duration-300 md:w-1/2"
            />
            <div className="flex flex-col w-full md:w-1/2">
              <h2 className="text-3xl font-semibold mb-2 text-left text-[#4338CA]">
                {project.name}
              </h2>
              <p className="text-gray-700 mb-4 text-lg text-left">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap mb-4 justify-start">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-4 py-2 bg-[#5B3DF5] text-white rounded-full text-sm font-medium"
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
                    className="text-[#5B3DF5] hover:underline font-medium"
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
