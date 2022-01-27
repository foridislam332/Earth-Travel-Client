import React, { useState } from 'react';
import AdminNav from '../AdminNav/AdminNav';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    // handle make admin
    const handleMakeAdmin = e => {
        const user = { email };

        fetch('https://fierce-beyond-59562.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
        e.preventDefault();
    };
    return (
        <>
            <AdminNav></AdminNav>
            <div className='my-12 py-12 text-center'>
                <h2 className='text-2xl'>MAKE AN ADMIN</h2>

                {/* input form for making admin */}
                <form onSubmit={handleMakeAdmin} className="mt-5">
                    <input
                        placeholder="Enter new admin email"
                        aria-label="Your Email"
                        aria-describedby="basic-addon2"
                        onBlur={handleOnBlur}
                        type="email"
                        className="py-2"
                    />

                    <button className="btn_primary" type="submit">
                        Make Admin
                    </button>
                </form>

                {
                    success && <h2 className='text-lg'>
                        Made Admin Successfully
                    </h2>
                }
            </div>
        </>
    );
};

export default MakeAdmin;