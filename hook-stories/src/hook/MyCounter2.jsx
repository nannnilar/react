

import React, { useReducer } from 'react'

export const initialState = {
    counterA : 0
}
export const reducer = (state,action) =>{
    switch(action.type){
        case 'increment':
             return {counterA: state.counterA + 1}
        case 'decrement':
             return {counterA: state.counterA - 1}
        case 'reset': 
             return {counterA: 0}
        default: 
             return state
       }
}

export default function MyCounter2() {
   const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <h1>{count.counterA}</h1>
        <button onClick={() => dispatch({type:'increment'})}>Increment</button>
        <button onClick={() => dispatch({type:'decrement'})}>Decrement</button>
        <button onClick={() => dispatch({type:'reset'})}>Reset</button>

    </div>
  )
}
