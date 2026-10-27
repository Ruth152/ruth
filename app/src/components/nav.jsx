import { Link, NavLink } from 'react-router-dom';
import {Search} from 'lucide-react';
import { Handbag } from 'lucide-react';
import './nav.css';
import { useCart } from '../context/cartContext';

function Nav() {
    const {cartCount} = useCart()
  return (
    <nav className='w-full h-12.5  p-12 m-0 border-b-1 border-gray-200'>
        <div className='flex flex-row justify-between '>
            <div className='text-green-900  font-bold text-3xl font-serif'>
                <h3>SAVORE</h3>
            </div>
            <div className='flex gap-5 items-center'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/menu'>Menu</NavLink>
                <NavLink to='/orders'>Orders</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
            <div className='flex gap-4'>
                <button><Search /></button>
                <div className='flex flex-row gap-5'>
                    <Link to='/cart' className='relative'>
                    <Handbag />
                    <div className='absolute top-0 right-0 font-bold text-black bg-amber-500 w-4 h-5 rounded-full flex'>{cartCount}</div>
                    </Link>
                </div>
            </div>
            <div>
                <h5>Welcome back</h5>
            </div>
        </div>
    </nav>  
  )
}

export default Nav;
