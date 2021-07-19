import React from 'react';
import './Middle.css';
import { Button } from './Button';

function Middle() {
  return (
    <div className='middle'>
      <h1> 10 THINGS TO KNOW BEFORE TRAVELLING TO SRI LANKA
      </h1>
      <div className='clearfix'>
          <img className='img2' src='images/img-new.jpg' alt='middleimage' width='auto' height='400'/>
          {/* <p className='middle-date'>July 19, 2021</p> */}
          <h2 className='middle-h2'>1. Sri Lanka is wildly beautiful and affordable</h2>
          <br></br><br></br>
          <p className='middle-p-text'>Known as the 'pearl of the Indian Ocean', Sri Lanka offers a cultural smorgasbord of breath-taking sights, flavoursome food and soft, sandy beaches. It's affordable too if you
          compare it with Maldives which sits just 983km (611 miles) away.</p>
          <br></br>
          <p className='middle-p-text'>From London, Sri Lankan Airlines fly direct from <span>London Heathrow</span> to
          <span> Colombo Bandaranaike International Ariport</span>(CMB). The journey takes about 10 hours 30 minutes. From New York, there are isn't direct flight so a typical journey takes about 19 hours. Compare flight prices
          on<span> Skyscanner</span> and find cheapest options available.</p>
          <br></br><br></br>
          <Button buttonStyle='btn--outline--black'>Read Full Story</Button>
     </div>
     <div className='clearfix-2'>
          <img className='img3' src='images/anton-lecock-vWGvoiHTFPU-unsplash.jpg' alt='middleimage' width='auto' height='400'/>
          {/* <p className='middle-date'>July 19, 2021</p> */}
          <h2 className='middle-h2'>2. Getting around is easy</h2>
          <br></br><br></br>
          <p className='middle-p-text'>The cheapest and most fun way to get around Sri Lanka is by coach, as it is atmospheric and packed with chattering locals who are friendly and keen to help.
           Sri Lankan trains are often less crowded than buses, also an affordable way to seen the country in all of its natural glory. The train ride between Kandy and Ella is popular with tourists as it passes through lush tea plantations. Within a town or a city,
           tuk-tuks are cheap and available for hire in abundance. Seen the <span>Exlpore around Sri Lanka guide </span>for more information.</p>
          <br></br>
          <p className='middle-p-text'>From London, Sri Lankan Airlines fly direct from <span>London Heathrow</span> to
          <span> Colombo Bandaranaike International Ariport</span>(CMB). The journey takes about 10 hours 30 minutes. From New York, there are isn't direct flight so a typical journey takes about 19 hours. Compare flight prices
          on<span> Skyscanner</span> and find cheapest options available.</p>
          <br></br><br></br>
          <Button buttonStyle='btn--outline--black'>Read Full Story</Button>
     </div>
     <div className='clearfix'>
          <img className='img2' src='images/asantha-abeysooriya-beNiTTa8Pp8-unsplash.jpg' alt='middleimage' width='auto' height='380'/>
          {/* <p className='middle-date'>July 19, 2021</p> */}
          <h2 className='middle-h2'>3. Sri Lanka is rich about tea</h2>
          <br></br><br></br>
          <p className='middle-p-text'>Known as the 'pearl of the Indian Ocean', Sri Lanka offers a cultural smorgasbord of breath-taking sights, flavoursome food and soft, sandy beaches. It's affordable too if you
          compare it with Maldives which sits just 983km (611 miles) away.</p>
          <br></br>
          <p className='middle-p-text'>From London, Sri Lankan Airlines fly direct from <span>London Heathrow</span> to
          <span> Colombo Bandaranaike International Ariport</span>(CMB). The journey takes about 10 hours 30 minutes. From New York, there are isn't direct flight so a typical journey takes about 19 hours. Compare flight prices
          on<span> Skyscanner</span> and find cheapest options available.</p>
          <br></br><br></br>
          <Button buttonStyle='btn--outline--black'>Read Full Story</Button>
     </div>
    </div>
  );
}

export default Middle;