import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
          <center>
            <h5 className='cards__item__text'><i className='fas fa-map-marked-alt'></i>&nbsp;&nbsp;{props.text}</h5>
            <br></br>
            <p className='cards__item__smalltext'>{props.smalltext}</p>
            <br></br>
            <Button className='cards__item__butt' buttonStyle='btn--outline--black'>{props.butt}</Button>
          </center>
          <br></br>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;