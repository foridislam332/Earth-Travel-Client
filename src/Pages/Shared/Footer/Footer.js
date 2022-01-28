import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div className='bg-gray-800 pt-5 pb-5'>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-10 pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="footer_item">
                        <Link to="/">
                            <h2 className='text-4xl font-bold'><span className='text-cyan-500'>Earth</span>Travel</h2>
                            <i class="fab fa-facebook-f"></i>
                        </Link>
                        <p className='mb-5 mt-4 text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore explicabo blanditiis alias, excepturi exercitationem dolore error eveniet ea eos, maiores illum! Vel dolo</p>

                        <div className="subscrib_box">
                            <input type="email" placeholder='Enter your email' />
                            <button className='text-white'>Subscrib</button>
                        </div>
                    </div>

                    <div className="footer_item text-white">
                        <h2 className='text-2xl font-medium mb-4'>Quick Links</h2>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Destinstion</a></li>
                            <li><a href="#">Tour Story</a></li>
                            <li><a href="#">Hotel & Resort</a></li>
                        </ul>
                    </div>

                    <div className="footer_item text-white">
                        <h2 className='text-2xl font-medium mb-4'>Community</h2>
                        <ul>
                            <li><a href="#">Discussion Forums</a></li>
                            <li><a href="#">Code of Conduct</a></li>
                            <li><a href="#">Community Resources</a></li>
                            <li><a href="#">Contributing</a></li>
                        </ul>
                    </div>
                    <div className="footer_item text-white">
                        <h2 className='text-2xl font-medium mb-4'>Contact Information</h2>
                        <div className="contact_box">
                            <p className='mb-3'><span className='text-cyan-500 font-medium'>Location:</span> 1750 kaliakoir, Gazipur <br /> Dhaka, Bangladesh</p>

                            <p><span className='text-cyan-500 font-medium'>Email:</span> earth.travel@earth.com</p>
                            <p><span className='text-cyan-500 font-medium'>Phone:</span> +044 0145 055</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;