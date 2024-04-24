import React, { useEffect, useState } from 'react'
import SideBar from '../SideBar'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function OrderView() {

  const cart = useSelector(state => state.cart.cartItem);
  console.log(cart);
  const [order, setOrder] = useState({})
  let { id } = useParams()

  useEffect(() => {
    let findOrder = cart.items.find(ord => ord.id === id)
    console.log(findOrder);
    setOrder(findOrder)
  }, [order, id]);


  return (
    <>
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Order View</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active text-white">Order View</li>
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
                  <h4>Order #{order.id}</h4>
                  <Link to='/admin/order' className='btn btn-primary text-white'>Back</Link>
                </div>
                <div className="card-body">

                  <ul className="list-group mb-2">
                    <li className="list-group-item active" aria-current="true">Order Summary</li>
                    <li className="list-group-item">Subtoal:${cart.subTotal*2}</li>
                    <li className="list-group-item">Tax:${cart.tax}</li>
                    <li className="list-group-item">Total:${cart.grandTotal*2}</li>

                  </ul>
                  <ul className="list-group mb-2">
                    <li className="list-group-item active" aria-current="true">Billing Address</li>
                    <li className="list-group-item">Customer Name:{cart.customer.name}</li>
                    <li className="list-group-item">Customer Email:{cart.customer.email}</li>
                    <li className="list-group-item">Customer Address:{cart.customer.address}</li>
                    <li className="list-group-item">Customer City:{cart.customer.city}</li>
                    <li className="list-group-item">Customer State:{cart.customer.state}</li>
                    <li className="list-group-item">Customer Pincode:{cart.customer.pincode}</li>
                    <li className="list-group-item">Customer Number:{cart.customer.contactNumber}</li>
                  </ul>
                  <ul className="list-group mb-2">
                    <li className="list-group-item active" aria-current="true">Products</li>
                    <li className="list-group-item">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Status</th>

                          </tr>
                        </thead>
                        <tbody>

                          {cart.items.length > 0 && cart.items.map((item, index) => (
                            <tr key={index}>
                              <td>{index+1}</td>
                              <th>
                                <div className="d-flex align-items-center mt-2">
                                  <img src={item.image} className="img-fluid rounded-circle" style={{ width: "90px", height: " 90px" }} alt="" />
                                </div>
                              </th>
                              <td className="py-5">{item.name}</td>
                              <td className="py-5">${item.price}</td>
                              <td className="py-5">2</td>
                              <td className="py-5">${item.price * 2}</td>
                              <td className="py-5">Placed</td>
                            </tr>
                          ))
                          }
                        </tbody>
                      </table>
                    </li>

                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderView