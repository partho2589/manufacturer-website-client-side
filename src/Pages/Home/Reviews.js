import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [review, setReview] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=> res.json())
        .then(data => setReview(data))
    },[])
    return (
        <div>
            <h1 className='text-2xl text-center font-bold text-primary mt-7'>Customer reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    review.map(review =><Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;