import React from 'react'
import SideBar from '../SideBar'
import { Link } from 'react-router-dom'

function Product() {
  return (
    <>
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Product</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active text-white">Category</li>
        </ol>
      </div>

      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className='row'>
            <div className='col-sm-3'>
              <SideBar />
            </div>
            <div className=' col-sm-9'>
              <div className="card">
                <div className='card-header d-flex justify-content-between'>
                  <h4>Product</h4>
                  <Link to="/admin/product/create" className='btn btn-primary text-white'>Add Product</Link>
                </div>
                <div className="card-body">
                  <table className="table table-striped">
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
                        <th>ggg</th>
                        <td><img src="" alt="//" height={"80px"} /></td>
                        <td>hhjj</td>
                        <td>ghgh</td>
                        <td>
                          <Link to={`/admin/category/edit/`} className='btn btn-warning'>
                            Edit
                          </Link>

                          <button
                            className='btn btn-danger mx-2'
                          >
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

export default Product