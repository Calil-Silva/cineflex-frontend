import './App.css';
import Movies from './movies/moviesSelection';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Schedule from './schedule/schedule';

export default function App() {

  return (
    <Router>
    <Link to="/">
    <header>
      <h1>CINEFLEX</h1>
    </header>
    </Link>
    
    <Switch>
      <Route path="/" exact>
      <Movies /> 
      </Route>
      <Route path="/sessoes/:idFilme" exact>
      <Schedule />
      </Route>
    
    </Switch>
    
    </Router>
  );
}
