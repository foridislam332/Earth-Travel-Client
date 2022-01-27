import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminNav from '../AdminNav/AdminNav';

const ManageBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`https://fierce-beyond-59562.herokuapp.com/blogs`)
            .then(res => res.json())
            .then(data => setBlogs(data.blogs))
    }, [blogs])

    const handleDeleteBlog = id => {
        const proceed = window.confirm('Are you sure, You want to Delete this Blog?')
        if (proceed) {
            const url = `https://fierce-beyond-59562.herokuapp.com/blogs/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Blogs Delete Successfully')
                    }
                })
        }
    };
    return (
        <div>
            <AdminNav></AdminNav>
            <h2 className="text-5xl font-bold text-medium text-gray-900 text-center my-5 mt-12">Manage Blogs</h2>
            <div className="flex flex-col mx-0 md:mx-15 lg:mx-32 my-20">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr className='bg-cyan-500'>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                        >
                                            <span className='text-lg text-white'>Blogs</span>
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="px-6 py-3 text-left font-medium uppercase tracking-wider text-lg text-white">Action</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {blogs.map((person) => (
                                        <tr className="manage_blog" key={person.email}>
                                            <td className="pl-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-20 w-20 lg:h-32 lg:w-52">
                                                        <img className="h-full w-20 lg:w-52" src={person.placeImg} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-md md:text-2xl lg:text-2xl font-bold text-gray-900">{person.title.slice(0, 18)}</div>
                                                        <div className="text-lg mt-5 text-gray-500">{person.placeLocation.slice(0, 18)}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="pr-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <div className='flex flex-col justify-between'>
                                                    <Link to={`/updateBlog/${person._id}`} className='btn_primary mb-4'>Update</Link>
                                                    <button onClick={() => handleDeleteBlog(person._id)} className='btn_primary mt-4'>Delete</button>
                                                </div>
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

export default ManageBlogs;