import React, { useEffect } from 'react'
import SideBar from '../SideBar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCategoryStart, getCategoryStart } from '../../../../redux/actions/category.action';


function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.category.categories);

  useEffect(() => {
    dispatch(getCategoryStart())
    
  },[categories.length])

  const deleteCategory = (category) => {
    dispatch(deleteCategoryStart(category))
    
  }
  return (
    <>
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Category</h1>
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
                  <h4>Category</h4>
                  <Link to="/admin/category/create" className='btn btn-primary text-white'>Add Category</Link>
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
                      {
                        categories.length > 0 && categories.map((category, indext) => (
                          <tr key={indext}>
                            <th>{indext + 1}</th>
                            <td><img src={category.image} alt="//" height={"80px"} /></td>
                            <td>{category.name}</td>
                            <td>{category.status === "1" ? "Active" : "Inactive"}</td>
                            <td>
                              <Link to={`/admin/category/edit/${category.id}`} className='btn btn-warning'>
                                Edit
                              </Link>

                              <button
                                className='btn btn-danger mx-2'
                                onClick={()=>deleteCategory(category)}>
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

export default Categories