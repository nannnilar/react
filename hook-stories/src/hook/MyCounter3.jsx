

import React, { useReducer } from 'react'

export const initialState = {
    counterA : 0
}
export const reducer = (state,action) =>{
    switch(action.type){
        case 'increment':
             return {counterA: state.counterA + action.value}
        case 'decrement':
             return {counterA: state.counterA - action.value}
        case 'reset': 
             return {counterA: 0}
        default: 
             return state
       }
}

export default function MyCounter3() {
   const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <h1>{count.counterA}</h1>
        <button onClick={() => dispatch({type:'increment',value:1})}>Increment</button>
        <button onClick={() => dispatch({type:'increment',value:5})}>Increment By 5</button>
        <button onClick={() => dispatch({type:'decrement',value:1})}>Decrement</button>
        <button onClick={() => dispatch({type:'decrement',value:5})}>Decrement By 5 </button>
        <button onClick={() => dispatch({type:'reset'})}>Reset</button>

    </div>
  )
}
