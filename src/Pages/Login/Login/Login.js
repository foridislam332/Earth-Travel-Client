import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import Navigation from '../../Shared/Navigation/Navigation';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { googleSignIn, passwordLoginUser } = useAuth();
    const [loginData, setLoginData] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        passwordLoginUser(loginData.email, loginData.password, location, navigate);
    }

    const handleGoogleSignIn = () => {
        googleSignIn(location, navigate);
    };

    return (
        <>
            <Navigation></Navigation>
            <div className="login_continer">
                <div className="login_box w-4/12">
                    <div className="box_title">
                        <h1 className='text-4xl font-bold text-center py-8 mb-4'>Login</h1>
                    </div>
                    <form onSubmit={handleOnSubmit}>
                        <div>
                            <input
                                className="input_field"
                                placeholder='Enter Your Email'
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                            />
                        </div>
                        <div className='w-full'>
                            <input
                                className="input_field"
                                placeholder='Password'
                                name="password"
                                type="password"
                                onBlur={handleOnBlur}
                            />
                        </div>
                        <div className="form_action flex items-center justify-between">
                            <a href="#">Forgot your password?</a>
                            <button className="btn_primary" type="submit">Sign In</button>
                        </div>
                    </form>
                    <div className="login_bottom">
                        <div className="new_user my-4">
                            <hr />
                            <p>New user?</p>
                            <hr />
                        </div>
                        <Link style={{ textDecoration: 'none' }} to="/register">
                            <button className="btn_primary w-full mb-3">Creact An Account</button>
                        </Link>
                        <button onClick={handleGoogleSignIn} className="btn_primary w-full">Sign In With Google</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;