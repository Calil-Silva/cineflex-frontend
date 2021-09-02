import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react";
import axios from "axios";
import './schedule.css'
import Aranha from '../movies/images/aranha.jpeg'

export default function Schedule() {
    const [schedule, setSchedule] = useState([]);
    const { idFilme } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`)
        promise.then(response => {
            setSchedule([...response.data.days])
            console.log(response.data)
        })
    }, [])

    return (
        <section>
            <h1>Selecione o horário</h1>
        {schedule.map((element, index) => (
            <div className="schedule" key={index}>
                <span>{`${element.weekday} - ${element.date}`}</span>
                <div className="schedule-options">
                    {element.showtimes.map(({name, id}) => <button key={id}>{name}</button>)}
                </div>
            </div>
            ))}

            <div className="movie-option">
                <div className="movie-img">
                    <img src={Aranha} />
                </div>
                <span>Aranhas</span>
            </div>
        </section>
    )
}