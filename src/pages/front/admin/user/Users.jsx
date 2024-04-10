import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../SideBar'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserStart, getUserStart } from '../../../../redux/actions/user.action';

function Users() {
  const users = useSelector(state => state.user.users);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getUserStart())
  }, [users.length])

  const deleteUser = (user) => {
    dispatch(deleteUserStart(user))

  }
  return (
    <>
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">User</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active text-white">User</li>
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
                  <h4>User</h4>
                  <Link to="/admin/user/create" className='btn btn-primary text-white'>Add User</Link>
                </div>
                <div className="card-body">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>role</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.length > 0 && users.map((user, index) => (
                        <tr key={index}>
                          <th>{index + 1}</th>
                          <th>{<img src={user.image} />}</th>
                          <th>{user.name}</th>
                          <th>{user.email}</th>
                          <th>{user.role === '1' ? 'Admin' : 'Customer'}</th>
                          <th>{user.status === '1' ? 'Avtive' : 'Inactive'}</th>
                          <td>
                            <Link to={`/admin/user/edit/${user.id}`} className='btn btn-warning'>
                              Edit
                            </Link>

                            <button
                              className='btn btn-danger mx-2'
                              onClick={()=>deleteUser(user)}
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

export default Users
