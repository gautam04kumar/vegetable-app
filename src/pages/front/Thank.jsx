import React from 'react'
import { Link } from 'react-router-dom'

function Thank() {
    return (
        <>
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Thank You</h1>
                <ol className="breadcrumb  justify-content-center mb-0">
                    <li className="breadcrumb-item "><Link className='text-blue' to="/">Continue Shopping....</Link></li>
                </ol>
            </div>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <h1 className='text-center'> Thank-you for purchasing product with us</h1>
                </div>
            </div>
        </>
    )
}

export default Thank