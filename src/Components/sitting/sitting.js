import './sitting.css'
import { useParams, useHistory } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Seat from './seat';
import SeatInfos from './seatInfos';
import PersonalData from './personalData';
import MovieOption from '../HELPER/footer/movieOption';
import { ChevronBackCircleOutline } from 'react-ionicons'

export default function Sitting({ movieInfo, setSelectedSeats, setName, name, setCpf, cpf, date, schedule, selectedSeatsNum}) {

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
                {seats.map((element) => {
                    return (
                        <Seat id={element.id} isAvailable={element.isAvailable} num={element.name} setSelectedSeats={(id) => setSelectedSeats(id)} selectedSeatsNum={(num) => selectedSeatsNum(num)}/>)})}
            </div>
            <SeatInfos />
            <PersonalData setName={setName} setCpf={setCpf} name={name} cpf={cpf}/>
            <MovieOption movieInfo={movieInfo} date={date} schedule={schedule}/>
        </section>
    )
}