

import React, {useState} from 'react'
import { Link } from 'react-router-dom'


export default function Home () {

return(
    <div>
        <div className="alert">
            <div>
            <p>Hi there 👋 </p>
            <p>The <a href="https://devcenter.heroku.com/changelog-items/1823">cloud db</a> that was hosting this data has shut down 😔
            </p><p>But don't worry!! I am working on a fix 🛠  💾   (that isn't 💰💰💰 ). But for the time being, the GraphQL/MongoDB connection is disabled and things may be broken 💔. </p>
            </div>
        </div>
        <h1> Welcome!</h1>
        <img src="/bb_worm.png" class="homepage-image" alt="Inch the Inchworm Beanie Baby"/>
        <p>
            This site offers a browsable collection of Beanie Babies and their associated meta-data. For more information on the project please read the <Link to="/about">About page</Link>.

        </p>
        <p>Currently, this site offers limited search capabilities. Hopefully in the coming months this will be developed further to include search by Zodiac Sign, Birthday and other meta-data fields.</p>
        {/*<p> To see the only Beanie Baby listed please check out <a href="/beanies/1"> this page</a></p>*/}

    </div>)
}
