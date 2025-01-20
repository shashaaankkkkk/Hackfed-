import { useState } from 'react'
import './App.css'
import Hero from './pages/Hero'
import Hero2 from './pages/Hero2'
import Emoji from 'react-emojis';
import About_us from './components/About_us';

function App() {
  return (
    <>
      {/* Ensure the container is styled properly */}
      <div className="w-full h-full">
        <Hero2/>
       <About_us/>
        </div> 
    </>
  );
}

export default App;

