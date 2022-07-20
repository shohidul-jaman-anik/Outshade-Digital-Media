import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdateUser = () => {
    
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { id } = useParams()
console.log(id)

    const onSubmit = async data => {
        fetch(`http://localhost:5000/allUser/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                reset()
                toast('Update Successfully done')
            })
    }

    return (
        <div>
            <p>User Id : {id}</p>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name")}
                    />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email")}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Phone"
                        className="input input-bordered w-full max-w-xs"
                        {...register("phone")}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price")}
                    />
                </div>


                <input className='btn w-full max-w-xs text-white' type="submit" value="Edit User" />
            </form>
        </div>
    );
};

export default UpdateUser;