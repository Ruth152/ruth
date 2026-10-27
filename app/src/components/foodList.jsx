import React from 'react'



function FoodList({id, name, image}) {
  return (
    <div className='pt-4'>
        <div className='bg-white p-5 w-37.5 flex flex-col items-center rounded-2xl'>
        <img className='w-30 h-22.5 rounded-2xl' src={image} alt={name}/>
        <p className='font-medium font-sans'>{name}</p>
        </div>
    </div>
  )
}

export default FoodList
