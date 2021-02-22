import React, {useState} from 'react'
import {BBCard} from '../components/BBCard'
import { Link } from 'react-router-dom';
import { gql, useLazyQuery } from '@apollo/client';
import { getBeanies } from '../data/utils';


const SEARCH_BEANIES = gql`
query($search: String!) {
    getBeanies(search:$search) {
    id
    img
    title
    zodiac
    }
  }
`

/**
 * 
 * The useLazyQuery hook is perfect for executing queries in response to events other than component rendering
 * const [getBeanies, { called,loading,data}] = useLazyQuery(SEARCH_BEANIES,{variables: { "search": title}});*/


 /// IF THERE ARE NONE DISPLAY DIFF TEXT

export const Search = () => {
    const [title, updateTitle] = useState();

    const [beanies, setBeanies] = useState([]);
    
    
    const queryBeanies = () => {
      //updateTitle(e.target.value);
      console.log("searching for ", title)
      const result = getBeanies(title);
      setBeanies(result);
      console.log(result);
    }

    //if (called && loading) return <p>Loading</p>;


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



/**
 * 
        {fakedata.map((img) => (
            <BBCard beaniebaby={img} />
        ))}
 */