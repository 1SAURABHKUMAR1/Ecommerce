import { useState, Fragment, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useCartProvider } from '../../Context/Cart/CartProvider';
import { useAuthProvider } from '../../Context/Auth/AuthProvider';

import axios from 'axios';

import ErrorToast from '../../Toast/ErrorToast';

import LoaderButton from '../UI/Loader/LoaderButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProductDetail = ({ props }) => {
    const { brand, name, rating, description, price, photos, _id } = props;

    const [ratingStars, setRatingStars] = useState([]);

    for (let ratingIndex = 1; ratingIndex <= 5; ratingIndex++) {
        if (ratingStars.length < 5) {
            ratingStars.push(
                <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    key={ratingIndex + 100}
                    strokeWidth="2"
                    className={`fillCurrent h-5 w-5 ${
                        ratingIndex <= rating
                            ? 'text-indigo-500'
                            : 'text-gray-300'
                    }`}
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>,
            );
        } else {
            setRatingStars([]);
        }
    }

    const { userAuth } = useAuthProvider();
    const {
        cartState: { cartItems },
        cartDispatch,
    } = useCartProvider();

    const [loading, setLoading] = useState();
    const navigate = useNavigate();

    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const addProductToCart = async () => {
        try {
            const responseData = await axios.post(
                `${process.env.REACT_APP_API_URL}/user/cart`,
                {
                    cartItems: [
                        {
                            name: name,
                            quantity: 1,
                            image: photos[0],
                            price: price,
                            productId: _id,
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

    const addToCart = () => {
        if (userAuth.login) {
            loadingHandler();
            addProductToCart();
        } else {
            navigate('/login');
        }
    };

    const buyNow = () => {
        if (userAuth.login) {
            addProductToCart();

            setTimeout(() => {
                navigate('/cart');
            }, 1500);
        } else {
            navigate('/login');
        }
    };

    const toggleIsAddedToCart = () => {
        setIsAddedToCart(!isAddedToCart);
    };

    const loadingHandler = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1200);
    };

    useEffect(() => {
        if (
            cartItems?.findIndex((element) => element.productId === _id) !== -1
        ) {
            toggleIsAddedToCart();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartItems]);

    return (
        <>
            <div className="mt-7 w-full overflow-hidden py-4 px-5 shadow-lg lg:mt-0 lg:h-96 lg:w-1/2 lg:px-6">
                <h2 className="title-font mb-3 text-sm tracking-widest text-gray-500 lg:mb-2">
                    {brand}
                </h2>
                <h1 className="mb-3 text-3xl font-medium text-gray-900 lg:mb-2 lg:text-2xl">
                    {name}
                </h1>
                <div className="mb-3 flex lg:mb-3">
                    <span className="flex items-center">
                        {ratingStars.map((element, index) => (
                            <Fragment key={index}>{element}</Fragment>
                        ))}
                        <span className="ml-3 text-gray-500">
                            <span className="font-bold"> {rating} &nbsp;</span>
                            Reviews
                        </span>
                    </span>
                </div>
                <p className="mb-3 max-h-[6rem] min-h-[6rem] leading-relaxed lg:max-h-[8.5rem] lg:min-h-[8.5rem]">
                    {description}
                </p>
                <div className="mb-3 ">
                    <span className="title-font font-gray-600 text-2xl lg:text-xl">
                        Rs
                        <span className="font-medium text-gray-800">
                            {' '}
                            {price}
                        </span>
                    </span>
                </div>
                <div className="flex justify-center gap-3">
                    {!isAddedToCart && !loading && (
                        <>
                            <button
                                onClick={addToCart}
                                className="ml-auto  w-full rounded border-0 bg-indigo-500 py-2 px-6 text-center text-white hover:bg-indigo-600 focus:outline-none lg:px-4"
                            >
                                Add To Cart
                            </button>
                            <button
                                onClick={buyNow}
                                className="ml-auto  w-full rounded border-0 bg-indigo-500 py-2 px-6 text-center text-white hover:bg-indigo-600 focus:outline-none lg:px-4"
                            >
                                Buy Now
                            </button>
                        </>
                    )}

                    {loading && <LoaderButton />}

                    {isAddedToCart && !loading && (
                        <Link
                            to="/cart"
                            className="text-md block w-full rounded bg-indigo-600 px-4 py-3 text-center font-semibold  tracking-wider text-white transition duration-300 ease-in-out hover:bg-indigo-500 focus:bg-indigo-500 focus:outline-none"
                        >
                            Go To Cart
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="ml-2"
                            />
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
