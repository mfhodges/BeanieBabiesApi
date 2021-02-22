import React from 'react'
import { gql, useQuery } from '@apollo/client';


const GET_MATCH = gql`
query {
    hello
}

`
/**
 * This function excutes finding and displaying your Beanie Baby match!
 * 
 */

export const BBMatch = ({birthday=0}) => {
    const matches =  useQuery(GET_MATCH);
    console.log({matches});
    if (matches.loading) return "Loading...";
    return(
        <p> okay</p>
    )

}