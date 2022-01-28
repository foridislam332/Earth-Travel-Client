import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminNav from '../AdminNav/AdminNav';

const AdminPannel = () => {
    const [userBlogs, setUserBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/userBlogs')
            .then(res => res.json())
            .then(data => setUserBlogs(data))
    }, [])

    const handlePostBlog = data => {
        axios.post('http://localhost:5000/blogs', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Blog Added Successful!!");
                }
            })
    };
    return (
        <div>
            <AdminNav></AdminNav>
            <div className="flex flex-col mx-0 md:mx-15 lg:mx-32 my-20">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr className='bg-cyan-500'>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            <span className='text-lg text-white'>Name</span>
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            <span className='text-lg text-white'>Status</span>
                                        </th>
                                        <th scope="col" className="relative pr-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {userBlogs.map((blog) => (
                                        <tr key={blog._id}>
                                            <td className="pl-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full" src={blog.placeImg} alt="" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                                                        <div className="text-sm text-gray-500">{blog.placeLocation}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    Pending
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button onClick={() => handlePostBlog(blog)} className="text-indigo-600 hover:text-indigo-900">
                                                    Post This
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPannel;