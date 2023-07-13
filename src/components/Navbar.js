import React, {useState} from 'react';
import './styles/Navbar.css';
import logo from '../images/logo2.jpg';
import { Link } from 'react-router-dom';

function Navbar() {
const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/online-cv' className='navbar-logo' onClick={closeMobileMenu}>
                Mattias Basle
                <img src={logo} alt='Logo' className='fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/online-cv' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/online-cv/education' className='nav-links' onClick={closeMobileMenu}>
                    Education
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/online-cv/experiences' className='nav-links' onClick={closeMobileMenu}>
                    Experiences
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/online-cv/certifications' className='nav-links' onClick={closeMobileMenu}>
                    Certifications
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/online-cv/about-me' className='nav-links' onClick={closeMobileMenu}>
                    About Me
                </Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
