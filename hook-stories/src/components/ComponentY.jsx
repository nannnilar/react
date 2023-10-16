
import React from 'react'
import { ItemContext, PriceContext } from '../App'

export default function ComponentY() {
  return (
    <div>
        <PriceContext.Consumer>
            {
                price => {
                    return (
                        <ItemContext.Consumer>
                            {
                                (item) => {
                                    return <div>Price Context: {price} - Item Context: {item}</div>
                                }
                            }
                        </ItemContext.Consumer>
                    )
                }
            }
        </PriceContext.Consumer>
    </div>
  )
}
