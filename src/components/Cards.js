import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1> DISCOVER THE MOST ENGAGING PLACES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/boxed-water-is-better-M8CClPDw02I-unsplash.jpg'
              text='Mount Lavinia Beach'
              smalltext='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus ex, malesuada ac porttitor vel, suscipit at lectus. Praesent sem tortor, sagittis vel sollicitudin et, vehicula eu nulla.'
              path='/services'
              butt='Explore'
            />
            <CardItem
              src='images/farhath-firows-vo0mwCg5FJc-unsplash.jpg'
              text='Coconut Tree Hill - Mirissa'
              smalltext='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus ex, malesuada ac porttitor vel, suscipit at lectus. Praesent sem tortor, sagittis vel sollicitudin et, vehicula eu nulla.'
              path='/services'
              butt='Explore'

            />
            <CardItem
              src='images/sigiriya.jpg'
              text='Sigiriya'
              smalltext='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus ex, malesuada ac porttitor vel, suscipit at lectus. Praesent sem tortor, sagittis vel sollicitudin et, vehicula eu nulla.'
              path='/services'
              butt='Explore'

            />
          </ul><br></br><br></br>
          <ul className='cards__items'>
            <CardItem
              src='images/shainee-fernando-WDVMyBsSSwY-unsplash.jpg'
              text='Dondra Head Lighthouse'
              smalltext='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus ex, malesuada ac porttitor vel, suscipit at lectus. Praesent sem tortor, sagittis vel sollicitudin et, vehicula eu nulla.'
              path='/services'
              butt='Explore'

            />
            <CardItem
              src='images/eddy-billard-d6EuGZs41SI-unsplash.jpg'
              text='Gal Vihara - Polonnaruwa'
              smalltext='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus ex, malesuada ac porttitor vel, suscipit at lectus. Praesent sem tortor, sagittis vel sollicitudin et, vehicula eu nulla.'
              path='/products'
              butt='Explore'

            />
            <CardItem
              src='images/gemmmm-BS8a67PahbM-unsplash.jpg'
              text='Nine Arch Bridge - Elle'
              smalltext='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus ex, malesuada ac porttitor vel, suscipit at lectus. Praesent sem tortor, sagittis vel sollicitudin et, vehicula eu nulla.'
              path='/sign-up'
              butt='Explore'

            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;