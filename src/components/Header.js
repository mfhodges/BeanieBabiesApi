import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


export const Header = () =>
    <>
        <header role="banner">
            <hgroup>
                <h1><a href="/">Beanie Babies</a></h1>
            </hgroup>
            <ul className="header-links">
                <li><a href="/graphql" target="_blank">GraphQL - MADDY REPLACE THIS</a></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="https://github.com/Mfhodges/BB-frontend" target="_blank" >Github</a></li>
            </ul>
        </header>
        <nav role="navigation" className="header-nav"><ul className="main-navigation">
            <li><Link to="/random"><span role="img" aria-label="Game Die">🎲</span>Random</Link></li>
            <li><Link to="/search"><span role="img" aria-label="Magnifying Glass">🔍</span>Search</Link></li>
            <li><Link to="/birthday"><span role="img" aria-label="Birthday Cake">🎂</span>Bday</Link></li>
        </ul>
        </nav>
    </>
