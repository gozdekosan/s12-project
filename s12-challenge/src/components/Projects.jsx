import React from 'react';

function Projects() {
  return (
    <div className="bg-[#CBF281] p-8 min-h-screen">

      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-left text-[#4731D3]">
          Projects
        </h1>


        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 flex flex-col md:flex-row gap-8 items-start">
          <img 
            src="./src/assets/projects/workintech.png" 
            alt="Workintech Projesi" 
            className="w-full h-auto max-h-[360px] object-cover rounded-lg transition duration-300 md:w-1/2" 
          />
          <div className="flex flex-col w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-2 text-left text-[#4338CA]">Workintech</h2>
            <p className="text-gray-700 mb-4 text-lg text-left">
              Kullanıcılarınızın hangi çerezleri kabul edip reddedeceğini seçmesine olanak tanıyan basit,
              özelleştirilebilir, minimal kurulumlu bir çerez eklentisidir. Vanilla JS, SCSS ve Parcel Bundler ile
              oluşturulmuştur ve bir NPM paketi olarak mevcuttur. Git deposu, koda ve temalara her türlü
              özelleştirme yapmayı mümkün kılar.
            </p>
            <div className="flex gap-2 flex-wrap mb-4 justify-start">
              <span className="px-4 py-2 bg-[#5B3DF5] text-white rounded-full text-sm font-medium">React</span>
              <span className="px-4 py-2 bg-[#5B3DF5] text-white rounded-full text-sm font-medium">Redux</span>
              <span className="px-4 py-2 bg-[#5B3DF5] text-white rounded-full text-sm font-medium">Vercel</span>
            </div>
            <nav className="flex gap-4">
              <a href="#" className="text-[#5B3DF5] underline font-medium">View site</a>
              <a href="#" className="text-[#5B3DF5] underline font-medium">GitHub</a>
            </nav>
          </div>
        </div>


        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-8 items-start">
          <img 
            src="./src/assets/projects/journey.png" 
            alt="Journey Projesi" 
            className="w-full h-auto max-h-[360px] object-cover rounded-lg transition duration-300 md:w-1/2" 
          />
          <div className="flex flex-col w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-2 text-left text-[#4338CA]">Journey</h2>
            <p className="text-gray-700 mb-4 text-lg text-left">
              Açık kaynaklı ve tam özellikli bir kişisel blog uygulamasıdır. Kullanıcıların kolayca makale
              yazmasına, düzenlemesine ve yayınlamasına olanak tanır. Uygulama, hızlı performans ve
              mükemmel bir kullanıcı deneyimi sağlamak için modern teknolojilerle geliştirilmiştir.
            </p>
            <div className="flex gap-2 flex-wrap mb-4 justify-start">
              <span className="px-4 py-2 bg-[#5B3DF5] text-white rounded-full text-sm font-medium">React</span>
              <span className="px-4 py-2 bg-[#5B3DF5] text-white rounded-full text-sm font-medium">Redux</span>
              <span className="px-4 py-2 bg-[#5B3DF5] text-white rounded-full text-sm font-medium">Vercel</span>
            </div>
            <nav className="flex gap-4">
              <a href="#" className="text-[#5B3DF5] hover:underline font-medium">View site</a>
              <a href="#" className="text-[#5B3DF5] hover:underline font-medium">GitHub</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
