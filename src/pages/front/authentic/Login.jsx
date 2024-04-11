import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase-config';
import { useDispatch, useSelector } from 'react-redux';
import { loginedUserStart } from '../../../redux/actions/user.action';

let initialState = {
    email: '',
    password: ''
}
function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let [formData, setFormData] = useState(initialState)
    const users = useSelector(state => state.user.users);

    let { email, password } = formData;

    const inputChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));

    };
    const submit = async (event) => {
        event.preventDefault()

        try {
            let userData = await signInWithEmailAndPassword(auth, formData.email, formData.password)

            let user = users.find(user => user.uid === userData.user.uid)

            dispatch(loginedUserStart(user))

            setTimeout(() => {
              navigate('/admin/profile')
            }, 2000)
        } catch (error) {
            console.log(error.message)
        }



    }
    return (
        <>
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Login</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-item active text-white">Login</li>
                </ol>
            </div>
            <div className='container-fluid py-4 mt-5'></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2"></div>
                    <div className="col-lg-6 col-md-8 login-box">

                        <div className="col-lg-12 login-title">
                            Login
                        </div>

                        <div className="col-lg-12 login-form">
                            <div className="col-lg-12 login-form">
                                <form onSubmit={submit}>
                                    <div className="form-group mb-4">
                                        <label className="form-control-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name='email'
                                            value={email}
                                            onChange={inputChange} />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label className="form-control-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name='password'
                                            value={password}
                                            onChange={inputChange}
                                        />
                                    </div>

                                    <div className="col-lg-12 loginbttm">
                                        <div className="col-lg-6 login-btm login-text">

                                        </div>
                                        <div className="col-lg-6 login-btm login-button mb-4">
                                            <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                                            <Link to="/register" className="btn btn-outline-primary mx-2">REGISTER</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2"></div>
                    </div>
                </div>
            </div>





        </>
    )
}

export default Login
