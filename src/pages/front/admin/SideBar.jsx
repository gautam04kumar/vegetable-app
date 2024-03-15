import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item active" aria-current="true">Sidebar</li>
                <li className="list-group-item">
                    <Link to="/admin/profile">Profile</Link>
                </li>

                <li className="list-group-item">
                    <Link to="/admin/order">Order</Link>
                </li>

                <li className="list-group-item">
                    <Link to="/admin/product">Product</Link>
                </li>

                <li className="list-group-item">
                    <Link to="/admin/category">Categories</Link>
                </li>

                <li className="list-group-item">
                    <Link to="/admin/user">User</Link>
                </li>

                <li className="list-group-item">
                    <Link >Logout</Link>
                </li>

            </ul>
        </>
    )
}

export default SideBar