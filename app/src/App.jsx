import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/home'
import Menu from './pages/menu/menu'
import Orders from './pages/orders/orders'
import About from './pages/about/about'
import Nav from './components/nav'
import Footer from './components/footer'
import Cart from './pages/cart/cart'
import ProductDetails from './pages/productDetails/productDetails'







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
        </Routes>
      
      <Footer/>
      
    </>
  
   )
  
}

export default App
