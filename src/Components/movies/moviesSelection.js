import './moviesSelection.css'
import axios from 'axios'
import React, { useState } from 'react';
import Aranha from './images/aranha.jpeg'

export default function MoviesSelection() {
const [status, setStatus] = useState("")

const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies')
promisse.then(moviesArray)

function moviesArray(promisse) {
    // setStatus(promisse.data)
    // console.log(status)
}

    // teste.map((movies) => <img src={movies.postURL} />)
    return (
        <section>
            <h1>Selecione o filme</h1>
            <div className={"movies"}>
                <div className={"movie"}><img src={Aranha} /></div>
                <div className={"movie"}><img src={Aranha} /></div>
                <div className={"movie"}><img src={Aranha} /></div>
                <div className={"movie"}><img src={Aranha} /></div>
            </div>
        </section>
    )
}