import { useEffect } from 'react';
import './App.css';
import Footer from './components/Fotter'; // Ensure the spelling matches
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OurTeam from './pages/OurTeam';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <div className="app-container bg-black"> {/* Added wrapper div */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/OurTeam" element={<OurTeam />} exact />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
