import React from 'react';
import { useForm } from 'react-hook-form';
import AdminNav from '../AdminNav/AdminNav';
import './AddBlog.css';

const AddBlog = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // handle submit
    const onSubmit = data => {
        console.log(data)
        // axios.post('https://safe-coast-68587.herokuapp.com/blog', data)
        //     .then(res => {
        //         if (res.data.insertedId) {
        //             alert("Blog Added Successful!!");
        //             reset();
        //         }
        //     })
    };
    return (
        <>
            <AdminNav></AdminNav>
            <div className='add_blog_container'>
                <div >
                    <div className="login_title mb-5">
                        <h3>Write Your New Blogs</h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='m-auto'>
                        <label htmlFor="traveler">Traveler Name <span>*</span></label>
                        <input placeholder='Enter Traveler Name' id="traveler" {...register("name", { required: true })} />

                        <label htmlFor="location">Location <span>*</span></label>
                        <input placeholder='Enter Spots Location' id="location" {...register("placeLocation", { required: true })} />

                        <label htmlFor="img_link">Image Link <span>*</span></label>
                        <input placeholder='Paste your Place image link' id="img_link" {...register("placeImg", { required: true })} />

                        <label htmlFor="blog_details">Blog Description <span>*</span></label>
                        <textarea style={{ height: '100px', border: '1px solid #00000021', marginBottom: '12px' }} className="w-100 pt-2 ps-2" placeholder="Enter your blog description" id="blog_details" {...register("description", { required: true })} />

                        <label htmlFor="rating">Rating <span>*</span></label>
                        <input type="number" id="rating" placeholder='Enter Rating' {...register("rating", { required: true })} />

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

export default AddBlog;