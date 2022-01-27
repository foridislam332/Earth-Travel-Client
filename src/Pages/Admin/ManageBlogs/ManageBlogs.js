import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminNav from '../AdminNav/AdminNav';

const ManageBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/blogs`)
            .then(res => res.json())
            .then(data => setBlogs(data.blogs))
    }, [blogs])

    const handleDeleteBlog = id => {
        const proceed = window.confirm('Are you sure, You want to Delete this Blog?')
        if (proceed) {
            const url = `http://localhost:5000/blogs/${id}`
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
            <div className="flex flex-col mx-32 my-20">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Name
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {blogs.map((person) => (
                                        <tr key={person.email}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-32 w-52">
                                                        <img className="h-full w-52" src={person.placeImg} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-2xl font-bold text-gray-900">{person.title}</div>
                                                        <div className="text-lg mt-5 text-gray-500">{person.placeLocation}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
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