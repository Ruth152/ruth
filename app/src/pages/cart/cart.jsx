import React from 'react'
import { useCart } from '../../context/cartContext'


function Cart() {
    const {cart} = useCart()
  return (
    <div className='p-5'>
      <div>
        <div className='flex gap-3 items-center pb-5'> 
          <h5 className='bg-gray-300 rounded-full text-center font-light w-50'>Continue Browsing Menu </h5>
          <h5 className='font-light'>/ Victoria Island Kitchen</h5>
        </div>
        <h5 >REVIEW YOUR ORDER <span>Express Courier</span></h5>
        <h2>Your Cart</h2>
      </div>
      <div>
        <div>
          <h5>Add ₦1,800 more for Free Express Delivery!</h5>
          <p>Qualified for Victoria Island & Ikoyi addresses</p>
        </div>
      </div>
      <div>
        <div>
          <h5>Artisanal Dishes</h5>
          <p>Clear Cart</p>
        </div>
        {cart.map(item => (
          <div key={item.dish_id}>
          <h5 className='font-medium text-xl'>{item.name}</h5>
          <p className='text-gray-600'>{item.description}</p>
          <div className='flex justify-between'>
              <h5 className='font-medium text-xl text-green-950'>${item.price}</h5>
            </div>
          </div>
        ))

        }
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Cart
