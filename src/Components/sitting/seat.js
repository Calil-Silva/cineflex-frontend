import React, { useState, useEffect } from "react"
import './sitting.css'
let seatsIDs = [];
let seatsNum = [];
export default function Seat({ isAvailable, num, id, setSelectedSeats, setSelectedSeatsNum}) {
    let selection;
    console.log(seatsIDs)
    console.log(seatsNum)

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
                seatsIDs.push(id);
                seatsNum.push(num);
                setSelectedSeats([...seatsIDs]);
                setSelectedSeatsNum([...seatsNum]);
            } else if (!isAvailable) {
                alert("Esse assento não está disponível")
            } else {
                setSelected("");
                seatsIDs = seatsIDs.filter(element => id !== element);
                seatsNum = seatsNum.filter(element => num !== element);
                setSelectedSeats([...seatsIDs]);
                setSelectedSeatsNum([...seatsNum]);
            }
        }}>{num}</div>)
}