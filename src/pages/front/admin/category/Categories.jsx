import React from 'react'
import SideBar from '../SideBar'
import { Link } from 'react-router-dom'

function Categories() {
  return (
    <>
      <div class="container-fluid page-header py-5">
        <h1 class="text-center text-white display-6">Category</h1>
        <ol class="breadcrumb justify-content-center mb-0">
          <li class="breadcrumb-item"><Link to="/">Home</Link></li>
          <li class="breadcrumb-item active text-white">Category</li>
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
                  <h4>Category</h4>
                  <Link to="/admin/category/create" className='btn btn-primary text-white'>Add Category</Link>
                </div>
                <div class="card-body">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th >1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                          <Link to="/admin/category/edit" className='btn btn-warning'>
                            Edit
                          </Link>

                          <button className='btn btn-danger mx-2'>
                            Delete
                          </button>
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Categories