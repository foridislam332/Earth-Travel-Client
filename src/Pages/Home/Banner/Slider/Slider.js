import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';

const Slider = () => {
    return (
        <>
            <Carousel autoPlay interval="2000" infiniteLoop transitionTime="1000">
                <div>
                    <img src="https://i.ibb.co/x2wWJLb/place-1.jpg" />
                    <div className='slider_content text-white sm:w-100'>
                        <h2 className='text-5xl font-bold'>Explore The Nature In <br /> Your Own Way</h2>
                        <p className='text-md font-medium uppercase my-4'>Adventure is For Fveryone, Turn travel into a Lifestyle</p>
                        <button className='btn_primary mt-4'>See Blog</button>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/x2wWJLb/place-1.jpg" />
                    <div className='slider_content text-white sm:w-100'>
                        <h2 className='text-5xl font-bold'>Explore The Nature In <br /> Your Own Way</h2>
                        <p className='text-md font-medium uppercase my-4'>Adventure is For Fveryone, Turn travel into a Lifestyle</p>
                        <button className='btn_primary mt-4'>See Blog</button>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/x2wWJLb/place-1.jpg" />
                    <div className='slider_content text-white sm:w-100'>
                        <h2 className='text-5xl font-bold'>Explore The Nature In <br /> Your Own Way</h2>
                        <p className='text-md font-medium uppercase my-4'>Adventure is For Fveryone, Turn travel into a Lifestyle</p>
                        <button className='btn_primary mt-4'>See Blog</button>
                    </div>
                </div>
            </Carousel>
        </>
    );
};

export default Slider;