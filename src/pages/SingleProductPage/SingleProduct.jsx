import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import ProductDetail from '../../Components/SingleProductPage/ProductDetail';
import ProductImage from '../../Components/SingleProductPage/ProductImage';
import ProductNotFound from '../../Components/SingleProductPage/ProductNotFound';

import useScrollToTop from '../../Hooks/useScrollToTop';

const Product = () => {
    const location = useLocation();
    const { productId } = useParams();
    const [isValidPage, setIsValidPage] = useState(
        location.state?.isValid ?? false,
    );
    const [productResponse, setProductResponse] = useState({ product: false });

    useScrollToTop();

    const responsePage = async () => {
        try {
            const { data } = await axios.get(
                `${process.env.REACT_APP_API_URL}/products/${productId}`,
            );
            setProductResponse(data.product);
            setIsValidPage(true);
        } catch (error) {
            setIsValidPage(false);
        }
    };

    useEffect(() => {
        responsePage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="m-0 flex flex-1 flex-col justify-center bg-gray-50">
                <main className="my-8">
                    <div className="container mx-auto max-w-[40rem] px-2 sm:px-6 lg:max-w-screen-lg">
                        {isValidPage ? (
                            <div className="px-4 lg:flex lg:items-center lg:gap-x-4 lg:px-0">
                                <ProductImage props={{ ...productResponse }} />
                                <ProductDetail props={{ ...productResponse }} />
                            </div>
                        ) : (
                            <ProductNotFound />
                        )}
                    </div>
                </main>
            </div>
        </>
    );
};

export default Product;
