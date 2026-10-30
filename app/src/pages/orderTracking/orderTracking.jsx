import React from 'react'
import { useCart } from '../../context/cartContext'

function OrderTracking() {
    const {cart, cartCount} = useCart()
  return (
    <div>
        <div>
            <h5>Order Manifest ({cartCount})</h5>
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

export default OrderTracking
