import React from 'react';
import partho from '../../images/partho.jpg'
const MyPortfolio = () => {
    return (
        <div className='flex justify-center'>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={partho} alt="Shoes" className="rounded-xl" />
                </figure>

                <div className="card-body items-start text-left">
                    <h2 className="card-title text-xl">Partho malo</h2>
                    <p>Email: parthomalo615@gmail.com</p>
                    <h4>I am passing HSC in 2021 from Madaripur Technical School and College</h4>
                    <h1 className='text-2xl text-primary '>My Project live website links</h1>
                    <a className='text-sm text-blue-600' href="https://pure-fruits-werehouse.web.app/">1. Pure-Fruits-Warehouse</a>
                    <a className='text-sm text-blue-600' href="https://route-firebase-assignment-10.web.app/">2. Home and Gym Workout Trainer</a>
                    <a className='text-sm text-blue-600' href="https://luxury-monstera-19ba33.netlify.app/home">3. Lenovo Laptop Sell Website</a>
                </div>
                <div class=" bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">These are the technologies I know as a web developer.</h2>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JAVA Script </p>
                        <p>Node js</p>
                        <p>Mongodb</p>
                        <p>Firebase</p>
                        <p>React</p>
                        <p>Tailwind css</p>
                        <p>Bootstrap</p>
                        
                    </div>
                </div>
            </div>

        </div>

    )
};

export default MyPortfolio;