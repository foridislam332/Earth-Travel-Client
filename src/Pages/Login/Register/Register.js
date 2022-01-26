import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Register.css';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
    const { registerUser } = useAuth();
    const [regData, setRegData] = useState('');
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegData = { ...regData };
        newRegData[field] = value;
        setRegData(newRegData)
    }

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        if (regData.password !== regData.password2) {
            alert('Password did not Match');
            return
        }
        e.preventDefault()

        registerUser(regData.name, regData.email, regData.password, location, navigate)
        console.log(regData.name)
    }
    return (
        <>
            <Navigation></Navigation>
            <div className="register_continer">
                <div className="register_box w-4/12">
                    <div className="box_title">
                        <h1 className='text-4xl font-bold text-center py-8 mb-4'>Register</h1>
                    </div>
                    <form onSubmit={handleOnSubmit}>
                        <div>
                            <input
                                className="input_field"
                                placeholder="Your Full Name"
                                name="name"
                                type="text"
                                onBlur={handleOnBlur}
                            />
                        </div>
                        <div>
                            <input
                                className="input_field"
                                placeholder="Enter your email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                            />
                        </div>
                        <div>
                            <input
                                className="input_field"
                                placeholder="Password"
                                name="password"
                                type="password"
                                onBlur={handleOnBlur}
                            />
                        </div>
                        <h2 variant="body2">Passwords must be at least 6 characters.</h2>
                        <div>
                            <input
                                className="input_field"
                                placeholder="Confirm Password"
                                name="password2"
                                type="password"
                                onBlur={handleOnBlur}
                            />
                        </div>
                        <button className="btn_primary w-full" type="submit">Create Your Account</button>
                    </form>
                    <div className="login_bottom">
                        <p className='text-center my-3'>Already have an account?</p>
                        <Link style={{ textDecoration: 'none' }} to="/login">
                            <button className="btn_primary w-full">Sign In</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;