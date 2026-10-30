import React from 'react'
import { useCart } from '../../context/cartContext'

function OrderConfirmation() {
    const {cart, cartCount} =useCart()
    
  return (
    <div>
        <div>
            <h5>Your Order is Confirmed</h5>
        </div>
        <div>
            <h4>Order Details</h4>
            <p>{cartCount}</p>
        </div>
        <div>
        {cart.map(item => (
                <div className='p-4 flex justify-between items-center'>  
                <div className='w-120 ' key={item.dish_id}>
                    <h5 className='font-medium text-xl'>{item.name}</h5>
                    <p className='text-gray-600'>{item.description}</p>
                    <p>Qty:{item.quantity}</p>
                </div> 
                <div>
                    <h5 className='font-medium text-xl text-green-950'>${item.price*item.quantity}</h5>
                </div>
                
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default OrderConfirmation
