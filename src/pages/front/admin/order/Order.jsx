import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderStart } from '../../../../redux/actions/order.action'

function Order() {

  const cart = useSelector(state => state.cart.cartItem)
  console.log(cart);
  

  let dispatch = useDispatch();


  useEffect(() => {
    dispatch(getOrderStart)
  }, [cart])
  return (
    <>
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Order details</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active text-white">Order details</li>
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
                  <h4>Orders</h4>
                </div>
                <div className="card-body">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>image</th>
                        <th>Buyer's name</th>
                        <th>Item's name</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td><img style={{ width: '80px', height: '80px', borderRadius: '50%' }} src={cart.items[0].image}></img></td>
                        <td>{cart.customer.name}</td>
                        <td>{cart.items[0].name}</td>
                        <td>{cart.items[0].price}</td>
                        <td>
                          <Link to={`/admin/order/view/${cart.items[0].id}`} className='btn btn-info'>
                            View
                          </Link>
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

export default Order