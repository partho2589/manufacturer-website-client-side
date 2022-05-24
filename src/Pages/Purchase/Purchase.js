import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Purchase = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const { _id, name, img, price, availableQuantity,description, minimumOrderQuantity, supplier } = product;
    return (
        <div >
            <div className=' row w-50 mx-auto '>
                <img height={200} className='img-fluid mb-3 ' src={img} alt="" />
                <h3>Name: {name}</h3>
                <h4>Supplier: {supplier}</h4>
                <h5>Price: ${price}</h5>
                <h1>{_id}</h1>
                <p>{description}</p>
                <p> <span>Available Quantity: {availableQuantity}</span></p>
                <p><small>Minimum Order Quantity: {minimumOrderQuantity}</small></p>
                <button className='from-btn'>Delivered</button>
            </div>
            <div className=' mt-5 d-flex align-items-center justify-content-center'>
                <Link className='manage-link ' to='/manage'> Manage Item</Link>
            </div>
        </div>
    );
};

export default Purchase;