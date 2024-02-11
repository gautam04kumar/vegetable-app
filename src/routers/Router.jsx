import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/front/Home'


function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        
    </Routes>
  )
}

export default Router