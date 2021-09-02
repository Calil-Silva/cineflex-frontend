import { useParams } from "react-router-dom"
import axios from "axios";

export default function Schedule() {
    const { idFilme } = useParams();
    console.log(idFilme);

    const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`)
    promise.then(response => console.log(response.data))



    return (
<h1>teste</h1>
    )
}