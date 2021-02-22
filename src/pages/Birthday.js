import React, {useState} from 'react'
import BBCard from '../components/BBCard'
import { gql, useQuery } from '@apollo/client';



const SEARCH_BIRTHDAYS_TODAY = gql`
query ($month: String!, $day: String) {
    getBeanies( input:{month:$month, day: $day}) {
    id
    img
    title
    zodiac
    }
  }
`

const SEARCH_BIRTHDAYS_MONTH = gql`
query ($month: String!) {
    getBeanies( input:{month:$month}) {
    id
    img
    title
    zodiac
    }
  }
`
/**
 * 
 * query {
  beanie: getBeanies( input:{month:"May"}){
    title
		zodiac
		img
		theme
		styleNumber
		color
		animal
		subTheme
    id
    birthday {
      month
      day
      year
    }
  }
}
 */


export default function Birthday () {

/*
This page should show who's birhday it currently is,
if no ones birthday do a sad face and show who's birthday it will be this Month (easier to search). 
*/
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const todayDate = new Date();
const todayMonth = (todayDate.getMonth()+1).toString();
const todayDay = todayDate.getDate().toString();
console.log("Today is ", todayMonth, todayDay, typeof todayMonth);
// Use a hook to query Graphql to get todays BDAY
// If none set to sad face
const _today =  useQuery(SEARCH_BIRTHDAYS_TODAY,{
    variables: { "month": todayMonth, "day": todayDay}});;

    // Use a hook to query Graphql to get this months BDAYs 
const _month = useQuery(SEARCH_BIRTHDAYS_MONTH,{
    variables: { "month": todayMonth}});


if (_month.loading || _today.loading) return "Loading...";

if (_month.error) return `Error (month)! ${_month.error.message}`;

if (_today.error) return `Error (today)! ${_today.error.message}`;


/**
 *<pre>{JSON.stringify(_today.data,null,2)}</pre>
 <pre>{JSON.stringify(_month.data,null,2)}</pre>
 * 
 */


return(
    <div>
        <h1>Today's Birthday!<span role="img" aria-label="party popper">🎉</span></h1>
        <h4>Date: {todayMonth}/{todayDay}</h4>
        <p> Search Capabilities comming soon.</p>
        <div className='bdaycards'>
        {_today.data['getBeanies'].map((beanie) => (
            <BBCard beaniebaby={beanie} key={beanie.id} />
        ))}
        </div>
        <h3>Birthdays This Month</h3>
        
        <div className='cards'>
        
        {_month.data['getBeanies'].map((beanie) => (
        <BBCard beaniebaby={beanie} key={beanie.id}/>
        ))}
        </div>
    </div>)
}

