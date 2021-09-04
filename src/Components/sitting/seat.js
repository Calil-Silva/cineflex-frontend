import React, { useState, useEffect } from "react"
import './sitting.css'
let teste = [];
export default function Seat({ isAvailable, num, id, setSelectedSeats}) {
    let selection;

    const [selected, setSelected] = useState('')

    if (isAvailable) {
        selection = 'available'
    } else {
        selection = 'unavailable'
    }

    return (
        <div style={{ backgroundColor: selected }} className={`seat ${selection}`} onClick={() => {
            if (selected === '' && isAvailable) {
                setSelected("#8DD7CF")
                teste.push(id)
                setSelectedSeats([...teste])
            } else if (!isAvailable) {
                alert("Esse assento não está disponível")
            } else {
                setSelected("")
                teste = teste.filter(element => id !== element)
                setSelectedSeats([...teste])
            }
        }}>{num}</div>)
}