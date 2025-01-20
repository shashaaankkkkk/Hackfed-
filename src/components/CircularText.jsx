import React from 'react';
import { motion } from 'framer-motion';
import Emoji from 'react-emojis';


const CircularText = () => {
  const numberOfCircles = 20;
  const baseRadius = 70;
  const radiusIncrement = 60;
  const text = "Hackfed";
  
  const renderCircle = (index) => {
    // Adjusted base sizes for the new font
    const baseFontSize =30;
    const fontSizeIncrement = 5;
    const fontSize = baseFontSize + (index * fontSizeIncrement);
    
    const radius = baseRadius + (index * radiusIncrement);
    const circumference = 2* Math.PI * radius;
    const textLength = text.length;
    const charactersToFit = Math.ceil(circumference / (fontSize * 1.2));
    const repeatedText = text.repeat(Math.ceil(charactersToFit / textLength));
    const characters = repeatedText.split('');
    
    return characters.map((char, charIndex) => {
      const angle = (charIndex / characters.length) * 360;
      const x = radius * Math.cos((angle * Math.PI) / 180);
      const y = radius * Math.sin((angle * Math.PI) / 180);
      
      return (<>
        <motion.div
          key={`${index}-${charIndex}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1 - (index * 0.05),
            scale: 1,
            x,
            y,
            rotate: angle + 90
          }}
          transition={{
            duration: 1,
            delay: (charIndex * 0.01) + (index * 0.2),
            ease: "easeIn",
          }}
          style={{
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            fontSize: `${fontSize}px`,
            fontFamily: 'Nabla',
            color: 'white',
            willChange: 'transform',
            letterSpacing: '1.0px'
          }}
          >
          {char}
        </motion.div>

          </>
      );
    });
  };

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      <link 
        href="https://fonts.googleapis.com/css2?family=Nabla&display=swap" 
        rel="stylesheet" 
      />
      <motion.div 
        className="absolute top-1/2 left-1/2"
        animate={{ 
          rotate: 360 
        }}
        transition={{ 
          duration: 25,
          ease: "linear",
          repeat: Infinity
        }}
      >
        {[...Array(numberOfCircles)].map((_, index) => renderCircle(index))}
      </motion.div>
    </div>
  );
};

export default CircularText;