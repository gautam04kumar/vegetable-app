import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

import { addCartStart } from '../redux/actions/cart.action';
import { addToCartHelper } from '../helper/Cart.helper';



function ProductItems({ product }) {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const loginedUser = useSelector(state => state.user.loginedUser);
    const cart = useSelector(state => state.cart.cart);
    
    const addToCart = () => {
        if (! loginedUser.name) {
            navigate('/login')
        }
    let updatedCartResponse=addToCartHelper({...cart},product,loginedUser)
    
    dispatch(addCartStart(updatedCartResponse));
        
    }

    return (
        <div className={`col-md-6 col-lg-4 col-xl-3`}>
            <div className="rounded position-relative fruite-item">
                <div className="fruite-img">
                    <img src={product.image} className="img-fluid w-100 rounded-top" alt="" />
                </div>
                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{
                    top: "10px", right: "10px"
                }}>{product.category}</div>
                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                    <Link to={`/shop-details/${product.id}`}><h4>{product.name}</h4></Link>

                    <p>{product.shortDescription}</p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">{product.price} / kg</p>
                        <button className="btn border border-secondary rounded-pill px-3 text-primary"
                            onClick={addToCart}><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItems