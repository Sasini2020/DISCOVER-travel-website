import React from 'react';
import { Button } from './Button';
import './Social.css';

function Social() {
    return (
        <>
        <div class='deck'>
  <div class='card'>
    <header class='cardHeader'>
      <i class='fab fa-instagram cardHeader_type'></i>
      <span class='cardHeader_account'>@hongkongfp</span>
      <span class='cardHeader_date'>Jul 1 6:03</span>
    </header>
    <div class='cardBody'>
      <p class='cardText'>On Tuesday, China’s National People’s Congress Standing Committee unanimously passed a controversial national security law for Hong Kong. The law, which criminalises acts of secession, subversion, foreign interference and terrorism, was promulgated and gazetted on the same day with immediate effect. Details were only revealed late at night as it was directly inserted into the Annex III of the semi-autonomous region’s mini-constitution, bypassing the local legislature.
        <span class='cardText_highlight'>#hongkong</span> <span class='cardText_highlight'>#china</span> <span class='cardText_highlight'>#humanrights</span> <span class='cardText_highlight'>#hk</span></p>
      <section class='cardStats'>
        <span class='cardStats_stat cardStats_stat-likes'>2155 <i class='far fa-heart fa-fw'></i></span>
        <span class='cardStats_stat cardStats_stat-comments'>87 <i class='far fa-comment fa-fw'></i></span>
        </section>
    </div>
  </div>

  <div class='card'>
    <header class='cardHeader'>
      <i class='fab fa-facebook-f cardHeader_type'></i>
      <span class='cardHeader_account'>@hongkongfp</span>
      <span class='cardHeader_date'>Jul 2 11:49</span>
    </header>
    <div class='cardBody'>
      <p class='cardText'>“Liberate Hong Kong; revolution of our times,” is pro-independence, secessionist or subversive, and thus criminalised under the newly-enacted national security law, the government says.
        Law scholar Benny Tai said: "The reality is, under the Hong Kong national security law, every sentence said by every person at every moment could touch the red line and be said as violating the law. How could the national security law only targets a small group of people.”</p>
      <section class='cardStats'>
        <span class='cardStats_stat cardStats_stat-likes'>857 <i class='far fa-heart fa-fw'></i></span>
        <span class='cardStats_stat cardStats_stat-comments'>54 <i class='far fa-comment fa-fw'></i></span>
        <span class='cardStats_stat cardStats_stat-shares'>410 <i class='far fa-share fa-fw'></i></span>
    </section>
    </div>
  </div>

  <div class='card'>
    <header class='cardHeader'>
      <i class='fab fa-twitter cardHeader_type'></i>
      <span class='cardHeader_account'>@hongkongfp</span>
      <span class='cardHeader_date'>Jul 6 11:26</span>
    </header>
    <div class='cardBody'>
      <p class='cardText'>Hong Kong gov’t tells schools to remove books breaching security law
        <span class='cardText_highlight'>https://t.co/JbyrMwxexU</span></p>
      <section class='cardStats'>
        <span class='cardStats_stat cardStats_stat-likes'>96 <i class='far fa-heart fa-fw'></i></span>
        <span class='cardStats_stat cardStats_stat-retweets'>110 <i class='far fa-retweet fa-fw'></i></span>
        </section>
    </div>
  </div>
</div>

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve">
  <g>
    <path d="M40.6,66.2c-0.8-9.4,4.5-19.1,12.9-23.5c0.5-0.2,1-0.5,1.5-0.5c1.1-0.1,2.2,0.6,2.8,1.5c0.6,0.9,0.8,2.1,0.9,3.2   c0.7,8.4-4.2,17-11.7,20.7c-1.1,0.6-2.4,1-3.7,0.9C42,68.5,40.7,67.5,40.6,66.2 M55.6,46.9c-0.1-0.7-0.2-1.5-0.9-1.9   c-5.4,2.8-9.5,8-11.1,13.9c-0.4,1.5-0.6,3.2,0.3,4.5c1.5-3.2,3.3-6.2,5.4-9c0.5-0.7,1.6-1.4,2.1-0.7c0.2,0.4,0.1,0.9-0.1,1.3   c-1.3,3-3,5.9-4.9,8.5c-0.5,0.7-1,1.6-0.4,2.2C52.5,61.9,56.3,54.3,55.6,46.9z" />
    <path d="M36.7,62.5c-0.2,0.8-0.5,1.7-1.1,2.4c-0.6,0.6-1.7,0.8-2.4,0.2c-1.5-1.6-3.9-1.7-5.9-2.4c-2.9-1-5.3-3.3-6.9-5.9   c-1.6-2.6-2.6-5.6-3.4-8.6c-0.3-0.9-0.5-1.9-0.5-2.9c0.1-1,0.6-2,1.5-2.4c0.5-0.2,1.1-0.2,1.6-0.2c5,0.1,10,2,13.8,5.2   c1.4,1.2,2.7,2.6,3.4,4.3C38.4,55.4,37.6,59.1,36.7,62.5 M33.6,52.7c-2.8-4.1-7.4-6.8-12.4-7.2c-0.3,0-0.7,0-1,0.2   c-0.2,0.2-0.2,0.4-0.2,0.7c-0.2,3.2,1.3,6.3,3.4,8.8c2.1,2.4,4.9,4.2,7.7,5.6c0.4,0.2,1.1,0.4,1.3-0.1c0.1-0.2,0-0.5-0.2-0.7   c-1.2-2.2-2.4-4.4-3.6-6.7c-0.3-0.5,0.3-1.2,0.9-1.2c0.6,0,1.1,0.4,1.5,0.8c1.6,1.5,2.7,3.4,3.2,5.5C35.5,56.8,34.7,54.4,33.6,52.7   z" />
    <path d="M66,77.6c-3.4,3.1-8.3,3.9-12.9,3.6c-0.7-0.1-1.5-0.2-1.9-0.8c-0.3-0.4-0.3-1-0.3-1.5c0.2-5.4,3.1-10.4,7-14.1   c3.9-3.7,8.7-6.3,13.6-8.6c0.8-0.4,2.1-0.5,2.3,0.3c0,0.2,0,0.4-0.1,0.6c-0.7,3-1.5,6-2.2,8.9C70.3,70.3,69.1,74.7,66,77.6    M60.1,73.5c-1.5,1.7-3,3.3-4.4,5c2.8,0.4,5.8-0.5,8-2.4c4.1-3.7,4.2-10,6.2-15.1c-0.3-0.6-1.2-0.4-1.8-0.2   c-5.9,2.5-10.7,7.2-13.5,13c-0.4,0.8-0.6,2.2,0.3,2.5c0.7-1.2,1.7-2.2,2.8-3.1c0.4-0.3,0.9-0.6,1.4-0.6   C59.6,72.6,60.2,73,60.1,73.5z" />
    <path d="M84.2,40.9c0,0.5-0.3,1-0.5,1.4c-4.1,6.7-11.2,12-19.1,11.9c-0.8,0-1.5-0.1-2.2-0.5c-0.6-0.4-1-1.3-0.6-2   c3.8-6.7,10.7-11.6,18.3-12.8c0.9-0.1,1.8-0.2,2.6,0C83.5,39.2,84.3,40,84.2,40.9 M79.3,42.5c-2.9,0.3-5.8,1.3-8.2,2.9   c-2,1.3-3.6,3-5.3,4.7c-0.1,0.1-0.3,0.3-0.3,0.4c0,0.4,0.6,0.5,1,0.5c4.9-0.7,9.4-3.3,12.5-7.2C79.4,43.5,79.7,42.8,79.3,42.5z" />
    <path d="M37.6,43.6c-0.5,0.7-1.6,0.4-2.3,0c-3.9-2.1-7.7-4.7-10.5-8.2s-4.9-7.7-5.1-12.2c0-0.4,0-0.8,0.2-1.1c0.5-1,2-0.6,3-0.1   c7.6,4.1,13.2,11.7,14.9,20.1C37.8,42.6,37.9,43.2,37.6,43.6 M22.6,26.5c2.2,5.5,6,10.3,10.9,13.5c0.3,0.2,0.8,0.3,0.8,0   c0-0.1,0-0.2-0.1-0.3C32,33.8,28.1,28.6,23,24.9C22.4,24.9,22.4,25.9,22.6,26.5z" />
    <path d="M7,61c1.5-2.3,4.9-2.2,7.4-1.1c5,2.3,8.2,8,7.5,13.5c0,0.2-0.1,0.5-0.2,0.7c-0.4,0.4-1.2,0-1.6-0.4   c-1.7-1.7-3.1-3.8-5.3-4.8c-1.7-0.7-3.6-0.7-5.2-1.5C7.1,66.3,5.6,63.2,7,61 M18.5,67.8c-1.4-3-4.2-5.3-7.5-6   c-0.6-0.1-1.4-0.2-1.8,0.3c-0.5,0.5-0.4,1.5,0.1,2c0.5,0.6,1.2,0.8,1.9,1.1C13.6,66,16,66.9,18.5,67.8z" />
    <path d="M63.1,37.3c0.6-1.5,2.5-2.4,4-1.8c1.5,0.6,2.4,2.4,1.9,4c-0.5,1.5-2.4,2.5-3.9,2C63.4,40.9,62.4,38.9,63.1,37.3 M65.2,38.1   c0,0.6,0.4,1.2,0.9,1.5c0.4-0.4,0.7-1,0.4-1.5C66.3,37.6,65.4,37.6,65.2,38.1L65.2,38.1z" />
    <path d="M45.1,18.8c1.3-0.2,2.2,1.3,2.6,2.6c2.1,6.8,2.4,14.4-0.8,20.7c-0.5,1-1.4,2.1-2.5,1.9c-0.7-0.1-1.2-0.8-1.6-1.5   c-3.5-6.5-2.5-14.7,0.3-21.6C43.6,20,44.1,19,45.1,18.8 M45.4,40.6c0.1-0.1,0.2-0.3,0.2-0.4c1.6-5.5,1.6-11.4,0.1-17   c-0.1-0.3-0.4-0.7-0.7-0.6c-0.1,0.1-0.2,0.2-0.2,0.3c-2,5.3-2.2,11.3-0.7,16.8C44.3,40.3,44.9,41,45.4,40.6z" />
    <path d="M95,70.2c0.8,1.7-0.4,4-2.2,4.4c-1.9,0.4-3.9-1.3-3.8-3.2c0-1.4,1.1-2.7,2.5-3C92.9,68.1,94.4,68.9,95,70.2 M91.4,70.5   c-0.7,0.7,0.1,2.2,1.1,2C92.8,71.8,92.3,70.8,91.4,70.5L91.4,70.5z" />
    <path d="M86.8,53c1.9,0.9,2.7,3.4,2.3,5.5c-0.4,2.1-1.5,4-2.5,5.9c-2.1,3.9-3.6,8.1-4.5,12.4c-3.6-5.2-4.7-12.1-2.9-18.2   c0.5-1.7,1.3-3.4,2.6-4.6C83.2,52.8,85.2,52.2,86.8,53 M83.7,55.7c-3.1,3.1-3.1,8-2.9,12.4c0,0.4,0.3,1,0.6,0.8   c0.1-0.1,0.1-0.2,0.2-0.2c1.6-2.8,3-5.7,4.2-8.6c0.4-1,0.9-2.2,0.5-3.3S84.5,54.9,83.7,55.7z" />
    <path d="M31.9,70c0.8,1.8-0.4,4.1-2.3,4.5c-1.9,0.4-4-1.3-3.9-3.3c0-1.4,1.2-2.8,2.6-3.1C29.7,67.9,31.3,68.7,31.9,70 M28.3,70.4   c-0.7,0.8,0.1,2.2,1.1,2.1C29.6,71.6,29.1,70.6,28.3,70.4L28.3,70.4z" />
  </g>
</svg>
        </>
    );
}

export default Social
