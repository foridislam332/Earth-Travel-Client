import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCalendarAlt, faStar } from '@fortawesome/free-solid-svg-icons'
import './Experiences.css';


const Experiences = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    const products = [
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        // More products...
    ]

    return (
        <>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-5xl font-bold text-medium text-gray-900">Travelers Experiences</h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-8 gap-x-6 
                    xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 drop-shadow-lg">
                        {places.map((item) => (
                            <div key={item.id} className="group relative p-4 drop-shadow-lg">
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img
                                        src={item.placeImg}
                                        alt={item.placeLocation}
                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    />
                                </div>

                                {/* Date */}
                                <div className='card_date flex justify-start items-center mt-2'>
                                    <FontAwesomeIcon className='text-cyan-500' icon={faCalendarAlt} />
                                    <p className='text-red-600 ml-2'>
                                        <span>{item.date}</span>
                                        -
                                        <span>{item.time}</span>
                                    </p>
                                </div>

                                {/* location and rating */}
                                <div className='flex justify-start items-center my-3'>
                                    <div className='flex justify-start items-center'>
                                        <FontAwesomeIcon className='text-yellow-500' icon={faStar} />
                                        <span className='mx-1'>{item.rating}</span>
                                        <span className='text-gray-500'>({item.ratingCount})</span>
                                    </div>
                                    <div className='flex justify-start items-center ml-4'>
                                        <FontAwesomeIcon className='text-cyan-500' icon={faMapMarkerAlt} />

                                        <h3 className="text-lg text-gray-700 ml-2">
                                            {item.placeLocation}
                                        </h3>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex justify-start items-center my-3 mt-5'>
                                        <img className='w-12 rounded-full' src={item.personImg} alt={item.name} />
                                        <h3 className='text-2xl font-medium ml-3'><span className='text-lg font-light italic'>By</span> {item.name}</h3>
                                    </div>
                                    <div className='text-center my-4 mt-10'>
                                        <a className='btn_primary' href="#">Read More ...</a>
                                        {/* Reviews */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experiences;