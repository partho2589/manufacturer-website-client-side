import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1 className='text-3xl text-center font-bold text-primary mt-6'> My Profile</h1>
            <h3>Name: {user.displayName}</h3>
            <h3>Email: {user.email}</h3>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <input className='mb-3' placeholder=' Education'{...register(" education", { required: true, })} />
                <input className='mb-3' placeholder='Location ' type="text" {...register("location")} />
                <input className='mb-3' placeholder=' Phone number' type="number" {...register(" phoneNumber")} />

                <input className='bg-primary' value='upDate' type="" />

            </form>
        </div>
    );
};

export default MyProfile;