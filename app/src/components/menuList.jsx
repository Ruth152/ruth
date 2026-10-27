import React from 'react'
import { Star } from 'lucide-react'
import { useCart } from '../context/cartContext'
import { useNavigate } from "react-router-dom";

function MenuList({dish}) {
   const navigate = useNavigate()
    const showProducts = () =>{
      navigate(`/dish/${dish.dish_id}`)
    }
 
  const  {addToCart, cart} = useCart()
  
  console.log(cart)

  return (
    <div className='w-[270px] bg-white rounded-xl p-5  m-4'>
      <div onClick={showProducts}>
        <h5 className='font-medium text-xl'>{dish.name}</h5>
        <p className='text-gray-600'>{dish.description}</p>
      </div>
      <div className='flex justify-between'>
        <h5 className='font-medium text-xl text-green-950'>${dish.price}</h5>
        <button onClick={() => addToCart(dish)} className='bg-orange-600 p-1 rounded-xl text-white font-medium'>+ Add</button>
      </div>
    </div>
  )
}

export default MenuList
