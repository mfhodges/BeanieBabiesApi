import React, {useState} from 'react'
import {BBCard} from '../components/BBCard'
import { Link } from 'react-router-dom';
import { getBeanies } from '../data/utils';



export const Search = () => {
    const [title, updateTitle] = useState();

    const [beanies, setBeanies] = useState([]);
    const [isResults, setIsResults] = useState(false);
    
    const queryBeanies = () => {
      //updateTitle(e.target.value);
      console.log("searching for ", title)
      const result = getBeanies(title);
      if (result.length) {
      setBeanies(result);
      setIsResults(true);
    }
      // else no results
      setIsResults(false);
    }
    if (!isResults) {
      return <p>no results for that search, refresh and try again!</p>
    }

    if (!beanies.length){
    return (
      <>
        <h2>
          <span role="img" aria-label="Magnifying Glass">
            🔎
          </span>{" "}
          Search by Name{" "}
          <span role="img" aria-label="Magnifying Glass">
            🔍
          </span>
        </h2>
        <h4>Searching: `{title}`</h4>
        <p>To Query Alphabetically, just search the desired letter.</p>
        <form className="form-inline"
          onSubmit={(e) => {
            e.preventDefault();
            queryBeanies(e);
          }}
        >
          <label htmlFor="title">
            Name
            <input
              id="title"
              value={title}
              placeholder="Name"
              onChange={(e) => updateTitle(e.target.value)}
            />
          </label>
          <button >Submit</button>
        </form>
        
        <hr></hr>
        <h2>Looking for your perfect match?</h2>
          <p> Checkout out the <Link to="/match">matchmaker</Link>!
          </p>
          
      </>
    );
        }
    if (isResults){
    return (
        <>
            <h1>Results For: {title}</h1>
            <p>Pagination coming soon.</p>
            
            <div className='cards'>
            {beanies.map((beanie) => (
                <BBCard beaniebaby={beanie} key={beanie.id}/>
            ))}
        </div>
        </>
    )
  }
  return <p>an error occurred</p>
}
