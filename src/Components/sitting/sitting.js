import './sitting.css'
import { useParams } from 'react-router-dom'

export default function Sitting() {

    const { idSessao } = useParams();
    console.log(idSessao)


    return (
        null
    )
}