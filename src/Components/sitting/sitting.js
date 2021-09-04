import './sitting.css'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Seat from './seat';
import SeatInfos from './seatInfos';
import PersonalData from './personalData';
import MovieOption from '../HELPER/footer/movieOption';

export default function Sitting({ movieInfo, setSelectedSeats, setName, name, setCpf, cpf, date, schedule }) {

    const { idSessao } = useParams();
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSessao}/seats`)
        promise.then((response) => {
            setSeats([...response.data.seats])
        })
    }, [])

    return (
        <section>
            <h1>Selecione o(s) assento(s)</h1>
            <div className="seats">
                {seats.map((element) => {
                    return (
                        <Seat id={element.id} isAvailable={element.isAvailable} num={element.name} setSelectedSeats={(id) => setSelectedSeats(id)}/>)})}
            </div>
            <SeatInfos />
            <PersonalData setName={setName} setCpf={setCpf} name={name} cpf={cpf}/>
            <MovieOption movieInfo={movieInfo} date={date} schedule={schedule}/>
        </section>
    )
}