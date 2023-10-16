
import React, { useContext } from 'react'
import { ItemContext, PriceContext } from '../App'

export default function ComponentI() {
const price = useContext(PriceContext)
const item = useContext(ItemContext)

  return (
    <div>
        <div><h1>{price} - {item}</h1></div>
    </div>
  )
}
