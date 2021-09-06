import './sitting.css'
import { useParams, useHistory, Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Seat from './seat';
import SeatInfos from './seatInfos';
import PersonalData from './personalData';
import MovieOption from '../HELPER/footer/movieOption';
import { ChevronBackCircleOutline } from 'react-ionicons'

export default function Sitting({ movieInfo, setSelectedSeats, setName, name, setCpf, cpf, date, schedule, setSelectedSeatsNum, selectedSeatsNum }) {

    const { idSessao, idFilme } = useParams();
    const [seats, setSeats] = useState([]);
    let history = useHistory();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSessao}/seats`)
        promise.then((response) => {
            setSeats([...response.data.seats])
        })
    }, [])

    function backToLastPage() {
        history.push(`/sessoes/${idFilme}`);
    }

    return (
        <section>

            <div className="backToLastPage">
                <ChevronBackCircleOutline
                    color="black"
                    height="40px"
                    width="40px"
                    onClick={() => backToLastPage()}
                />
            </div>

            <h1>Selecione o(s) assento(s)</h1>

            <div className="seats">
                {seats.map((element, index) => {
                    return (
                        <Seat key={index} id={element.id} isAvailable={element.isAvailable} num={element.name} setSelectedSeats={(id) => setSelectedSeats(id)} setSelectedSeatsNum={(num) => setSelectedSeatsNum(num)} />)
                })}
            </div>

            <SeatInfos />

            {selectedSeatsNum.map((element,index) => <PersonalData key={index} index={element} setName={setName} setCpf={setCpf} name={name} cpf={cpf} selectedSeatsNum={selectedSeatsNum}/>)}

            <div className="submitButton">
                <Link to={`/sessoes/${idFilme}/assentos/${idSessao}/sucesso`}><input className="submit" type="submit" value="Reservar assento(s)" /></Link>
            </div>

            

            <MovieOption movieInfo={movieInfo} date={date} schedule={schedule} />

        </section>
    )
}