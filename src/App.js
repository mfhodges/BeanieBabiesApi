import { Switch, Route } from 'react-router-dom'
import React from 'react'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {Home} from './pages/Home'
import {Random} from './pages/Random'
import {About} from './pages/About'
import {BBProfile} from './pages/BBProfile'
import {Birthday} from './pages/Birthday'
import {Search} from './pages/Search'
import {BBMatch} from './components/BBMatch'




function App() {
return (
  <>
      <Header />
      <div id="main">
        <div id="content">
          <div>
            <article>
            <Switch>
            <Route path="/search">
                <Search />
              </Route>
              <Route exact path="/" component={Home} />
              <Route path="/random">
                <Random />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/birthday">
                <Birthday />
              </Route>
              <Route path="/match">
                <BBMatch />
              </Route>
              <Route path="/beanies/:bbID" component={BBProfile}/>
            </Switch>
            </article>
          </div>
        </div>
      </div>
      <Footer />
      </>
);
}

export default App;


