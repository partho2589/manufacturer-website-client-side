import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddAProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        const url = 'https://desolate-ridge-76720.herokuapp.com/product'
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
                if(result.acknowledged){
                    toast.success('Success Add You Product')
                }
            });
    };
    return (
        <div className='text-center w-50'>
            <h1 className='text-center text-xl font-bold text-primary'>Add A Product </h1>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name'{...register("name", { required: true, })} />
                <textarea className='mb-3' placeholder='Description' {...register("description")} />
                <input className='mb-3' placeholder='Price ' type="number" {...register("price")} />
                <input className='mb-3' placeholder=' Photo URL' type="text" {...register("img")} />
                <input className='mb-3' placeholder='Available Quantity' type="number" {...register("availableQuantity")} />
                <input className='mb-3' placeholder='Minimum Order Quantity' type="number" {...register("minimumOrderQuantity")} />

                <input className='bg-primary' value='Add A Review' type="submit" />

            </form>
        </div>
    );
};

export default AddAProduct;