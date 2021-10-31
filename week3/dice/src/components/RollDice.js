import React, { useState } from 'react'
import Die from './Die'
import Die2 from './Die2';
import './Die.css'

function Rolldice() { 
    const [roll, setRoll] = useState(0);
    const [roll2, setRoll2] = useState(0)


    const randomNum = Math.floor(Math.random() * (7-1)) + 1;
    const randomNum2 = Math.floor(Math.random() * (7-1)) + 1;
    
    return (
        <div>
            <Die roll={roll} />
            <Die2 roll2={roll2} />
            <p style ={{color: 'white'}}>You have rolled a {roll} and {roll2}</p>
            <button onClick={() => setRoll(randomNum) + setRoll2(randomNum2)}>
            Roll Die</button>
        </div>
    );
}

export default Rolldice