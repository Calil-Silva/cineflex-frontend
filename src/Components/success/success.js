import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './success.css'

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
        <section className="success">
            <h1>Pedido feito com sucesso</h1>

            <div>
                <span className="success-info">Filme e sessão</span>
                <ul>
                    <li>Enola Holmes</li>
                    <li>24/06/2021 15:00</li>
                </ul>
            </div>

            <div>
                <span className="success-info">Ingressos</span>
                <ul>
                    <li>Assento 15</li>
                    <li>Assento 16</li>
                </ul>
            </div>

            <div>
                <span className="success-info">Comprador</span>
                <ul>
                    <li>Nome: João da Silva Sauro</li>
                    <li>CPF: 123.456.789-10</li>
                </ul>
            </div>

            <button>Voltar para Home</button>

        </section>
    )
}