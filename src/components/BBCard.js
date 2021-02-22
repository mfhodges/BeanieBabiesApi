import React from 'react'

export const BBCard = ({beaniebaby}) => (
  <a href={`/beanies/${beaniebaby.id}`}>
  <div className="card">
          <img src={beaniebaby.img} alt="" />
          <div className="card-body">
            <h4>{beaniebaby.title}</h4>
            <h5>{beaniebaby.zodiac}</h5>
          </div>
        </div></a>
  );
  
  /**
   * 
   * 
   * 
   *       <p>{beaniebaby.title}</p>
      <p>{beaniebaby.birthday}</p>
      <p>{beaniebaby.theme}</p>
      <p>{beaniebaby.styleNumber}</p>
      <p>{beaniebaby.color}</p>
      <p>{beaniebaby.animal}</p>
      <p>{beaniebaby.subtheme}</p>
   * 
   */