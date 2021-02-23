import React, {useState} from 'react';
import {getRandomBeanie} from '../data/utils';

export const Random =  () => {
const beanie = getRandomBeanie();

return(
    <div>
        <h1>Random Beanie</h1>
    
        <h2>{beanie.title}</h2>
        <div id="profile">
          <div>
            <dl>
              <dt>Theme</dt>
              <dd>{beanie.theme}</dd>
              <dt>Style No.</dt>
              <dd>{beanie.styleNumber}</dd>
              <dt>Color</dt>
              <dd>{beanie.color}</dd>
              <dt>Animal</dt>
              <dd>{beanie.animal}</dd>
              <dt>Subtheme</dt>
              <dd>{beanie.subtheme}</dd>
              <dt>Birthday</dt>
              <dd>{beanie.birthday}</dd>
              <dt>Zodiac</dt>
              <dd>{beanie.astroSign}</dd>
            </dl>
          </div>
          <div id="polaroid">
            <img src={beanie.image} alt="" height="200px" width="200px" />
          </div>
        </div>
    </div>)
}
