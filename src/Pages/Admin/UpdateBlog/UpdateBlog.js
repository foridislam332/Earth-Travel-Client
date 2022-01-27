import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AdminNav from '../AdminNav/AdminNav';

const UpdateBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const { updateId } = useParams();
    const url = `https://fierce-beyond-59562.herokuapp.com/blogs/${updateId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [updateId])
    const { title, name, cost, category, personImg, placeImg, placeLocation, date, time, rating, ratingCount, description } = blogs;

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // handle submit
    const onSubmit = data => {
        const url = `https://fierce-beyond-59562.herokuapp.com/blogs/${updateId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Blogs Updated Successfully')
                }
            })
    };
    return (
        <div>
            <AdminNav></AdminNav>
            <div className='add_blog_container'>
                <div >
                    <div className="login_title mb-5">
                        <h3 className='text-2xl'>Update Your Blog</h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='m-auto'>
                        <label htmlFor="title">Title <span>*</span></label>
                        <input placeholder='Enter Title' defaultValue={title || ""} id="title" {...register("title", { required: true })} />

                        <label htmlFor="traveler">Traveler Name <span>*</span></label>
                        <input placeholder='Enter Traveler Name' defaultValue={name || ""} id="traveler" {...register("name", { required: true })} />

                        <label htmlFor="location">Location <span>*</span></label>
                        <input placeholder='Enter Spots Location' defaultValue={placeLocation || ""} id="location" {...register("placeLocation", { required: true })} />

                        <label htmlFor="traveler_img">Traveler Image Link <span>*</span></label>
                        <input placeholder='Paste Traveler image link' defaultValue={personImg || ""} id="traveler_img" {...register("personImg", { required: true })} />

                        <label htmlFor="img_link">Travel Image Link <span>*</span></label>
                        <input type="text" placeholder='Paste your Travel image link' defaultValue={placeImg || ""} id="img_link" {...register("placeImg", { required: true })} />

                        <label htmlFor="blog_details">Experience Description <span>*</span></label>
                        <textarea style={{ height: '100px', border: '1px solid #00000021', marginBottom: '12px' }} className="w-100 pt-2 ps-2" placeholder="Enter your blog description" defaultValue={description || ""} id="blog_details" {...register("description", { required: true })} />

                        <div className='flex justify-between'>
                            <div className='w-full mr-1'>
                                <label htmlFor="cost">Cost Price <span>*</span></label>
                                <input type="number" defaultValue={cost || ""} id="cost" placeholder='Enter Cost Price' {...register("cost", { required: true })} />
                            </div>

                            <div className='w-full ml-1'>
                                <label htmlFor="category">Category <span>*</span></label>
                                <input placeholder='Enter Category' defaultValue={category || ""} id="category" {...register("category", { required: true })} />
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className='w-full mr-1'>
                                <label htmlFor="rating">Rating <span>*</span></label>
                                <input type="text" defaultValue={rating || ""} id="rating" placeholder='Enter Rating' {...register("rating", { required: true })} />
                            </div>

                            <div className='w-full ml-1'>
                                <label htmlFor="rating_count">Rating Count <span>*</span></label>
                                <input type="number" defaultValue={ratingCount || ""} id="rating_count" placeholder='Enter Rating Count' {...register("ratingCount", { required: true })} />
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className='w-full mr-1'>
                                <label htmlFor="date">Date <span>*</span></label>
                                <input id='date' defaultValue={date || ""} {...register("date", { required: true })} />
                            </div>

                            <div className='w-full ml-1'>
                                <label htmlFor="time">Time <span>*</span></label>
                                <input id='time' placeholder='12:00PM' defaultValue={time || ""} {...register("time", { required: true })} />
                            </div>
                        </div>

                        <button type="submit" className="btn_primary w-100">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBlog;