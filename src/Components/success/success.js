import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import './success.css'
import { ChevronBackCircleOutline } from 'react-ionicons'

export default function Success({ selectedSeats, name, cpf, date, schedule, movieInfo, selectedSeatsNum, setSchedule, setDate, setCpf, setName,setSelectedSeatsNum, setSelectedSeats, setMovieInfo }) {
    const [success, setSuccess] = useState([])
    const { idSessao, idFilme } = useParams();
    let history = useHistory();

    useEffect(() => {
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many`, {
            ids: selectedSeats,
            name: name,
            cpf: cpf
        })
        promise.then((response) => {
            setSuccess([...response.data])
        })
    }, [])

    function homePage() {
        setSchedule('');
        setDate('');
        setCpf('');
        setName('');
        setSelectedSeatsNum([]);
        setSelectedSeats([]);
        setMovieInfo([]);
    }

    function backToLastPage() {
        history.push(`/sessoes/${idFilme}/assentos/${idSessao}`);
    }

    return (
        <section className="success">
            <div className="backToLastPage">
                    <ChevronBackCircleOutline
                        color="black"
                        height="40px"
                        width="40px"
                        onClick={() => backToLastPage()}
                    />
            </div>
            <h1>Pedido feito com sucesso</h1>

            <div>
                <span className="success-info">Filme e sessão</span>
                <ul>
                    
                    <li>{movieInfo.title}</li>
                    <li>{date} {schedule}</li>
                </ul>
            </div>

            <div>
                <span className="success-info">Ingressos</span>
                <ul>
                {selectedSeatsNum.map(element => <li>Assento {element}</li>)}
                </ul>
            </div>

            <div>
                <span className="success-info">Comprador</span>
                <ul>
                    <li>{name}</li>
                    <li>{cpf}</li>
                </ul>
            </div>

            <Link to="/"><button onClick={homePage}>Voltar para Home</button></Link>

        </section>
    )
}