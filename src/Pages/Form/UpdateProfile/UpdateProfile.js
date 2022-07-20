import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';


const UpdateProfile = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user, loading] = useAuthState(auth);
    const onSubmit = async data => {

        fetch(`http://localhost:5000/form?email:${data.email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log("result", result))
    }

    return (
        <div>
            <h1 className='text-center text-3xl'>Update Your Profile</h1>
            <div className="flex justify-center items-center mt-10">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="lg:ml-16 form-control border-0 ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="input input-bordered input-primary w-full max-w-xs "
                            // {...register("firstName", { required: true })}
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                },

                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="lg:ml-16 form-control border-0 ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            value={user?.email}
                            readOnly
                            placeholder="Enter your e-mail"
                            className="input input-bordered input-primary w-full max-w-xs "
                            // {...register("firstName", { required: true })}
                            {...register("email")}
                        />
                    </div>

                    <div className="lg:ml-16 form-control  border-0">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered input-primary w-full max-w-xs"
                            // {...register("firstName", { required: true })}
                            {...register("password", {
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>

                    <input type="submit" className='lg:ml-20 form-button ml-3' value="Update Profile" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;