import React from 'react';

function Profile() {
  return (
    <div className="bg-[#4731D3] p-6 text-white">
    
      <div className="mx-auto flex flex-col md:flex-row items-start justify-center gap-6 w-full max-w-4xl">
        <div className="flex flex-col w-100 space-y-4">
          <h2 className="text-5xl font-bold mb-6 text-left">Profile</h2>
          <h2 className="text-2xl font-semibold text-left">Basic Information</h2>
          <div className="space-y-2 text-left">
            <p><span className="text-[#CBF281] font-medium">Doğum tarihi:</span> 16.09.1999</p>
            <p><span className="text-[#CBF281] font-medium">İkamet şehri:</span> İzmir</p>
            <p><span className="text-[#CBF281] font-medium">Eğitim durumu:</span> Hacettepe Ünv. Psikoloji Lisans, 2023</p>
            <p><span className="text-[#CBF281] font-medium">Tercih ettiği rol:</span> Frontend UI</p>
          </div>
        </div>


        <div className="w-100 h-100 flex-shrink-0">
          <img
            src="./src/assets/profile/image-2.png"
            className="w-full h-full object-cover rounded-lg"
            alt="Profile"
          />
        </div>


        <div className="flex flex-col w-100 space-y-4">
          <h2 className="text-2xl font-semibold text-left">About Me</h2>
          <p className="text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam
            voluptatum nisi mollitia.
          </p>
          <p className="text-left">
            Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!
          </p>
        </div>

      </div>
    </div>
  );
}

export default Profile;
