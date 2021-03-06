import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';

const CreateUserBlog = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const personImg = user.photoURL;
    // handle submit
    const onSubmit = data => {
        axios.post('http://localhost:5000/userBlogs', data)
            .then(res => {
                if (res.newData.insertedId) {
                    alert("Blog Added Successful!!");
                    reset();
                }
            })
    };
    return (
        <>
            <Navigation></Navigation>
            <div className='add_blog_container w-11/12 md:w-4/5 lg:w-3/5'>
                <div >
                    <div className="login_title mb-5">
                        <h3 className='text-2xl'>Write Your New Blog Articles</h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='m-auto'>
                        <label htmlFor="title">Title <span>*</span></label>
                        <input placeholder='Enter Title' id="title" {...register("title", { required: true })} />

                        <label htmlFor="traveler">Traveler Name <span>*</span></label>
                        <input placeholder='Enter Traveler Name' id="traveler" {...register("name", { required: true })} />

                        <label htmlFor="location">Location <span>*</span></label>
                        <input placeholder='Enter Spots Location' id="location" {...register("placeLocation", { required: true })} />

                        <label htmlFor="traveler_img">Traveler Image Link <span>*</span></label>
                        <input placeholder='Paste Traveler image link' defaultValue={personImg || ""} id="traveler_img" {...register("personImg", { required: true })} />

                        <label htmlFor="img_link">Image Link <span>*</span></label>
                        <input placeholder='Paste your Place image link' id="img_link" {...register("placeImg", { required: true })} />

                        <label htmlFor="blog_details">Experience Description <span>*</span></label>
                        <textarea style={{ height: '100px', border: '1px solid #00000021', marginBottom: '12px' }} className="w-100 pt-2 ps-2" placeholder="Enter your blog description" id="blog_details" {...register("description", { required: true })} />

                        <div className='flex justify-between'>
                            <div className='w-full mr-1'>
                                <label htmlFor="cost">Cost Price <span>*</span></label>
                                <input type="number" id="cost" placeholder='Enter Cost Price' {...register("cost", { required: true })} />
                            </div>

                            <div className='w-full ml-1'>
                                <label htmlFor="category">Category <span>*</span></label>
                                <input id="category" placeholder='Enter Category' {...register("category", { required: true })} />
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className='w-full mr-1'>
                                <label htmlFor="rating">Rating <span>*</span></label>
                                <input id="rating" placeholder='Enter Rating' {...register("rating", { required: true })} />
                            </div>

                            <div className='w-full ml-1'>
                                <label htmlFor="rating_count">Rating Count <span>*</span></label>
                                <input type="number" id="rating_count" placeholder='Enter Rating Count' {...register("ratingCount", { required: true })} />
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className='w-full mr-1'>
                                <label htmlFor="date">Date <span>*</span></label>
                                <input id='date' defaultValue={new Date().toISOString().substring(0, 10)} {...register("date", { required: true })} />
                            </div>

                            <div className='w-full ml-1'>
                                <label htmlFor="time">Time <span>*</span></label>
                                <input id='time' placeholder='12:00PM' defaultValue="12:00PM" {...register("time", { required: true })} />
                            </div>
                        </div>

                        <button type="submit" className="btn_primary w-100">
                            Post Your Blogs
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateUserBlog;