import React from 'react'
import { dish } from '../../dish'
import { useParams } from 'react-router-dom'
import { useCart } from '../../context/cartContext'

function ProductDetails() {
   const {decreaseQty, increaseQty, addToCart} = useCart()
    const {dish_id} =useParams()
    const dishes = dish.find(item => item.dish_id === dish_id)
    
     if(!dishes) {
      return <p>Dish not found</p>
    }

  return (
    <div className='p-10'>
      <div className='flex gap-15'>
        <div>
          <img className='w-100 h-100 rounded-xl' src={dishes.images.full_size} alt={dishes.name} />
        </div>
        <div>
          <div className='flex flex-col gap-4'>
            <h3  className=' font-semibold text-3xl'>{dishes.name}</h3>
            <p className='text-xl text-gray-600'>{dishes.description}</p>
            <h5 className='font-medium text-5xl text-green-950'>${dishes.price}</h5>
          </div>
        
           <div>
            <h5>Brioche Bun Selection</h5>
            <p>Optional</p>
            <button>-</button>
            <h6>1</h6>
            <button>+</button>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default ProductDetails
