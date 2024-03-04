import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
    return (
        <>
            <ul class="list-group">
                <li class="list-group-item active" aria-current="true">Sidebar</li>
                <li class="list-group-item">
                    <Link to="/admin/profile">Profile</Link>
                </li>

                <li class="list-group-item">
                    <Link to="/admin/order">Order</Link>
                </li>

                <li class="list-group-item">
                    <Link to="/admin/product">Product</Link>
                </li>

                <li class="list-group-item">
                    <Link to="/admin/category">Categories</Link>
                </li>

                <li class="list-group-item">
                    <Link to="/admin/user">User</Link>
                </li>

                <li class="list-group-item">
                    <Link >Logout</Link>
                </li>

            </ul>
        </>
    )
}

export default SideBar