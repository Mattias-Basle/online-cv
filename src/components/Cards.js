import React from 'react';
import CardItem from './CardItem';
import './styles/Cards.css';
import piano from '../images/piano.jpg';
import climb from '../images/climb2.jpg';
import jitsu from '../images/jiu-jitsu.jpeg';
import cook from '../images/cooking.JPG';
import sail from '../images/sail2.jpg';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem src={piano} label='piano' />
                <CardItem src={climb}label='climbing' />
                <CardItem src={sail} label='sailing' />
                <CardItem src={jitsu} label='jiu-jitsu' />
                <CardItem src={cook} label='cooking' />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
