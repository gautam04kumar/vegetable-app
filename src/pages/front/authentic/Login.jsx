import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <div class="container-fluid page-header py-5">
                <h1 class="text-center text-white display-6">Login</h1>
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                    <li class="breadcrumb-item active text-white">Shop Detail</li>
                </ol>
            </div>
            <div className='container-fluid py-4 mt-5'></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-2"></div>
                    <div class="col-lg-6 col-md-8 login-box">

                        <div class="col-lg-12 login-title">
                            Login
                        </div>

                        <div class="col-lg-12 login-form">
                            <div class="col-lg-12 login-form">
                                <form>
                                    <div class="form-group mb-4">
                                        <label class="form-control-label">USERNAME</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="form-group mb-4">
                                        <label class="form-control-label">PASSWORD</label>
                                        <input type="password" class="form-control" />
                                    </div>

                                    <div class="col-lg-12 loginbttm">
                                        <div class="col-lg-6 login-btm login-text">

                                        </div>
                                        <div class="col-lg-6 login-btm login-button mb-4">
                                            <button type="submit" class="btn btn-outline-primary">LOGIN</button>
                                            <Link to="/register" class="btn btn-outline-primary mx-2">REGISTER</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-2"></div>
                    </div>
                </div>
            </div>





        </>
    )
}

export default Login
