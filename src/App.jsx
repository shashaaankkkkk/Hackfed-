import { useState } from 'react'
import './App.css'
import Hero from './pages/Hero'
import Hero2 from './pages/Hero2'
import Emoji from 'react-emojis';


function App() {
  return (
    <>
      {/* Ensure the container is styled properly */}
      <div className="w-full h-full">
        <Hero2 />
        </div> 
    </>
  );
}

export default App;

