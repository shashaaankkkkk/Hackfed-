import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParticleRing from './components/Particle'
import BubbleText from './components/BubbleText'
import Navbar from './components/Navbar'
function App() {
  const hoverColor = "rgb(238, 242, 255)";
  const neighborColor = "rgb(199, 210, 254)";
  const normalColor = "rgb(165, 180, 252)";

  return (
    <>
 <Navbar hoverColor={hoverColor} neighborColor={neighborColor} normalColor={normalColor} />


    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <ParticleRing />
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 1, // Make sure the text is above the particles
        }}
      >
        <BubbleText
          text="HackFed"
          hoverColor="rgb(238, 242, 255)" 
          neighborColor="rgb(199, 210, 254)" // Match with particle neighbor color
          normalColor="rgb(165, 180, 252)" // Match with particle normal color
          fontSize="text-9xl" // Increase font size for visibility
        />
      </div>
    </div>
    
    </>
  )
}

export default App
