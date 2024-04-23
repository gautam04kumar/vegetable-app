import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../../components/CartItem';

function Cart() {
    const cart=useSelector(state =>state.cart.cartItem)
    
    

    return (
        <>
            
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Cart</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link href="#">Home</Link></li>
                    <li className="breadcrumb-item active text-white">Cart</li>
                </ol>
            </div>
         
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Products</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                              {cart.items.length > 0 && cart.items.map((item, index) =>(
                                <CartItem item={item} key={index} />
                              ))
                              }
                                
                            </tbody>
                        </table>
                    </div>
                    <div className="row g-4 justify-content-end">
                        <div className="col-8"></div>
                        <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Cart Page End --> */}
        </>
    )
}

export default Cart