import React from 'react';

import ProductCard from '../components/ProductCard';

const FeaturedProduct = () => {
    return (
        <>
            <div className="mt-14 sm:mx-14">
                <div className="relative sm:flex sm:justify-between">
                    <h1 className="text-center text-3xl font-semibold tracking-wide text-gray-800 sm:tracking-normal">
                        Featured Products
                    </h1>
                    <a
                        href="/category"
                        className="hidden rounded bg-indigo-600 px-3 py-1 text-lg font-medium text-white hover:rounded hover:bg-indigo-400 sm:inline-block sm:px-4 sm:py-1.5"
                    >
                        See All
                    </a>
                </div>

                <div className="mt-8">
                    <div className="grid h-auto w-full grid-cols-[repeat(auto-fit,minmax(19rem,_1fr))] gap-y-10 gap-x-8 sm:grid-cols-[repeat(auto-fit,minmax(21rem,_1fr))]">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <a
                        href="/category"
                        className="inline-block rounded bg-indigo-600 px-4 py-2.5 text-xl font-medium text-white hover:rounded hover:bg-indigo-400 sm:hidden sm:px-4 sm:py-1.5"
                    >
                        See All
                    </a>
                </div>
            </div>
        </>
    );
};

export default FeaturedProduct;
