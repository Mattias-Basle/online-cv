import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Education from './components/pages/Education';
import Experiences from './components/pages/Experiences';
import Certifications from './components/pages/Certifications';
import AboutMe from './components/pages/AboutMe';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/online-cv' element={<Home />}/>
          <Route path='/online-cv/education' element={<Education />} />
          <Route path='/online-cv/experiences' element={<Experiences />} />
          <Route path='/online-cv/certifications' element={<Certifications />} />
          <Route path='/online-cv/about-me' element={<AboutMe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
