import React, { useState } from "react"
import  './sitting.css'

export default function Seat( { isAvailable, num } ) {
    let selection;

    const [selected, setSelected] = useState('')

    if(isAvailable) {
        selection = 'available'
    } else {
        selection = 'unavailable'
    }

    return (
        <div style={{ backgroundColor: selected }} className={`seat ${selection}`} onClick={() => {
            if(selected === '') {
                setSelected("#8DD7CF")
            } else {
                setSelected("")
            }
            }}>{num}</div>
    )
}