import { Link, useParams } from "react-router-dom"
import React, { useState, useEffect } from "react";
import axios from "axios";
import './schedule.css'

export default function Schedule({movieInfo}) {
    const [schedule, setSchedule] = useState([]);
    const { idFilme } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`)
        promise.then(response => {
            setSchedule([...response.data.days])
        })
    }, [])

    return (
        <section>
            <h1>Selecione o horário</h1>
        {schedule.map((element, index) => (
            <div className="schedule" key={index}>
                <span>{`${element.weekday} - ${element.date}`}</span>
                <div className="schedule-options">
                    {element.showtimes.map(({name, id}) => <Link to={`/sessoes/${idFilme}/assentos/${id}`}><button key={id}>{name}</button></Link>)}
                </div>
            </div>
            ))}

            <div className="movie-option">
                <div className="movie-img">
                    <img src={movieInfo[1]} />
                </div>
                <span>{movieInfo[0]}</span>
            </div>
        </section>
    )
}