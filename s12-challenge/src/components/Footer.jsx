function Footer() {
  return (
    <div className="bg-[#F9F9F9] py-12 px-6">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <h1 className="text-5xl font-bold text-[#4731D3] font-inter">Send me a message!</h1>
        <p className="text-gray-600 text-2xl text-[#120B39]">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
        <p className="text-[#4731D3] font-inter font-medium underline">gkosann@gmail.com</p>

        <nav className="flex justify-center mt-6">
          <ul className="flex space-x-6">
            <li>
              <a href="https://github.com/gozdekosan" target="_blank" rel="noopener noreferrer">
                <img
                  src="./src/assets/footer/at-sign.png"
                  alt="Github"
                  className="h-10 w-auto"
                />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/gozdekosan" target="_blank" rel="noopener noreferrer">
                <img
                  src="./src/assets/footer/codepen.png"
                  alt="Linkedin"
                  className="h-10 w-auto"
                />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/gozdekosan" target="_blank" rel="noopener noreferrer">
                <img
                  src="./src/assets/footer/instagram.png"
                  alt="Instagram"
                  className="h-10 w-auto"
                />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/gozdekosan" target="_blank" rel="noopener noreferrer">
                <img
                  src="./src/assets/footer/twitter.png"
                  alt="Twitter"
                  className="h-10 w-auto"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
