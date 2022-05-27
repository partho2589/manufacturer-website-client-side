import React from 'react';
import worker from '../../images/fac.jpg'
import worker2 from '../../images/fac2.jpg'
import worker3 from '../../images/fac3.webp'
const Workers = () => {
    return (
        <div>
            <h2 className='text-2xl mt-7 font-bold text-center text-primary'>Workers</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div class="card card-compact  bg-base-100 shadow-xl">
                <figure><img  src={worker} alt="Shoes" /></figure>
                
            </div>
            <div class="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={worker2} alt="Shoes" /></figure>
                
            </div>
            <div class="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={worker3} alt="Shoes" /></figure>
                
            </div>
            </div>
        </div>
    );
};

export default Workers;