import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCalendarAlt, faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './Blogs.css';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(0);
    const [count, setCount] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size = 10;
    useEffect(() => {
        fetch(`https://fierce-beyond-59562.herokuapp.com/blogs?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data.blogs)
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setCount(count)
                setPageCount(pageNumber)
            })
    }, [page])
    return (
        <>
            <div className="bg-white blogs_container">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-2">
                    <h2 className="text-5xl font-bold text-medium text-gray-900 text-center mb-12 pb-5">Our Blogs</h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-2 gap-x-1 
                    xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 xl:gap-x-2 drop-shadow-lg">
                        {blogs.map((item) => (
                            <div key={item.id} className="group relative p-4 drop-shadow-lg">
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img
                                        src={item.placeImg}
                                        alt={item.placeLocation}
                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    />
                                </div>

                                {/* location and rating */}
                                <div className='flex justify-between items-center mt-2'>
                                    <div className='flex justify-start items-center'>
                                        <FontAwesomeIcon className='text-cyan-500' icon={faMapMarkerAlt} />

                                        <h3 className="text-lg text-gray-700 ml-2">
                                            {item.placeLocation}
                                        </h3>
                                    </div>
                                    <div>
                                        <span className='text-lg font-bold text-red-600'>$ {item.cost}</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }} className='text-2xl font-medium mb-3'><span className='text-lg font-light italic'></span> {item.title}</h3>
                                    <p className='text-lg text-gray-700'>{item.description.slice(0, 50)}...</p>
                                    <div className='text-center mt-8'>
                                        <Link className='btn_primary ' to={`/singleBlog/${item._id}`}>Read More ...</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* pagination */}
                    <div className='pagination mt-3'>
                        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                            <div className="flex-1 flex justify-between sm:hidden">
                                <span
                                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                >
                                    Previous
                                </span>
                                <span
                                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                >
                                    Next
                                </span>
                            </div>
                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm text-gray-700">
                                        Showing <span className="font-medium">1</span> to <span className="font-medium">{size}</span> of{' '}
                                        <span className="font-medium">{count}</span> results
                                    </p>
                                </div>
                                <div>
                                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                        <span
                                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                        >
                                            <span className="sr-only">Previous</span>
                                            <FontAwesomeIcon className='h-5 w-5' icon={faChevronLeft} />
                                        </span>
                                        {
                                            [...Array(pageCount).keys()]
                                                .map(number => <button
                                                    className={number === page ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'}
                                                    key={number}
                                                    onClick={() => setPage(number)}
                                                >{number + 1}</button>)
                                        }
                                        <span
                                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                        >
                                            <span className="sr-only">Next</span>
                                            <FontAwesomeIcon className='h-5 w-5' icon={faChevronRight} />
                                        </span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;