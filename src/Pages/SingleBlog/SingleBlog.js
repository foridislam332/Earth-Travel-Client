import React, { useEffect, useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCalendarAlt, faStar } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const { blogId } = useParams();
    const url = `http://localhost:5000/blogs/${blogId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [blogId])
    const { name, personImg, placeImg, placeLocation, date, time, rating, ratingCount, description } = blogs;
    return (
        <>
            <Navigation></Navigation>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-15 sm:px-6 lg:max-w-7xl lg:px-5">
                    <h2 className="text-5xl font-bold text-medium text-gray-900 text-center mb-12">Traveler Experiences Details</h2>
                    <div className='mt-6 grid grid-cols-1 gap-y-8 gap-x-6 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 drop-shadow-lg'>
                        <div className="group relative p-4 drop-shadow-lg">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src={placeImg}
                                    alt={placeLocation}
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                        </div>

                        <div>
                            {/* Date */}
                            <div className='card_date flex justify-start items-center mt-2'>
                                <FontAwesomeIcon className='text-cyan-500' icon={faCalendarAlt} />
                                <p className='text-red-600 ml-2'>
                                    <span>{date}</span>
                                    -
                                    <span>{time}</span>
                                </p>
                            </div>

                            {/* location and rating */}
                            <div className='flex justify-start items-center my-3'>
                                <div className='flex justify-start items-center'>
                                    <FontAwesomeIcon className='text-yellow-500' icon={faStar} />
                                    <span className='mx-1'>{rating}</span>
                                    <span className='text-gray-500'>({ratingCount})</span>
                                </div>
                                <div className='flex justify-start items-center ml-4'>
                                    <FontAwesomeIcon className='text-cyan-500' icon={faMapMarkerAlt} />

                                    <h3 className="text-lg text-gray-700 ml-2">
                                        {placeLocation}
                                    </h3>
                                </div>
                            </div>

                            <div className='flex justify-start items-center my-3 mt-5'>
                                <img className='w-12 rounded-full' src={personImg} alt={name} />
                                <h3 className='text-2xl font-medium ml-3'><span className='text-lg font-light italic'>By</span> {name}</h3>
                            </div>

                            <p className='text-lg text-gray-700'>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog;