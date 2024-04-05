import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/front/Home'
import Shop from '../pages/front/Shop'
import Details from '../pages/front/Details'
import Cart from '../pages/front/Cart'
import Checkout from '../pages/front/Checkout'
import Thank from '../pages/front/Thank'
import Login from '../pages/front/authentic/Login'
import Register from '../pages/front/authentic/Register'
import Auth from '../pages/front/admin/Auth'
import Profile from '../pages/front/admin/profile/Profile'
import ProfileEdit from '../pages/front/admin/profile/ProfileEdit'
import Product from '../pages/front/admin/product/Product'
import AddOrEditProduct from '../pages/front/admin/product/AddOrEditProduct'
import Categories from '../pages/front/admin/category/Categories'
import AddOrEditcategories from '../pages/front/admin/category/AddOrEditcategories'
import Order from '../pages/front/admin/order/Order'
import OrderView from '../pages/front/admin/order/OrderView'
import Users from '../pages/front/admin/user/Users'
import AddOrEditUser from '../pages/front/admin/user/AddOrEditUser'
import PageNotFound from '../pages/front/PageNotFound'


function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/shop-details' element={<Details />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/check-out' element={<Checkout />} />
      <Route path='/thank' element={<Thank />} />

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<PageNotFound />} />

      <Route path='/admin' element={<Auth />}>

        <Route path='profile'>
          <Route path='' element={<Profile />} />
          <Route path='edit' element={<ProfileEdit />} />
        </Route>

        <Route path='product'>
          <Route path='' element={<Product />} />
          <Route path='create' element={<AddOrEditProduct />} />
          <Route path='edit' element={<AddOrEditProduct />} />
        </Route>

        <Route path='category'>
          <Route path='' element={<Categories />} />
          <Route path='create' element={<AddOrEditcategories />} />
          <Route path='edit/:id' element={<AddOrEditcategories />} />
        </Route>

        <Route path='order'>
          <Route path='' element={<Order />} />
          <Route path='view' element={<OrderView />} />
        </Route>

        <Route path='user'>
          <Route path='' element={<Users />} />
          <Route path='create' element={<AddOrEditUser />} />
          <Route path='edit' element={<AddOrEditUser />} />
        </Route>

      </Route>
    </Routes>
  )
}

export default Router