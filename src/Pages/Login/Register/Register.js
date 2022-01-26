import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Register.css';
import useAuth from '../../../Hooks/useAuth';

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
        <div className="register_continer">
            <div className="register_box">
                <div className="box_title">
                    <h1>Register</h1>
                </div>
                <form onSubmit={handleOnSubmit}>
                    <div>
                        <input
                            className="input_field"
                            label="Your Full Name"
                            variant="standard"
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                        />
                    </div>
                    <div>
                        <input
                            className="input_field"
                            label="Enter your email"
                            variant="standard"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                        />
                    </div>
                    <div>
                        <input
                            className="input_field"
                            label="Password"
                            variant="standard"
                            name="password"
                            type="password"
                            onBlur={handleOnBlur}
                        />
                    </div>
                    <h2 variant="body2">Passwords must be at least 6 characters.</h2>
                    <div>
                        <input
                            className="input_field"
                            label="Confirm Password"
                            variant="standard"
                            name="password2"
                            type="password"
                            onBlur={handleOnBlur}
                        />
                    </div>
                    <button className="btn_regular" type="submit">Create Your Account</button>
                </form>
                <div className="login_bottom">
                    <p sx={{ textAlign: 'center', mt: 3, mb: 1 }} variant="body1">Already have an account?</p>
                    <Link style={{ textDecoration: 'none' }} to="/login">
                        <button className="btn_regular">Sign In</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;