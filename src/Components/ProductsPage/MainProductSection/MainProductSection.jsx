import { useState, useEffect } from 'react';

import ProductCard from './ProductCard/ProductCard';
import { useFilterProvider } from '../../../Context/Filter/FilterProvider';
import { useProductProvider } from '../../../Context/ProductList/ProductProvider';
import finalFilteredData from '../../../Utils/finalFilteredData';

const MainProductSection = () => {
    const { filterState } = useFilterProvider();
    const { productState } = useProductProvider();

    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setFilteredData(finalFilteredData(productState.products, filterState));
    }, [filterState, productState.products]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [filterState]);

    return (
        <>
            {filteredData.length === 0 ? (
                <div className="my-4 flex w-full flex-1 flex-col items-center bg-gray-50 py-4">
                    <h1 className="mb-5 text-center text-3xl  font-bold tracking-wide text-gray-700">
                        No Product Found
                    </h1>
                </div>
            ) : (
                <div className="grid  h-max w-full grid-cols-[repeat(auto-fit,minmax(17rem,_1fr))] gap-y-6 gap-x-6 px-3">
                    {filteredData.map((item) => {
                        return (
                            <ProductCard
                                productName={item.name}
                                productPrice={item.price}
                                productImg={item.photos[2].secure_url}
                                productRating={item.rating}
                                productReview={item.numberOfReviews}
                                productKey={item._id}
                                key={item._id}
                            />
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default MainProductSection;
