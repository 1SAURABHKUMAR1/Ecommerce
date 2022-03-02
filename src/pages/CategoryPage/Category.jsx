import React from 'react';

import HeroCategory from '../../components/HeroCategory';
import FilterCategory from '../../components/FilterCategory';
import AllProductsCategory from '../../components/AllProductsCategory';

const Product = () => {
    return (
        <>
            <div className="m-0 flex flex-1 flex-col bg-gray-50">
                <div className="w-full px-7">
                    <HeroCategory />
                    <FilterCategory />
                    <AllProductsCategory />
                </div>
            </div>
        </>
    );
};

export default Product;
