function Skills() {
  return (
  <div className="max-w-4xl mx-auto p-6 flex">
  <h1 className="text-left mb-6 text-2xl font-bold mr-6 text-[#4832D3]">Skills</h1>

  <div className="grid grid-cols-2 gap-6">

    <div className="flex items-center space-x-6">
      <img src="./src/assets/skills/figma.png" className="w-40 h-40 object-contain transform hover:scale-110 transition duration-300" />
      <span className="text-2xl font-medium text-[#777777] font-inter">Figma</span>
    </div>

    <div className="flex items-center space-x-6">
      <img src="./src/assets/skills/node.png" className="w-40 h-40 object-contain transform hover:scale-110 transition duration-300" />
      <span className="text-2xl font-medium text-[#777777] font-inter">Node.js</span>
    </div>

    <div className="flex items-center space-x-6">
      <img src="./src/assets/skills/redux.png" className="w-40 h-40 object-contain transform hover:scale-110 transition duration-300" />
      <span className="text-2xl font-medium text-[#777777] font-inter">Redux</span>
    </div>

    <div className="flex items-center space-x-6">
      <img src="./src/assets/skills/js.png" className="w-40 h-40 object-contain transform hover:scale-110 transition duration-300" />
      <span className="text-2xl font-medium text-[#777777] font-inter">JavaScript</span>
    </div>

    <div className="flex items-center space-x-6">
      <img src="./src/assets/skills/react.png" className="w-40 h-40 object-contain transform hover:scale-110 transition duration-300" />
      <span className="text-2xl font-medium text-[#777777] font-inter">React</span>
    </div>

    <div className="flex items-center space-x-6">
      <img src="./src/assets/skills/vscode.png" className="w-40 h-40 object-contain transform hover:scale-110 transition duration-300" />
      <span className="text-2xl font-medium text-[#777777] font-inter">VS Code</span>
    </div>

  </div>
</div>


    );
}

export default Skills;