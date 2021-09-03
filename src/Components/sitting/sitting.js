import './sitting.css'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
                {seats.map((element, index) => {
                    if (element.isAvailable) {
                        seatDescription = "available";
                    } else {
                        seatDescription = "unavailable"
                    }
                    return (
                        <div className={`seat ${seatDescription}`} key={index}>{element.name}</div>)
                    }
            )
                }
            </div>
            <div className="seats-info">
                <div className="info">
                    <div className="seat selected"></div>
                    <span>Selecionado</span>
                </div>

                <div className="info">
                    <div className="seat available"></div>
                    <span>Disponível</span>
                </div>

                <div className="info">
                    <div className="seat unavailable"></div>
                    <span>Indisponível</span>
                </div>
            </div>
        </section>
    )
}