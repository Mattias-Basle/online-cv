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
          <Route path='/' element={<Home />}/>
          <Route path='/education' element={<Education />} />
          <Route path='/experiences' element={<Experiences />} />
          <Route path='/certifications' element={<Certifications />} />
          <Route path='/about-me' element={<AboutMe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
