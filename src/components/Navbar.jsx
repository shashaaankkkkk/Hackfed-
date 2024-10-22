import React from 'react';

const Navbar = ({ hoverColor, neighborColor, normalColor }) => {
  return (
    <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 h-16 w-[60%] bg-white/5 backdrop-blur-sm border border-white/10 flex justify-between items-center px-8 rounded-xl z-10">

      <div className="text-3xl font-thin text-indigo-300">
        <a href="#" className="transition-colors duration-300 hover:text-indigo-100">HackFed</a>
      </div>

     
      <div className="flex space-x-6">
        <a
          href="#"
          className={`transition-colors duration-300 font-thin text-lg relative px-4 py-2 rounded-lg`}
          style={{ color: normalColor }}
        >
          <span className="hover:bg-white/10 hover:backdrop-blur-md hover:border hover:border-white/20 hover:text-indigo-100 transition-all duration-300 px-4 py-2 rounded-lg">
            Home
          </span>
        </a>
        <a
          href="#about"
          className={`transition-colors duration-300 font-thin text-lg relative px-4 py-2 rounded-lg`}
          style={{ color: normalColor }}
        >
          <span className="hover:bg-white/10 hover:backdrop-blur-md hover:border hover:border-white/20 hover:text-indigo-100 transition-all duration-300 px-4 py-2 rounded-lg">
            About
          </span>
        </a>
        <a
          href="#contact"
          className={`transition-colors duration-300 font-thin text-lg relative px-4 py-2 rounded-lg`}
          style={{ color: normalColor }}
        >
          <span className="hover:bg-white/10 hover:backdrop-blur-md hover:border hover:border-white/20 hover:text-indigo-100 transition-all duration-300 px-4 py-2 rounded-lg">
            Contact
          </span>
        </a>
      </div>

    
      <div>
        <a
          href="#join"
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-400"
        >
          Join Community
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
