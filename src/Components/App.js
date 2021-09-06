import Movies from './movies/moviesSelection';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Schedule from './schedule/schedule';
import React, { useState, useEffect } from 'react';
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
  const [reload, setReload] = useState(false)

  function movieDescription(description) {
    setMovieInfo(description)
  };

  if(reload) {
    window.location.reload();
    setReload(false)
  }

  return (
    <Router>

      <header>
        <h1>CINEFLEX</h1>
      </header>

      <Switch>
        <Route path="/" exact>
          <Movies movieDescription={(description) => movieDescription(description)} />
        </Route>
        <Route path="/sessoes/:idFilme" exact>
          <Schedule movieInfo={movieInfo} date={setDate} hour={setSchedule} />
        </Route>
        <Route path="/sessoes/:idFilme/assentos/:idSessao" exact>
          <Sitting movieInfo={movieInfo} setSelectedSeats={setSelectedSeats} setName={setName} name={name} setCpf={setCpf} cpf={cpf} date={date} schedule={schedule} setSelectedSeatsNum={setSelectedSeatsNum} selectedSeatsNum={selectedSeatsNum}/>
        </Route>
        <Route path="/sessoes/:idFilme/assentos/:idSessao/sucesso" exact>
          <Success selectedSeats={selectedSeats} name={name} cpf={cpf} date={date} schedule={schedule} movieInfo={movieInfo} selectedSeatsNum={selectedSeatsNum} setReload={setReload}/>
        </Route>
      </Switch>

    </Router>
  );
}
