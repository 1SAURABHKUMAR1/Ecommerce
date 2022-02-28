import React from 'react';
import Carousel from '../../components/Carousel';
import FeaturedProduct from '../../components/FeaturedProduct';

const Home = () => {
    return (
        <>
            <div className="flex flex-1 flex-col bg-gray-50">
                <div className="w-full px-8 pb-10">
                    <Carousel />
                    <FeaturedProduct />
                </div>
            </div>
        </>
    );
};

export default Home;
