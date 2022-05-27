import React from 'react';
import img from '../../images/eng.jpg'
const Engineer = () => {
    return (
        <div>
            <h3 className='text-2xl mt-7 font-bold text-center text-primary'>Engineer</h3>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={img} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">Name: Sirajul Islam</h1>
                        <p class="py-6">Sirajul Islam is an engineer. His job is to check the quality of all the products.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Engineer;