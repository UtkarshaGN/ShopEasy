import React, { createContext, useEffect, useState } from 'react'

const CartContext = createContext();

export default function MainContext({children}) {

    const[cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    //console.log(cart)
    const data ={cart, setCart}

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify((cart)))
    }, [cart])

  return (
  <CartContext.Provider value={data}>
    {children}
  </CartContext.Provider>
  )
}


export {CartContext}