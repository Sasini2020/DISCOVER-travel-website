import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img className="hero-image" src='images/aviv-ben-or-4HuzkCaB92s-unsplash.jpg' alt="heroimage"/>
      <h1 className="hero-h1">Sri Lanka</h1>
      <p>HEART OF THE INDIAN OCEAN</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;