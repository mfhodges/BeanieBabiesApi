import React, {useState, Fragment} from 'react'
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom'
import {getBeanie} from '../data/utils';

const GET_BEANIE = gql`
query ($id: Int!) {
    beanie: getBeanie(id:$id){
      title
          birthday {
              month
              day
              year
          }
          zodiac
          img
          theme
          styleNumber
          color
          animal
          subTheme
      id
    }
  }
`


export const  BBProfile = () => {
    // have this check if a param has been passed in the URL otherwise choose a random? 
    let beanieID = useParams().bbID;
    const beanie = getBeanie(beanieID);
  /*

  "id": 12,
    "title": "Helena the Unicorn Husky",
    "link": "https://beaniepedia.com/beanies/beanie-boos/helena-the-unicorn-husky/",
    "image": "https://beaniepedia.com/beanies/files/2020/01/helenaboo.jpg",
    "theme": "Beanie Boos",
    "StyleNumber": 36322,
    "color": "Blue",
    "swingTagGeneration": 4,
    "tushTagGeneration": "C1",
    "birthday": "29 May",
    "releaseDate": "01/06/2019",
    "releaseYear": 2019,
    "retirementDate": "-",
    "animal": "N/A",
    "subtheme": "",
    "size": ""
 */
    /*return (
    <pre>{JSON.stringify(data.beanie,null,2)}</pre>
    )*/
    
    return (
      <>
        <h1>{beanie.title}</h1>
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
      </>
    );
}



/**<BBCard beaniebaby={fakedata}/> */