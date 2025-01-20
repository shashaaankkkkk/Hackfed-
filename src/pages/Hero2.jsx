import React from 'react';
import CircularText from '../components/CircularText';
import Navbar from '../components/Navbar';

function Hero2() {
  const hoverColor = "rgb(238, 242, 255)";
  const neighborColor = "#FFFFFF";
  const normalColor = "#FFFFFF";

  return (
    <div className="relative bg-black text-white h-screen overflow-hidden">
      {/* Navbar Section */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar hoverColor={hoverColor} neighborColor={neighborColor} normalColor={normalColor} />
      </div>

      {/* Circular Text Section */}
      <div className="flex items-center justify-center h-full w-full">
        <CircularText />
      </div>
    </div>
  );
}

export default Hero2;
