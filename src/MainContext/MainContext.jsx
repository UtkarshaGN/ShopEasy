import React, { createContext, useEffect, useState } from 'react'

const CartContext = createContext();

export default function MainContext({children}) {

    const[cart, setCart] = useState(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]')
        return savedCart.map((item) => ({
            ...item,
            id: item.id ?? item.name ?? item.title,
            name: item.name ?? item.title,
            image: item.image ?? item.thumbnail ?? item.images?.[0],
            qty: item.qty ?? 1,
        }))
    });

    const addToCart = (product) => {
        const id = String(product.cartId ?? product.id ?? product.name ?? product.title)
        const item = {
            id,
            name: product.name ?? product.title,
            description: product.description,
            image: product.image ?? product.thumbnail ?? product.images?.[0],
            price: Number(product.price),
        }

        setCart((currentCart) => {
            const existingItem = currentCart.find((cartItem) => String(cartItem.id) === id)

            if (existingItem) {
                return currentCart.map((cartItem) =>
                    String(cartItem.id) === id
                        ? { ...cartItem, qty: cartItem.qty + 1 }
                        : cartItem
                )
            }

            return [...currentCart, { ...item, qty: 1 }]
        })
    }

    const removeFromCart = (id) => {
        setCart((currentCart) => currentCart.filter((item) => String(item.id) !== String(id)))
    }

    const updateCartQuantity = (id, qty) => {
        setCart((currentCart) => currentCart.map((item) =>
            String(item.id) === String(id)
                ? { ...item, qty: Math.max(1, qty) }
                : item
        ))
    }

    const data = { cart, addToCart, removeFromCart, updateCartQuantity }

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