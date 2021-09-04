import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Success({ selectedSeats, name, cpf }) {
    const [success, setSuccess] = useState([])

    useEffect(() => {
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many`, {
            ids: selectedSeats,
            name: name,
            cpf: cpf
        })
        promise.then((response) => {
            setSuccess([...response.data])
            console.log(success)
        })
    }, [])


    return (
        <h1>teste</h1>
    )
}