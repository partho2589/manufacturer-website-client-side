import React from 'react';
import { useForm } from 'react-hook-form';

const AddAReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        const url = 'https://desolate-ridge-76720.herokuapp.com/review'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })

        console.log(data)
    };
    return (
        <div className='text-center w-50'>
            <h1 className='text-center'>Add Iter </h1>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name'{...register("name", { required: true, })} />
                <textarea className='mb-3' placeholder='Add A Review' {...register("review")} />
                <input className='mb-3' placeholder='Location ' type="text" {...register("location")} />
                <input className='mb-3' placeholder=' Photo URL' type="text" {...register("img")} />
                <input className='bg-primary' value='Add Item' type="submit" />
            </form>
        </div>
    );
};

export default AddAReview;