import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { purchaseID } = useParams();
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://desolate-ridge-76720.herokuapp.com/product/${purchaseID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const {_id, name, img, price, availableQuantity, minimumOrderQuantity, description } = product;

    const handleBooking = (event) => {
        event.preventDefault();
        const Order = {
            productId:_id,
            pName:name,
            pImg:img,
            pPrice:price,
            description:description,
            availableQ:availableQuantity,
            minimumQ:minimumOrderQuantity,
            customerName:user.displayName,
            customerEmail:user.email,
            quantity: event.target.quantity.value,
            phone:event.target.phone.value
        }
        fetch('https://desolate-ridge-76720.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged === true){
                toast.success('Success your order')
            }else{
                toast.error('Sorry, Your order is not success. ')
            }
            console.log(data)
        })
    };

    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-6'>
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

            <div>
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                    <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                    <input type="number" name="quantity" placeholder="Order Quantity" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                </form>
            </div>

        </div>
    );
};

export default Purchase;