import './moviesSelection.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

export default function MoviesSelection() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies')

        promise.then(moviesPoster => {
            setMovies(moviesPoster.data)
        })
    }, [])

    return (
        <section>
            <h1>Selecione o filme</h1>
            <div className={"movies"}>
                {movies.map((element) =>
                    <Link to={`/sessoes/${element.id}`}>
                        <div className={"movie"}>
                            <img src={element.posterURL} alt="" />
                        </div>
                    </Link>)}
            </div>
        </section>
    )
}