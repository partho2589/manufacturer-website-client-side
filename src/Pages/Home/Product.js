import React from 'react'
import { useNavigate } from 'react-router-dom';
const Product = ({ product }) => {
    const { _id, name,img, price,availableQuantity,minimumOrderQuantity,description} = product;
    const navigate = useNavigate()
    const navigateByNow = (_id) => {
        navigate(`product/${_id}`)
    }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
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
                <button onClick={() =>navigateByNow(_id)} class="btn btn-success">By Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;