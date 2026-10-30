import React from 'react'
import { useCart } from '../../context/cartContext'

function Checkout() {
    const {cart, cartCount, totalPrice} = useCart()
  return (
    <div>
        <div>
            <h4>Your Order</h4>
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

            <div>
                    <h5>Subtotal {cartCount}</h5>
                    <h5>{totalPrice}</h5>
                </div>
        </div>
    </div>
  )
}

export default Checkout
