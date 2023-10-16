import { useState } from "react";


export default function Counter2(){
    const[count,setCount] = useState(0)
    const initialState=0
    const increment = () => {
        setCount((previous) => previous+1)
        setCount((previous) => previous+1)
    }
    const decrement = () => {
        setCount((previous) => previous-1)
      
    }
    const reset = () => {
        setCount((previous) => previous=initialState)
    }

    return(
        <>
        <h1>{count}</h1>
        <button onClick={increment}>Increment By 2</button>
        <button onClick={decrement}>Decrement By 1</button>
        <button onClick={reset}>Reset</button>
        </>
    )

}