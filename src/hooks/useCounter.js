import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 10) => {
        if( counter === 30) return;
        setCounter( counter + value);
    }
     
    const reset = () => {
        setCounter(initialValue);
    }

    const decrement = () => {
        if( counter === 0) return;
        setCounter( counter - 1);
    }

    return { 
        counter,
        increment, 
        reset, 
        decrement
    }
}