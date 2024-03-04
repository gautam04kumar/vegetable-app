import React from 'react'
import SideBar from '../SideBar'
import { Link } from 'react-router-dom'

function AddOrEditcategories() {
  return (
    <>
      <div class="container-fluid page-header py-5">
        <h1 class="text-center text-white display-6">Add Categroy</h1>
        <ol class="breadcrumb justify-content-center mb-0">
          <li class="breadcrumb-item"><Link to="/">Home</Link></li>
          <li class="breadcrumb-item active text-white">Add Categroy</li>
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
                  <h4>Add Category</h4>
                  <Link to="/admin/category/" className='btn btn-primary text-white'>Back</Link>
                </div>
                <div class="card-body">
                  <form action=''>
                    <div class="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" className="form-control" id="name" placeholder="category name" />
                    </div>

                    <div class="mb-3">
                      <label htmlFor="image" className="form-label">Image</label>
                      <input type="file" className="form-control" id="image" />
                    </div>
                    <div class="mb-3">
                      <label htmlFor="status" className="form-label">Status</label>
                      <select className='form-control'>
                        <option value="" hidden>select Status</option>
                        <option value="">Active</option>
                        <option value="">Inactive</option>
                      </select>
                    </div>
                    <div className='row'>
                      <div className='col-sm-6 d-grid'>
                        <button type='submit' className='btn btn-primary text-white'>Submit</button>
                      </div>

                      <div className='col-sm-6 d-grid'>
                        <button type='reset' className='btn btn-primary text-white'>Reset</button>
                      </div>
                      

                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddOrEditcategories