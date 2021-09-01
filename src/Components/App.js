import './App.css';
import Movies from './movies/moviesSelection';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default function App() {
  return (
    <>
    <Router>
    <header>
      <h1>CINEFLEX</h1>
    </header>
    <Switch>
      <Route path="/" exact>
      <Movies /> 
      </Route>
    
    </Switch>
    
    </Router>
    
    </>
  );
}
