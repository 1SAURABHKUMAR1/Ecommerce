import React from 'react';

// all products of category page
import ProductCard from '../components/ProductCard';

const AllProductsCategory = () => {
    return (
        <>
            <div className="my-8 mb-20 md:px-12">
                <div className="grid h-auto w-full grid-cols-[repeat(auto-fit,minmax(19rem,_1fr))] gap-y-10 gap-x-8 sm:grid-cols-[repeat(auto-fit,minmax(21rem,_1fr))]">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </>
    );
};

export default AllProductsCategory;
