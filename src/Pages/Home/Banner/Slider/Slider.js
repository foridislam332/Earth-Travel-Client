import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <>
            <Carousel autoPlay interval="2000" infiniteLoop transitionTime="1000">
                <div>
                    <img src="https://i.ibb.co/x2wWJLb/place-1.jpg" />
                    <div className='slider_content text-white w-4/5 md:w-2/3 lg:w-1/2'>
                        <h2 className='text-lg md:text-4xl lg:text-5xl font-bold lg:pt-12'>Explore The Nature In <br /> Your Own Way</h2>
                        <p className='text-xs md:text-lg font-medium uppercase my-2 md:my-4'>Adventure is For Fveryone, Turn travel into a Lifestyle</p>
                        <Link to="/blogs">
                            <button className='btn_primary py-2 mt-2 lg:mb-12'>See Blog</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/x2wWJLb/place-1.jpg" />
                    <div className='slider_content text-white w-4/5 md:w-2/3 lg:w-1/2'>
                        <h2 className='text-lg md:text-4xl lg:text-5xl font-bold lg:pt-12'>Explore The Nature In <br /> Your Own Way</h2>
                        <p className='text-xs md:text-lg font-medium uppercase my-2 md:my-4'>Adventure is For Fveryone, Turn travel into a Lifestyle</p>
                        <Link to="/blogs">
                            <button className='btn_primary py-2 mt-2 lg:mb-12'>See Blog</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/x2wWJLb/place-1.jpg" />
                    <div className='slider_content text-white w-4/5 md:w-2/3 lg:w-1/2'>
                        <h2 className='text-lg md:text-4xl lg:text-5xl font-bold lg:pt-12'>Explore The Nature In <br /> Your Own Way</h2>
                        <p className='text-xs md:text-lg font-medium uppercase my-2 md:my-4'>Adventure is For Fveryone, Turn travel into a Lifestyle</p>
                        <Link to="/blogs">
                            <button className='btn_primary py-2 mt-2 lg:mb-12'>See Blog</button>
                        </Link>
                    </div>
                </div>
            </Carousel>
        </>
    );
};

export default Slider;