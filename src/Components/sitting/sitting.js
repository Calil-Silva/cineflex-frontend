import './sitting.css'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Seat from './seat';
import SeatInfos from './seatInfos';

export default function Sitting() {

    let seatDescription;

    const { idSessao } = useParams();
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSessao}/seats`)
        promise.then((response) => {
            setSeats([...response.data.seats])
        })
    }, [])

    console.log(seats)

    return (
        <section>
            <h1>Selecione o(s) assento(s)</h1>
            <div className="seats">
                {seats.map((element) => {
                    if (element.isAvailable) {
                        seatDescription = "available";
                    } else {
                        seatDescription = "unavailable"
                    }
                    return (
                        <Seat isAvailable={element.isAvailable} num={element.name} />)})}
            </div>
            <SeatInfos />
        </section>
    )
}