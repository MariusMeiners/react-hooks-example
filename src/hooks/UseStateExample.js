import React, { useState } from "react"; // useState von react importieren 
import Button from 'react-bootstrap/Button';

export const UseStateExample = () => {
    const [count, setCount] = useState(0); // wichtig: muss am Anfang der Funktion stehen
    // der Parameter den man useState übergibt ist der initialwert der Variable -> in diesem Fall 0
    // count und setCount sind nur variablen die wir über array destructuring aus der hooks api ziehen
    // daher kann hier jeder Name verwendet werden.
    // Equivalent wäre:
    // const countStateArray = useState(0);
    // const count = countStateArray[0];
    // const setCount = countStateArray[1];
    return(
    <div>
        <p>click me:</p>
        <Button variant="primary" onClick={() => setCount(count+1)}>{count}</Button>
    </div>
    )
    // count kann hier also als ganz normale variable verwendet werden
    // und nicht wie sonst über this.state.count
    // useState ist also quasi der "Ersatz" für this.state
}

export default UseStateExample;