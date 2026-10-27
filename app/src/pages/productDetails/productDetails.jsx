import React from 'react'
import { dish } from '../../dish'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const {dish_id} =useParams()
    const dishes = dish.find(item => item.dish_id === dish_id)
    
     if(!dishes) {
      return <p>Dish not found</p>
    }

  return (
    <div>
      
      <h3  className=' font-semibold text-2xl'>{dishes.name}</h3>
      <p className='text-sm text-gray-600 text-center'>{dishes.description}</p>
      <h5 className='font-medium text-xl text-green-950'>${dishes.price}</h5>
     
    </div>
  )
}

export default ProductDetails
