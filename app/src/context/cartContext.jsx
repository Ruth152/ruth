import React from 'react'
import { useState, useContext, createContext } from 'react'

const CartContext = createContext(null)

export function CartProvider({children}) {
    const[cart,setCart] = useState([])
    function addToCart(dish){
        setCart((currentItems)=> {
            const existingItems = currentItems.find ((item) => item.dish_id === dish.dish_id)
            if (existingItems) {
                return currentItems.map((item) => item.dish_id === dish.dish_id ? {...dish, quantity: item.quantity + 1} : item)
            }
        }
    )
    return setCart([...cart,{...dish, quantity: 1}])
    }

   const cartCount = cart.reduce((total, item) => total+ item.quantity, 0)

  return (
    <div>
      <CartContext.Provider value={{addToCart, cart, cartCount}} >
        {children}
      </CartContext.Provider>
    </div>
  )
}

export function useCart(){
    const context = useContext(CartContext)
    return context
}

