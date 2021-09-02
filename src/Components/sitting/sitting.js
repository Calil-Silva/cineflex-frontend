import './sitting.css'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Sitting() {

    const { idSessao } = useParams();
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`)
        promise.then((response) => {
            setSeats([response.data])
        })
    }, [])

    console.log(seats)

    return (
        <section>
            <h1>Selecione o(s) assento(s)</h1>

            <div className="seats">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>


            </div>
        </section>
    )
}