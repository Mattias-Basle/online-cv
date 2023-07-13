import React from 'react';
import './styles/MainSection.css';
import '../App.css';
import { Button } from './Button';
import profil from '../images/profil.jpg'

function MainSection() {
  return (
    <>
      <div className='main-container' >
        <img src={profil} alt='Profile' className='profile-image' />
        <h1>Hello, I'm Mattias</h1>
        <p>This is my online take on an interactive CV</p>
        <p>Feel free to browse about the specifics,</p>
        <p>or you can click right below for an overall presentation</p>
        <p></p>
        <Button 
          className='btns' 
          buttonStyle='btn--outline' 
          buttonSize='btn--large'
        >
          About Me
        </Button>
      </div>
    </>
  );
}

export default MainSection;
