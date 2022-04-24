import { NavLink } from 'react-router-dom';
import BestProductCard from './BestProductCard';

import { useProductProvider } from '../../../Context/ProductList/ProductProvider';

const BestProduct = () => {
    const { productState } = useProductProvider();

    return (
        <>
            <div className="mt-14 sm:mx-14">
                <div className="relative sm:flex sm:justify-between">
                    <h1 className="text-center text-3xl font-semibold tracking-wide text-gray-800 sm:tracking-normal">
                        Featured Products
                    </h1>
                    <NavLink
                        state={{ valid: true }}
                        to="/products"
                        className="hidden rounded bg-indigo-600 px-3 py-1 text-lg font-medium text-white hover:rounded hover:bg-indigo-400 sm:inline-block sm:px-4 sm:py-1.5"
                    >
                        See All
                    </NavLink>
                </div>

                <div className="mt-8">
                    <div className="grid h-auto w-full grid-cols-[repeat(auto-fit,minmax(19rem,_1fr))] gap-y-10 gap-x-8 sm:grid-cols-[repeat(auto-fit,minmax(21rem,_1fr))]">
                        {productState.products.map(
                            (element, index) =>
                                index < 5 && (
                                    <BestProductCard
                                        productImg={
                                            element.photos[2].secure_url
                                        }
                                        productName={element.name}
                                        productPrice={element.price}
                                        productRating={element.rating}
                                        productReview={element.numberOfReviews}
                                        productKey={element._id}
                                        key={element._id}
                                    />
                                ),
                        )}
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <NavLink
                        to="/products"
                        className="inline-block rounded bg-indigo-600 px-4 py-1.5 text-xl font-medium text-white hover:rounded hover:bg-indigo-400 sm:hidden sm:px-4 sm:py-1.5"
                    >
                        See All
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default BestProduct;
