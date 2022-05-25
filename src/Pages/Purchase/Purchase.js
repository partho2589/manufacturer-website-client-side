import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { purchaseID } = useParams()
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${purchaseID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const { name,img, price,availableQuantity,minimumOrderQuantity,description} =product
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-start text-left">
            <h2 className="card-title text-xl">{name}</h2>
            <p><span>Price: ${price}</span></p>
            <p><span>Available Quantity: {availableQuantity}</span></p>
            <p><span>Minimum Order Quantity: {minimumOrderQuantity}</span></p>
            <p className='text-sm'>{description}</p>
            <div className="card-actions">
            <button className="btn btn-success">By Now</button>
            </div>
        </div>
    </div>
    );
};

export default Purchase;