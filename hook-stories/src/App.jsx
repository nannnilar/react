import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchMultipleEmployee from './hook/FetchMultipleEmployee'
import axios from 'axios'
import ComponentC from './components/ComponentC'
import ComponentI from './components/ComponentI'
import MyCounter1 from './hook/MyCounter1'
import MyCounter2 from './hook/MyCounter2'
import MyCounter3 from './hook/MyCounter3'

export const PriceContext = React.createContext()
export const ItemContext = React.createContext()

function App() {
 
  return(
    <>
    {/* <FetchMultipleEmployee></FetchMultipleEmployee> 
     <PriceContext.Provider value={'$200'}>
      <ItemContext.Provider value={'samsung'}>
      <ComponentC></ComponentC>
      <ComponentI></ComponentI>
      </ItemContext.Provider>
   
    </PriceContext.Provider> */}

    {/* <MyCounter1></MyCounter1> */}
    {/* <MyCounter2></MyCounter2> */}
    <MyCounter3></MyCounter3>
  
    
    </>
  )

 
}

export default App
