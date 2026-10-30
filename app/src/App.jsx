import {Routes, Route} from 'react-router-dom'
import Menu from './pages/menu/menu'
import Orders from './pages/orders/orders'
import About from './pages/about/about'
import Nav from './components/nav'
import Footer from './components/footer'
import Cart from './pages/cart/cart'
import ProductDetails from './pages/productDetails/productDetails'
import Error from './pages/error/error'
import Checkout from './pages/checkout/checkout'
import OrderConfirmation from './pages/orderConfirmation/orderConfirmation'
import OrderTracking from './pages/orderTracking/orderTracking'
import Home from './pages/home/home'







function App() {
    
   return(
     <>
    <Nav/>
    
        <Routes>
          <Route path='/' index element={<Home/>}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/dish/:dish_id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/error' element={<Error/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/order confirmation' element={<OrderConfirmation/>}/>
          <Route path='/order tracking' element={<OrderTracking/>}/>
        </Routes>
      
      <Footer/>
      
    </>
  
   )
  
}

export default App
