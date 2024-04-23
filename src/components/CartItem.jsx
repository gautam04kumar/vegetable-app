import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { addToCartHelper } from '../helper/Cart.helper'
import { useDispatch, useSelector } from 'react-redux';
import { addCartStart } from '../redux/actions/cart.action';




function CartItem({ item }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginedUser = useSelector(state => state.user.loginedUser);
    const cart = useSelector(state => state.cart.cart);

    const [qty, setQty] = useState(1)

    const incrementQuantity = () => {
        setQty(qty + 1)

        let response = addToCartHelper(cart, item, loginedUser)
        dispatch(addCartStart(response))
    }
    const decrementQuantity = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }

    const inputChange = (event) => {
        if (event.target.value) {
            setQty(parseInt(event.target.value))
        } else {
            setQty(1)
        }

    }
    const remove = () => {
        navigate('/')
    }

    return (
        <>
            <tr>
                <th>
                    <div className="d-flex align-items-center">
                        <img src={item.image} className="img-fluid rounded-circle" style={{ width: "80px", height: "80px" }} alt="//" />
                    </div>
                </th>

                <td>
                    <p className="mb-0 mt-4">{item.name}</p>
                </td>
                <td>
                    <p className="mb-0 mt-4">${item.price}</p>
                </td>
                <td>
                    <div className="input-group quantity mt-4" style={{ width: "100px" }}>
                        <div className="input-group-btn">
                            <button className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={decrementQuantity}>
                                <i className="fa fa-minus"></i>
                            </button>
                        </div>
                        <input type="text" className="form-control form-control-sm text-center border-0" value={qty}
                            onChange={inputChange}
                        />
                        <div className="input-group-btn">
                            <button className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={incrementQuantity}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </td>
                <td>
                    <p className="mb-0 mt-4">${item.price * qty}</p>
                </td>
                <td>
                    <button onClick={remove} className="btn btn-md rounded-circle bg-light border mt-4" >
                        <i className="fa fa-times text-danger"></i>
                    </button>
                </td>

            </tr>
            <div className="bg-light rounded mt-4 justify-content-end">
                <div className="p-4">
                    <h1 className="display-6 mb-4">Cart <span className="fw-normal">Total</span></h1>
                    <div className="d-flex justify-content-between mb-4">
                        <h5 className="mb-0 me-4">Subtotal:</h5>
                        <p className="mb-0">${item.price * qty}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className="mb-0 me-4">Tax</h5>
                        <div className="">
                            <p className="mb-0">$ 0</p>
                        </div>
                    </div>

                </div>
                <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                    <h5 className="mb-0 ps-4 me-4">Total</h5>
                    <p className="mb-0 pe-4">${item.price * qty}</p>
                </div>
                <Link to="/check-out" className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4" type="button">Proceed Checkout</Link>
            </div>

        </>
    )
}

export default CartItem