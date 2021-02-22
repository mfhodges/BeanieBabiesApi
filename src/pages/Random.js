import React, {useState} from 'react';
import {BBProfile} from './BBProfile';
import { gql, useQuery } from '@apollo/client';
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

//const { loading, error, data } = useQuery(GET_BEANIES);
//console.log("data",data);


// DO WE NEED A BUTTON TO REFRESH THE PAGE 

return(
    <div>
        <h1>Random Beanie</h1>
        <BBProfile />
    </div>)
}

/*

This page should be Related to the BBProfile and just pull up a random one. 
*/