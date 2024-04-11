import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth} from '../../../firebase-config'
import { useDispatch } from 'react-redux';
import { addUserStart } from '../../../redux/actions/user.action';

let initialState = {
    name: '',
    email: '',
    password: ''
}
function Register() {

    const dispatch=useDispatch();
    const navigate=useNavigate();
    let [formData, setFormData] = useState(initialState)

    let { name, email, password } = formData;

    const inputChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));

    };

    const submit = async (event) => {
        event.preventDefault()


        try {
            let userData = await createUserWithEmailAndPassword(auth, formData.email, formData.password)

            delete formData.password
            formData.uid = userData.user.uid;
            dispatch(addUserStart(formData))
        } catch (error) {
            console.log(error.message)
        }

        setTimeout(() => {
          navigate('/login')
        }, 2000)

    }

    return (
        <>
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Register</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link to='/' >Home</Link></li>
                    <li className="breadcrumb-item active text-white">Resgister</li>
                </ol>
            </div>
            <div className='container-fluid py-4 mt-5'></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2"></div>
                    <div className="col-lg-6 col-md-8 login-box">

                        <div className="col-lg-12 login-title">
                            Register
                        </div>

                        <div className="col-lg-12 login-form">
                            <div className="col-lg-12 login-form">
                                <form onSubmit={submit}>
                                    <div className="form-group mb-4">
                                        <label className="form-control-label">NAME</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name='name' value={name}
                                            onChange={inputChange} />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label className="form-control-label">Email</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name='email'
                                            value={email}
                                            onChange={inputChange} />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label className="form-control-label">Passsword</label>
                                        <input type="password"
                                            className="form-control"
                                            name='password'
                                            value={password}
                                            onChange={inputChange} />
                                    </div>

                                    <div className="col-lg-12 loginbttm">
                                        <div className="col-lg-6 login-btm login-text">

                                        </div>
                                        <div className="col-lg-6 login-btm login-button mb-4">
                                            <button type="submit" className="btn btn-outline-primary">REGISTER</button>
                                            <Link to="/login" className="btn btn-outline-primary mx-2">LOGIN</Link>
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

export default Register