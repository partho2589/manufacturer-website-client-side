import React from 'react';
import img from '../../images/banner.png'
import CommonButton from '../Shared/CommonButton';
const Banner = () => {
    return (
        <div className="carousel w-full">
            <img src={img} alt="" />
               
        </div>
    );
};

export default Banner;