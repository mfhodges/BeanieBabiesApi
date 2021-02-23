import React, { useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import { getBeanie } from "../data/utils";

export const BBProfile = () => {
  let beanieID = useParams().bbID;
  const beanie = getBeanie(beanieID);

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
};

/**<BBCard beaniebaby={fakedata}/> */
