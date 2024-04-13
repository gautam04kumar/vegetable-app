import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom'

function Auth() {
  const navigate=useNavigate();
  const loginedUser = useSelector(state => state.user.loginedUser);

  useEffect(()=>{
    if(!loginedUser.id){
      setTimeout(() => {
      navigate('/login')
    },1000);
    }
    
  },[loginedUser])
  return (
    <>
      <Outlet />
    </>


  )
}

export default Auth