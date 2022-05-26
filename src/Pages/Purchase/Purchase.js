import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { purchaseID } = useParams();
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${purchaseID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const { name, img, price, availableQuantity, minimumOrderQuantity, description } = product;
  
    return (
        <div>
            <div className='mt-5'>
                <h4 className='text-2xl text-center'>User Name: {user.displayName}</h4>
                <h4 className='text-2xl text-center'>User Email: {user.email}</h4>
            </div>
            <div className='flex justify-center '>
                <div className="card  lg:max-w-lg bg-base-100 shadow-xl ">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-start text-left">
                        <h2 className="card-title text-xl">{name}</h2>
                        <p><span>Price: ${price}</span></p>
                        <p><span>Available Quantity: {availableQuantity}</span></p>
                        <p><span>Minimum Order Quantity: {minimumOrderQuantity}</span></p>
                        <p className='text-sm'>{description}</p>
        
                    </div>
                </div>

            </div>
            <div className='flex justify-center mt-5 mb-7'>
                <div class="form-control w-full max-w-xs flex justify-center">
                    <label class="label ">
                        <span class="label-text text-2xl text-primary">Product Quantity</span>
                    </label>
                    <input type="number" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
            </div>
        </div>
    );
};

export default Purchase;