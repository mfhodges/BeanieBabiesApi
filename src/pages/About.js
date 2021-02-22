import React from 'react'


export const  About =  () => {

return(
    <div>
        <h1>About</h1>
        <p>
            For the past few years I have wanted to learn React and GraphQL but I have been unmotivated by the boring To-do Apps and generic Movie DB Apps that many tutorials have you create.  I know the best way to learn a new tech is to create a project with it, so I wanted to create a project that I am genuinely interested in and that had a unique perspective.
        </p>
        <p>
            I was inspired to create this App by the twitter account <a href="https://twitter.com/imbabybean">beanie babies i really like</a> which is literally someone tweeting some cool Beanie Babies. 10/10 content and I urge you to follow them. Once my brain's lil synapses started firing, I thought “huh what data can I get for this?”. As collectables, Beanie Babies have a TON of data ranging from the info listed in their Tag to their size and theme. Since Beanie Babies are so rich in meta-data, creating an App that lets you explore them would be a unique challenge that really gets me to cut my teeth on React.
        </p>
        <p>
            I was excited by the idea of taking this project one step further and creating a GraphQL API like the <a href="https://rickandmortyapi.com/">Rick and Morty API</a>. My next step was to start gathering the data to populate this database. As I poked around the web, I was immediately brought back to the beauty of early 2000s web design from gems like <a href="http://www.tycollector.com/beanies/beanie-roster.htm">http://www.tycollector.com/beanies/beanie-roster.htm</a> . A beautiful aspect of these old sites is that they do not have complex URI structures or a large DOM tree. Essentially these sites were built for webscraping.
        </p>
        <p>
            After I had scrapped all the data I needed for this project, I let my motivation slip .Then one day in March 2020 I was looking at the Beanie Baby that sits at my desk, Scurry,  and noticed my bug friend was born on January 18th. I had missed his birthday <span role="img" aria-label="crying emoji">😭</span>!!!
        </p>
        <img className="portrait" src="/scurry_portrait.jpg" alt="Scurry Beanie Baby"></img>
        <p>
            I realized my life-long friend Scurry was also a Capricorn. As a Scorpio, I was shocked by our bond since we traditionally are not very compatible.</p>
            <blockquote> And then it hit me ... they ALL have ZODIAC SIGNS!!!</blockquote> 
            <p>I realized my app could be truly unique since I could not only consolidate data already existing on the web but also provide this very important meta-data about the Beanie Babies’ Zodiac signs. No other website ( that I know of at least ) lets you search a Database of Beanie Babies, see their Zodiac Signs, and find what Beanie Babies you are most compatible with!
        </p>
    </div>
    )
}