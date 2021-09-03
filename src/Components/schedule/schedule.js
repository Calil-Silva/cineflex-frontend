import { Link, useParams } from "react-router-dom"
import React, { useState, useEffect } from "react";
import axios from "axios";
import './schedule.css'
import MovieOption from "../HELPER/footer/movieOption";

export default function Schedule({movieInfo}) {
    const [schedule, setSchedule] = useState([]);
    const { idFilme } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${idFilme}/showtimes`)
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
                    {element.showtimes.map(({name, id}) => <Link to={`/sessoes/${idFilme}/assentos/${id}`}><button key={id}>{name}</button></Link>)}
                </div>
            </div>
            ))}
            <MovieOption movieInfo={movieInfo}/>
        </section>
    )
}