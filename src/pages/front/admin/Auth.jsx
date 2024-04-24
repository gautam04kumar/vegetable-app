import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import PageNotFound from '../PageNotFound';

function Auth() {
  const navigate=useNavigate();
  const loginedUser = useSelector(state => state.user.loginedUser);
 const location=useLocation();
  useEffect(()=>{
    if(!loginedUser.id){
      setTimeout(() => {
      navigate('/login')
    },1000);
    }
    
  },[loginedUser])

  if(loginedUser.role =='0'){

    if(
      location.pathname.includes("product"
    || location.pathname.includes("user")
    || location.pathname.includes("category")
    ))
    return<PageNotFound/>
  }

  return (
    <>
      <Outlet />
    </>


  )
}

export default Auth