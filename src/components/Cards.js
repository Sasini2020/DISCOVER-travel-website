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
              src='images/road-trip-with-raj-0uI8LANIe0A-unsplash.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              path='/services'
            />
            <CardItem
              src='images/farhath-firows-vo0mwCg5FJc-unsplash.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              path='/services'
            />
            <CardItem
              src='images/sigiriya.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/shainee-fernando-WDVMyBsSSwY-unsplash.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              path='/services'
            />
            <CardItem
              src='images/eddy-billard-d6EuGZs41SI-unsplash.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              path='/products'
            />
            <CardItem
              src='images/gemmmm-BS8a67PahbM-unsplash.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;