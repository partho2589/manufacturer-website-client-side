import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [product, setProduct] = useState([])
    useEffect(()=>{
        fetch('https://desolate-ridge-76720.herokuapp.com/product')
        .then(res=> res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div>
            <h1 className='text-2xl text-center font-bold text-primary'>Tools</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    product.map(product=><Product
                    key={product._id}
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;