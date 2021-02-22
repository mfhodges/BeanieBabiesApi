import React from 'react'

export const BBCard = ({beaniebaby}) => (
  <a href={`/beanies/${beaniebaby.id}`}>
  <div className="card">
          <img src={beaniebaby.image} alt="" />
          <div className="card-body">
            <h4>{beaniebaby.title}</h4>
            <h5>{beaniebaby.astroSign}</h5>
          </div>
        </div></a>
  );
  
