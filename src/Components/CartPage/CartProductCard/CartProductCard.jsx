import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { useCartProvider } from '../../../Context/Cart/CartProvider';
import { useAuthProvider } from '../../../Context/Auth/AuthProvider';

import ErrorToast from '../../../Toast/ErrorToast';

import axios from 'axios';

const CartProductCard = (props) => {
    const { image, name, price, quantity, productId } = props;

    const {
        cartState: { cartItems },
        cartDispatch,
    } = useCartProvider();

    const { userAuth } = useAuthProvider();

    const incrementQuantity = async () => {
        try {
            const responseData = await axios.put(
                `${process.env.REACT_APP_API_URL}/user/cart/${productId}`,
                {
                    action: 'increment',
                },
                {
                    Authorization: `Bearer ${userAuth.token}`,
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
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

    const decrementQuantity = async () => {
        try {
            const responseData = await axios.put(
                `${process.env.REACT_APP_API_URL}/user/cart/${productId}`,
                {
                    action: 'decrement',
                },
                {
                    Authorization: `Bearer ${userAuth.token}`,
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            );

            cartDispatch({
                type: 'UPDATE_CART_FROM_SERVER',
                payload: responseData.data.cart?.cartItems,
            });

            cartItems.length === 1 &&
                cartDispatch({
                    type: 'DEFAULT_PRICE',
                });
        } catch (error) {
            ErrorToast('Something went wrong');
            console.log(error);
        }
    };

    const removeProduct = async () => {
        try {
            const responseData = await axios.delete(
                `${process.env.REACT_APP_API_URL}/user/cart/${productId}`,
                {
                    headers: {
                        Authorization: `Bearer ${userAuth.token}`,
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                },
            );

            cartDispatch({
                type: 'UPDATE_CART_FROM_SERVER',
                payload: responseData.data.cart?.cartItems,
            });

            cartItems.length === 1 &&
                cartDispatch({
                    type: 'DEFAULT_PRICE',
                });
        } catch (error) {
            ErrorToast('Something went wrong');
            console.log(error);
        }
    };

    return (
        <>
            <div className="mb-3 flex w-full flex-col items-center justify-center bg-white">
                <div className="relative mx-1 flex w-full space-x-2 rounded border-2 p-3.5 px-1.5 shadow-sm sm:space-x-4">
                    <div className="flex h-auto w-48 items-center justify-center px-1.5 py-2 sm:w-48  md:w-60">
                        <img
                            src={image}
                            className="h-24 w-32 object-contain sm:h-28 sm:w-48 md:w-56"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div className="flex w-full flex-col items-center justify-between space-y-4 pr-2 sm:space-y-0">
                        <div className="flex w-full flex-col justify-between space-y-2 sm:h-[70%] sm:flex-row sm:space-y-0 md:mb-3 lg:mb-0">
                            <Link
                                to={`/products/${productId}`}
                                state={{ isValid: true }}
                                className="max-h-[6rem] w-full flex-wrap overflow-hidden font-medium"
                            >
                                {name}
                            </Link>
                            <h2 className="w-full sm:mt-0 sm:text-right">
                                ₹ <span className="font-medium">{price}</span>
                            </h2>
                        </div>
                        <div className="flex w-full items-center justify-between sm:h-[30%]">
                            <button
                                className="items-center justify-center rounded bg-indigo-600 px-2 py-1 text-sm font-medium text-gray-50 sm:text-base"
                                onClick={removeProduct}
                            >
                                Remove
                            </button>
                            <div className="flex">
                                <div className="mr-1.5 h-6 w-6 cursor-pointer  rounded-full bg-indigo-600 text-center">
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                        onClick={incrementQuantity}
                                        className="text-white"
                                    />
                                </div>
                                <span className="min-w-[20px] text-center font-semibold">
                                    {quantity}
                                </span>
                                <div className="ml-1 h-6 w-6 cursor-pointer  rounded-full bg-indigo-600 text-center">
                                    <FontAwesomeIcon
                                        icon={faMinus}
                                        onClick={decrementQuantity}
                                        className="text-white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartProductCard;
