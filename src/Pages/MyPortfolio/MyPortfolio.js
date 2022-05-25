import React from 'react';
import partho from '../../images/partho.jpg'
const MyPortfolio = () => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={partho} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-left">
                <h2 className="card-title text-xl">Partho malo</h2>
               <p>Email: parthomalo615@gmail.com</p>
                <a href="http://localhost:3000/">link</a>
            </div>
        </div>)
    
};

export default MyPortfolio;