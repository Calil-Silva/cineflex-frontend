import './moviesSelection.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

export default function MoviesSelection({movieDescription}) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies')
        promise.then(moviesPoster => {
            setMovies(moviesPoster.data)
        })
    }, [])

    console.log(movies)

    return (
        <section>
            <h1>Selecione o filme</h1>
            <div className={"movies"}>
                {movies.map((element, index) =>
                    <Link to={`/sessoes/${element.id}`}>
                        <div className={"movie"} key={index} onClick={() => movieDescription(element.title, element.posterURL)}>
                            <img src={element.posterURL} alt="" />
                        </div>
                    </Link>)}
            </div>
        </section>
    )
}