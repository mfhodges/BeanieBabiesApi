

import React, {useState} from 'react'
import { Link } from 'react-router-dom'


export const Home =() =>{

return(
    <div>
        <div className="alert">
            <div>
            <p>Hi there 👋 </p>
            <p>The <a href="https://devcenter.heroku.com/changelog-items/1823">cloud db</a> that was hosting this data has shut down 😔
            </p><p>But don't worry!! I am working on a fix 🛠  💾   (that isn't 💰💰💰 ). But for the time being, the GraphQL/MongoDB connection is disabled. </p>
            </div>
        </div>
        <h1> Welcome!</h1>
        <img src="/bb_worm.png" className="homepage-image" alt="Inch the Inchworm Beanie Baby"/>
        <p>
            This site offers a browsable collection of Beanie Babies and their associated meta-data. For more information on the project please read the <Link to="/about">About page</Link>.

        </p>
        <p>To search the database check out the <Link to="/search">Search</Link>.</p>
        <p>If you are looking to find your perfect match head over to the <Link to="/match">matchmaker</Link>.</p>
    </div>)
}
