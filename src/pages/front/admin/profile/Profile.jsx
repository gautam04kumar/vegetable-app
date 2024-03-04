import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../SideBar'

function Profile() {
  return (
    <>
      <div class="container-fluid page-header py-5">
        <h1 class="text-center text-white display-6">Profile</h1>
        <ol class="breadcrumb justify-content-center mb-0">
          <li class="breadcrumb-item"><Link to="/">Home</Link></li>
          <li class="breadcrumb-item active text-white">profile</li>
        </ol>
      </div>

      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className='row'>
            <div className='col-sm-3'>
              <SideBar />
            </div>
            <div className=' col-sm-9'>
              <div class="card">
                <div className='card-header d-flex justify-content-between'>
                  <h4>Profile</h4>
                  <button className='btn btn-primary text-white'>Edit profile</button>
                </div>
                <div class="card-body">
                  <p className='profile-data'>
                    <span className='title'>Name</span>
                    <span className='data'>Gautam</span>
                  </p>

                  <p className='profile-data'>
                    <span className='title'>Name</span>
                    <span className='data'>Gautam</span>
                  </p>

                  <p className='profile-data'>
                    <span className='title'>Name</span>
                    <span className='data'>Gautam</span>
                  </p>
                  
                  <p className='profile-data'>
                    <span className='title'>Name</span>
                    <span className='data'>Gautam</span>
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