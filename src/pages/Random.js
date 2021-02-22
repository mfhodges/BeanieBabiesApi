import React, {useState} from 'react';
import {BBProfile} from './BBProfile';
import { gql, useQuery } from '@apollo/client';
import {getRandomBeanie} from '../data/utils';


/**
 * This page will pull the a random Beanie from the DB
 * 
 */


///path="/beanies/:bbID" component={BBProfile} 


const GET_BEANIES = gql`
    query {
        getBeanies {
            title
        }
    }
  
`


export const Random =  () => {
    // wrap this in an await?
const beanie = getRandomBeanie()

//const { loading, error, data } = useQuery(GET_BEANIES);
//console.log("data",data);


// DO WE NEED A BUTTON TO REFRESH THE PAGE 

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

          <div>
            {/* Desription goes here */}
            <h3>Description</h3>
            <p>coming soon.</p>
          </div>
          <div>
            {/* Poem goes here */}
            <h3>Poem</h3>
            <p>coming soon.</p>
          </div>
          <div>
            {/* Collectors Note goes here */}
            <h3>Collectors Note</h3>
            <p>coming soon.</p>
          </div>
        </div>
    </div>)
}

/*

This page should be Related to the BBProfile and just pull up a random one. 
*/