import React from 'react';
import { motion } from 'framer-motion';

const RotatingText = () => {
  // Array of circles with reduced text and adjusted spacing
  const circles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    duration: 15 + i * 2, // Rotation duration
    fontSize: 20 + i * 3, // Font size per circle
    text: "HACKFED-", // Reduced text
    radius: (i + 1) * 50, // Increased radius for more spacing
  }));

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="relative w-[800px] h-[800px] flex items-center justify-center">
        {circles.map(({ id, duration, fontSize, text, radius }) => {
          // Calculate the number of letters based on radius and increased spacing
          const circumference = 2 * Math.PI * radius;
          const letterCount = Math.floor(circumference / (fontSize * 1.5)); // Increased spacing factor
          const letters = Array.from({ length: letterCount }).map(
            (_, index) => text[index % text.length]
          );

          return (
            <motion.div
              key={id}
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {letters.map((letter, letterIndex) => {
                const rotation = (letterIndex * 360) / letterCount;

                return (
                  <motion.span
                    key={letterIndex}
                    className="absolute font-bold tracking-wider text-white"
                    style={{
                      fontSize: `${fontSize}px`,
                      transformOrigin: "center",
                      transform: `
                        rotate(${rotation}deg)
                        translateY(-${radius}px)
                        rotate(-${rotation}deg)
                      `,
                    }}
                    whileHover={{
                      scale: 1.2,
                      color: "#3b82f6",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </motion.div>
          );
        })}

        {/* Center circle */}
        <motion.div
          className="absolute w-24 h-24 bg-white rounded-full"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 20px rgba(255,255,255,0.5)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </div>
    </div>
  );
};

export default RotatingText;
