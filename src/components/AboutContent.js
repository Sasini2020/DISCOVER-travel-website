import React from 'react';
import './Middle.css';
import { Button } from './Button';
import './HeroSection.css';

function AboutContent() {
    return (
        <>
        <div className='middle'>
        <br></br><br></br><br></br>
        <h1> OUR SERVICES MAKE YOU STAY COOL
        </h1>
        <div className='clearfix'>
          <img className='img2' src='images/dmitry-tomashek-yg6kwNOPZLs-unsplash.jpg' alt='middleimage' width='auto' height='400'/>
        {/* <p className='middle-date'>July 19, 2021</p> */}
        <h2 className='middle-h2'>20 Years of affordable service</h2>
        <br></br><br></br>
        <p className='middle-p-text'>Known as the 'pearl of the Indian Ocean', Sri Lanka offers a cultural smorgasbord of breath-taking sights, flavoursome food and soft, sandy beaches. It's affordable too if you
        compare it with Maldives which sits just 983km (611 miles) away.</p>
        <br></br>
        <p className='middle-p-text'>From London, Sri Lankan Airlines fly direct from <span>London Heathrow</span> to
        <span> Colombo Bandaranaike International Ariport</span>(CMB). The journey takes about 10 hours 30 minutes. From New York, there are isn't direct flight so a typical journey takes about 19 hours. Compare flight prices
            on<span> Skyscanner</span> and find cheapest options available.</p>
            
        <br></br><br></br>
        <Button buttonStyle='btn--outline--black'>Read More</Button>
  
       </div>
      </div>
      
      </>
    );
}

export default AboutContent
