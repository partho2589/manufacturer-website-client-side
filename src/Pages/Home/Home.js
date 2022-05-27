import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Engineer from './Engineer';
import Products from './Products';
import Reviews from './Reviews';
import Workers from './Workers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Engineer></Engineer>
            <Workers/>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;