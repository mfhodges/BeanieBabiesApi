import React, {useState} from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

//const Beanie = require('./models/beanie.model');

const GET_BEANIES = gql`
    query {
        getBeanies {
            title
        }
    }
  
`


export default function Random () {

//const { loading, error, data } = useQuery(GET_BEANIES);
//console.log("data",data);

return(
    <div>
        <h1>Random </h1>
        <p> Functionality Coming soon</p>

        
    </div>)
}

/*

This page should be Related to the BBProfile and just pull up a random one. 
*/