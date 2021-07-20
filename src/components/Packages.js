import React from 'react';
import './Cards.css';
import './PackageCards.css';
import { Link } from 'react-router-dom';

function Packages() {
  return (
    <>
    <br></br><br></br>
    <h1>What Our Clients Say</h1>
    <div class="card-container">
      <div class="card card-1">
        <div class="card__icon"><i class="fas fa-bolt"></i></div>
        <p class="card__exit"><i class="fas fa-times"></i></p>
        <h2 class="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <p class="card__apply"><Link to='/' className='link'>Get Now <i class="fas fa-arrow-right"></i></Link></p>
      </div>
      <div class="card card-2">
        <div class="card__icon"><i class="fas fa-bolt"></i></div>
        <p class="card__exit"><i class="fas fa-times"></i></p>
        <h2 class="card__title">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        <p class="card__apply"><Link to='/' className='link'>Get Now <i class="fas fa-arrow-right"></i></Link></p>
      </div>
      <div class="card card-3">
        <div class="card__icon"><i class="fas fa-bolt"></i></div>
        <p class="card__exit"><i class="fas fa-times"></i></p>
        <h2 class="card__title">Ut enim ad minim veniam.</h2>
        <p class="card__apply"><Link to='/' className='link'>Get Now <i class="fas fa-arrow-right"></i></Link></p>
      </div>
      <div class="card card-4">
        <div class="card__icon"><i class="fas fa-bolt"></i></div>
        <p class="card__exit"><i class="fas fa-times"></i></p>
        <h2 class="card__title">Quis nostrud exercitation ullamco laboris nisi.</h2>
        <p class="card__apply"><Link to='/' className='link'>Get Now <i class="fas fa-arrow-right"></i></Link></p>
      </div>
      <div class="card card-5">
        <div class="card__icon"><i class="fas fa-bolt"></i></div>
        <p class="card__exit"><i class="fas fa-times"></i></p>
        <h2 class="card__title">Ut aliquip ex ea commodo consequat. Duis aute irure dolor.</h2>
        <p class="card__apply"><Link to='/' className='link'>Get Now <i class="fas fa-arrow-right"></i></Link></p>
      </div>
      <div class="card card-1">
        <div class="card__icon"><i class="fas fa-bolt"></i></div>
        <p class="card__exit"><i class="fas fa-times"></i></p>
        <h2 class="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <p class="card__apply"><Link to='/' className='link'>Get Now <i class="fas fa-arrow-right"></i></Link></p>
      </div>
    </div>
  
</>
  );
}

export default Packages;