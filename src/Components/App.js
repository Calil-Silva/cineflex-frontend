import Movies from './movies/moviesSelection';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Schedule from './schedule/schedule';
import React, { useState } from 'react';
import Sitting from './sitting/sitting';
import Success from './success/success';

export default function App() {
  const [movieInfo, setMovieInfo] = useState([]);

  function movieDescription (description) {
    setMovieInfo(description)
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
      <Movies movieDescription={(description) => movieDescription(description)}/> 
      </Route>
      <Route path="/sessoes/:idFilme" exact>
      <Schedule movieInfo={movieInfo}/>
      </Route>
      <Route path="/sessoes/:idFilme/assentos/:idSessao" exact>
      <Sitting movieInfo={movieInfo}/>
      </Route>
      <Route path="/sessoes/:idFilme/assentos/:idSessao/sucesso" exact>
      <Success />
      </Route>
    </Switch>
    
    </Router>
  );
}
