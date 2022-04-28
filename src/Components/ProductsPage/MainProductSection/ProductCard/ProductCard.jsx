import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { useCartProvider } from '../../../../Context/Cart/CartProvider';
import { useAuthProvider } from '../../../../Context/Auth/AuthProvider';

import axios from 'axios';

import ErrorToast from '../../../../Toast/ErrorToast';

import LoaderButton from '../../../UI/Loader/LoaderButton';

const ProductCard = ({
    productName,
    productPrice,
    productImg,
    productRating,
    productReview,
    productKey,
}) => {
    const [buttonText, setButtonText] = useState('Add To Cart');
    const {
        cartState: { cartItems },
        cartDispatch,
    } = useCartProvider();
    const { userAuth } = useAuthProvider();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const addToCart = async () => {
        try {
            loadingHandler();

            const responseData = await axios.post(
                `${process.env.REACT_APP_API_URL}/user/cart`,
                {
                    cartItems: [
                        {
                            name: productName,
                            quantity: 1,
                            image: productImg,
                            price: productPrice,
                            productId: productKey,
                        },
                    ],
                },
                {
                    headers: {
                        Authorization: `Bearer ${userAuth.token}`,
                    },
                },
            );

            cartDispatch({
                type: 'UPDATE_CART_FROM_SERVER',
                payload: responseData.data.cart?.cartItems,
            });
        } catch (error) {
            ErrorToast('Something went wrong');
            console.log(error);
        }
    };

    const navigateToCart = () => {
        navigate('/cart');
    };

    const addProduct = () => {
        if (userAuth.login) {
            buttonText === 'Add To Cart' ? addToCart() : navigateToCart();
        } else {
            navigate('/login');
        }
    };

    const loadingHandler = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1200);
    };

    useEffect(() => {
        if (
            cartItems?.findIndex(
                (element) => element.productId === productKey,
            ) !== -1
        ) {
            setButtonText('Buy Now');
        }
    }, [cartItems]);

    return (
        <>
            <div className="m-auto">
                <div className="relative max-h-[21rem] w-full max-w-[19rem] overflow-hidden rounded bg-white text-gray-900 shadow">
                    <div className="relative h-[60%] overflow-hidden bg-gray-100">
                        <img
                            src={productImg}
                            alt="product"
                            loading="lazy"
                            className="h-full w-full object-cover object-center duration-200 ease-in-out hover:scale-105"
                        />
                    </div>
                    <div className="py-4 px-6">
                        <Link
                            to={`/products/${productKey}`}
                            state={{ isValid: true }}
                        >
                            <h1 className="cursor-pointer text-lg font-medium">
                                {productName}
                            </h1>
                            <div className="flex  items-baseline justify-between">
                                <div className="cursor-pointer font-medium">
                                    Rs {productPrice}
                                </div>
                                <div className="mb-4 flex cursor-pointer flex-row items-center pt-2 align-bottom text-base">
                                    {productRating}
                                    <span className="border-r-2 border-gray-500 pr-1">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className={`} h-5 w-5 fill-current              text-indigo-600`}
                                        >
                                            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
                                        </svg>
                                    </span>
                                    <span className="ml-2">
                                        {productReview}
                                    </span>
                                </div>
                            </div>
                        </Link>
                        {loading ? (
                            <LoaderButton />
                        ) : (
                            <button
                                onClick={addProduct}
                                className="w-full rounded bg-indigo-500 py-1.5 px-1.5 text-center text-white hover:bg-indigo-600 focus:outline-none lg:px-4"
                            >
                                {buttonText}
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="ml-2"
                                />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
