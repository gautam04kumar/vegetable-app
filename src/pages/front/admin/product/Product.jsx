import React, { useEffect } from 'react'
import SideBar from '../SideBar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductStart } from '../../../../redux/actions/product.action ';


function Product() {
  const dispatch=useDispatch();
  const products =useSelector(state=>state.product.products);

  useEffect(()=>{

  },[products.length])

  const deleteProduct = (product) => {
    dispatch(deleteProductStart(product))
    
  }
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
                        <th>Short Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        products.length >0 && products.map((product,index)=>(
                          <tr key={index}>
                        <th>{index +1}</th>
                        <td><img src={product.image} alt="//" height={"80px"} /></td>
                        <td>{product.name}</td>
                        <td>{product.shortDescription}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>{product.status ==='1'? 'Active':'Inactive'}</td>
                        <td>
                          <Link to={`/admin/product/edit/${product.id}`} className='btn btn-warning'>
                            Edit
                          </Link>

                          <button
                            className='btn btn-danger mx-2'
                            onClick={()=>deleteProduct(product)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                        ))
                      }


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