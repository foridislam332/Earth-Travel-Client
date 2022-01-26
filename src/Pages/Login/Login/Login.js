import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
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
        <div className="login_continer">
            <div className="login_box">
                <div className="box_title">
                    <h1>Login</h1>
                </div>
                <form onSubmit={handleOnSubmit}>
                    <div>
                        <input
                            className="input_field"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                        />
                    </div>
                    <div>
                        <input
                            className="input_field"
                            placeholder='Password'
                            name="password"
                            type="password"
                            onBlur={handleOnBlur}
                        />
                    </div>
                    <div className="form_action">
                        <a href="#">Forgot your password?</a>
                        <button className="btn_regular" type="submit">Sign In</button>
                    </div>
                </form>
                <div className="login_bottom">
                    <div className="new_user">
                        <hr />
                        <p>New user?</p>
                        <hr />
                    </div>
                    <Link style={{ textDecoration: 'none' }} to="/register">
                        <button className="btn_regular">Creact An Account</button>
                    </Link>
                    <button onClick={handleGoogleSignIn} className="btn_regular">Sign In With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;