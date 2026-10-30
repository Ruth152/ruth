
import { useState, useContext, createContext } from 'react'


const CartContext = createContext(null)

export function CartProvider({children}) {
    const[cart,setCart] = useState([])

    function increaseQty(id) {
      return setCart((currentItems)=> currentItems.map((item) => item.dish_id === id? {...item, quantity: item.quantity + 1} : item))
    }
    function decreaseQty(id) {
      
      return setCart((currentItems)=> currentItems.map((item) => {
        if(item.quantity < 1){
          return item
        }
        
        item.dish_id === id ? {...item, quantity: item.quantity - 1} : item
        
      }))
     
    }

    function addToCart(dish) {
        setCart((currentItems) => {
            const existingItems = currentItems.find ((item) => item.dish_id === dish.dish_id)
            if (existingItems) {
                return currentItems.map((item) => item.dish_id === dish.dish_id ? {...dish, quantity: item.quantity + 1} : item)
            }
            return [...currentItems, {...dish, quantity: 1}]
        })
    }

    function removeFromCart(id) {
        setCart((currentItems) => currentItems.filter((item) => item.dish_id !== id))
    }

    function clearCart() {
        setCart([])
    }

   const cartCount = cart.reduce((total, item) => total+ item.quantity, 0)

   const totalPrice = cart.reduce((total,item) => total + item.price, 0)
  
    
  

  return (
    <div>
      <CartContext.Provider value={{addToCart, cart, cartCount, increaseQty, decreaseQty, removeFromCart, clearCart, totalPrice}} >
        {children}
      </CartContext.Provider>
    </div>
  )
}

export function useCart(){
    const context = useContext(CartContext)
    return context;
}

