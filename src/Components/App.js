import Movies from './movies/moviesSelection';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Schedule from './schedule/schedule';
import React, { useState } from 'react';

export default function App() {
  const [movieInfo, setMovieInfo] = useState([]);

  function movieDescription (name, url) {
    setMovieInfo([name, url])
  };

  return (
    <Router>
    <Link to="/">
    <header>
      <h1>CINEFLEX</h1>
    </header>
    </Link>
    
    <Switch>
      <Route path="/" exact>
      <Movies movieDescription={(name, url) => movieDescription(name, url)}/> 
      </Route>
      <Route path="/sessoes/:idFilme" exact>
      <Schedule movieInfo={movieInfo}/>
      </Route>
    </Switch>
    
    </Router>
  );
}
