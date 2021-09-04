import Movies from './movies/moviesSelection';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Schedule from './schedule/schedule';
import React, { useState } from 'react';
import Sitting from './sitting/sitting';
import Success from './success/success';

export default function App() {
  const [movieInfo, setMovieInfo] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedSeatsNum, setSelectedSeatsNum] = useState([])
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [date, setDate] = useState('')
  const [schedule, setSchedule] = useState('')

  function movieDescription(description) {
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
          <Movies movieDescription={(description) => movieDescription(description)} />
        </Route>
        <Route path="/sessoes/:idFilme" exact>
          <Schedule movieInfo={movieInfo} date={setDate} hour={setSchedule} />
        </Route>
        <Route path="/sessoes/:idFilme/assentos/:idSessao" exact>
          <Sitting movieInfo={movieInfo} setSelectedSeats={setSelectedSeats} setName={setName} name={name} setCpf={setCpf} cpf={cpf} date={date} schedule={schedule} selectedSeatsNum={setSelectedSeatsNum}/>
        </Route>
        <Route path="/sessoes/:idFilme/assentos/:idSessao/sucesso" exact>
          <Success selectedSeats={selectedSeats} name={name} cpf={cpf} date={date} schedule={schedule} movieInfo={movieInfo} selectedSeatsNum={selectedSeatsNum} setSchedule={setSchedule} setDate={setDate} setCpf={setCpf} setName={setName} setSelectedSeatsNum={setSelectedSeatsNum} setSelectedSeats={setSelectedSeats} setMovieInfo={setMovieInfo}/>
        </Route>
      </Switch>

    </Router>
  );
}
