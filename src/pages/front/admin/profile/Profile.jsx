import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../SideBar'
import { useSelector } from 'react-redux';

function Profile() {
  const loginedUser = useSelector(state => state.user.loginedUser);

  useEffect(()=>{

  },[loginedUser])
  return (
    <>
      <div className="container-fluid page-header py-5">
        <h1  className="text-center text-white display-6">Profile</h1>
        <ol  className="breadcrumb justify-content-center mb-0">
          <li  className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li  className="breadcrumb-item active text-white">profile</li>
        </ol>
      </div>

      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className='row'>
            <div className='col-sm-3'>
              <SideBar />
            </div>
            <div className=' col-sm-9'>
              <div  className="card">
                <div className='card-header d-flex justify-content-between'>
                  <h4>Profile</h4>
                  <Link to='/admin/profile/edit' className='btn btn-primary text-white'>Edit profile</Link>
                </div>
                <div  className="card-body">
                  <p className='profile-data'>
                    <span className='title'>Name</span>
                    <span className='data'>{loginedUser.name}</span>
                  </p>

                  <p className='profile-data'>
                    <span className='title'>Email</span>
                    <span className='data'>{loginedUser.email}</span>
                  </p>

                  <p className='profile-data'>
                    <span className='title'>Image</span>
                    <span className='data'>
                      <img src={loginedUser.image}/>
                    </span>
                  </p>
                  
                  <p className='profile-data'>
                    <span className='title'>Contact Number</span>
                    <span className='data'>{loginedUser.conctactNumber}</span>
                  </p>

                  <p className='profile-data'>
                    <span className='title'>Address</span>
                    <span className='data'>{
                    `
                    ${loginedUser.conctactNumbe} ${loginedUser.address} ${loginedUser.city} ${loginedUser.state}
                       ${loginedUser.country} ${loginedUser.pincode}
                    `
                    }</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile