import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


const Header = () =>
    <>
        <header role="banner">
            <hgroup>
                <h1><a href="/">Beanie Babies</a></h1>
            </hgroup>
            <ul className="header-links">
                <li><a href="/graphql">GraphQL</a></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="https://github.com/Mfhodges/BB-frontend">Github</a></li>
            </ul>
        </header>
        <nav role="navigation" className="header-nav"><ul className="main-navigation">
            <li><Link to="/random"><span role="img" aria-label="Game Die">🎲</span>Random</Link></li>
            <li><Link to="/search"><span role="img" aria-label="Magnifying Glass">🔍Search</span></Link></li>
            <li><Link to="/birthday"><span role="img" aria-label="Birthday Cake">🎂Bday</span></Link></li>
        </ul>
        </nav>
    </>

export default Header