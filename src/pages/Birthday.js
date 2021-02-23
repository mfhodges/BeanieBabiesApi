import React, {useState} from 'react';
import {BBCard} from '../components/BBCard';
import {getBeaniesMonthBday, getBeaniesBday} from '../data/utils';

function findDate() {
  const todayDate = new Date();
  const todayMonth = (todayDate.getMonth()+1).toString();
  const todayDay = todayDate.getDate().toString();
  return {todayDay, todayMonth}
}

/*
This page should show who's birhday it currently is, and whos is this month
*/

export const Birthday = () => {
const {todayDay, todayMonth} = findDate();
const [monthBeanies, setMonthBeanies]= useState(getBeaniesMonthBday(todayMonth));
const [bdayBeanies, setBdayBeanies ]= useState(getBeaniesBday(todayMonth,todayDay));


if (!monthBeanies || !bdayBeanies) return <p>Loading...</p>

if (monthBeanies && bdayBeanies){
return(
    <div>
        <h1>Today's Birthday!<span role="img" aria-label="party popper">🎉</span></h1>
        <h4>Date: {todayMonth}/{todayDay}</h4>
        <div className='bdaycards'>
        {bdayBeanies.map((beanie) => (
            <BBCard beaniebaby={beanie} key={beanie.id} />
        ))}
        </div>
        <h3>Birthdays This Month</h3>
        
        <div className='cards'>
        
        {monthBeanies.map((beanie) => (
        <BBCard beaniebaby={beanie} key={beanie.id}/>
        ))}
        </div>
    </div>)
}
}

