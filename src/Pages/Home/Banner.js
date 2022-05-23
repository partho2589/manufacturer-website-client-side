import React from 'react';
import img1 from '../../images/img1.jpg';
import CommonButton from '../Shared/CommonButton';
const Banner = () => {
    return (
    <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={img1} className="max-w-sm rounded-lg shadow-2xl" alt='' />
            <div>
                <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
               <CommonButton>By Now</CommonButton>
            </div>
        </div>
    </div>
    );
};

export default Banner;