import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/front/Home'
import Shop from '../pages/front/Shop'
import Details from '../pages/front/Details'
import Cart from '../pages/front/Cart'
import Checkout from '../pages/front/Checkout'
import Thank from '../pages/front/Thank'


function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop-details' element={<Details/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/check-out' element={<Checkout/>}/>
        <Route path='/thank' element={<Thank/>}/>
        
    </Routes>
  )
}

export default Router