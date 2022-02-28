import React from 'react';

import HeroCategory from '../../components/HeroCategory';
import FilterCategory from '../../components/FilterCategory';

const Product = () => {
    return (
        <>
            <div className="m-0 flex flex-1 flex-col bg-gray-50">
                <div className="w-full px-7">
                    <HeroCategory />
                    <FilterCategory />
                </div>
            </div>
        </>
    );
};

export default Product;
