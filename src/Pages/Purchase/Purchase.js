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
    const handleBooking = () => {

    };

    return (
        <div>
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

            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                <input type="number" name="quantity" placeholder="Order Quantity" className="input input-bordered w-full max-w-xs" />
                <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default Purchase;