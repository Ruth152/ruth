import { useCart } from '../../context/cartContext'
import {Trash} from 'lucide-react'
import { useNavigate } from 'react-router-dom';


function Cart() {
    const {cart, cartCount, decreaseQty, increaseQty, removeFromCart, clearCart, totalPrice} = useCart()

    const  navigate = useNavigate();
    const handleClick=()=>{
        navigate("/checkout")
    }

  return (
    <div className='p-7 bg-gray-50 w-full'>
      <div>
        <div className='flex gap-3 items-center pb-7'> 
          <h5 className='bg-gray-300 rounded-full text-center font-light w-50'>Continue Browsing Menu </h5>
          <h5 className='font-light'>/ Victoria Island Kitchen</h5>
        </div>
        <h5 className='text-red-800 font-medium pb-3'>REVIEW YOUR ORDER <span className='text-gray-600'>Express Courier</span></h5>
        <div className='flex gap-5 items-center'>
          <h2 className='text-4xl font-medium text-green-950'>Your Cart</h2>
          <p className='bg-green-800 w-20 h-7 rounded-full text-white text-center'>{cartCount} items</p>
        </div>
      </div>

      <div className='bg-white rounded-2xl p-5 my-7'>
        <div className='flex justify-between pb-7'>
          <h5 className='text-green-950 font-medium'>Artisanal Dishes</h5>
          <button type='button' onClick={clearCart} className='text-gray-600 text-sm font-medium'>Clear Cart</button>
        </div>
        <div>
          {cart.map(item => (
            <div className='p-4 flex justify-between items-center' key={item.dish_id}>
              <div className='w-120 '>
                <h5 className='font-medium text-xl'>{item.name}</h5>
                <p className='text-gray-600'>{item.description}</p>
                <div className='flex justify-between'>
                    <h5 className='font-medium text-xl text-green-950'>${item.price} <span className='text-gray-500 text-sm'>each</span></h5>
                </div>
              </div> 
              <div className='bg-white w-fit py-1 px-2 flex gap-5 justify-between rounded-full'>
                <button onClick={() => decreaseQty(item.dish_id)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => increaseQty(item.dish_id)}>+</button>
              </div>
              <div>
                <h5 className='font-medium text-xl text-green-950'>${item.price*item.quantity}</h5>
              </div>
              <div>
                <button type='button' onClick={() => removeFromCart(item.dish_id)}><Trash size={16} color="gray" strokeWidth={1.5} /></button>
              </div>
            </div>
          ))
          }
        </div>
      </div>
      <div>
      <div>
        <div>
          <div>
            <h5>Item subtotal {cartCount}</h5>
            <h5>{totalPrice}</h5>
          </div>
          <div>
            <h5>Estimated Delivery</h5>
            <h5>$1.20</h5>
          </div>
          <div>
            <h5>Packaging and Eco Fee</h5>
            <h5>$0.40</h5>
          </div>
          <div>
            <h5>Total</h5>
            <h5></h5>
          </div>
        </div>
          
        <div>
          <button onClick={handleClick}>Proceed to Checkout</button>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Cart
