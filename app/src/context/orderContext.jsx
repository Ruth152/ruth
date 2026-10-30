import React from 'react'
import { useState, useContext, createContext } from 'react'

 const OrderContext = createContext(null)

export  function OrderProvider({children}) {
    const[order, setOrder] = useState()

  return (
    <div>
      <OrderContext.Provider>
        {children}
      </OrderContext.Provider>
    </div>
  )
}

export function useOrder() {
    const content = useContext(OrderContext)

    return content;
}
