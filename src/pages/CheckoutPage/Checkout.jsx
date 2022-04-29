import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

import useScrollToTop from '../../Hooks/useScrollToTop';
import CheckoutForm from '../../Components/CheckoutPage/CheckoutForm';

import { useCartProvider } from '../../Context/Cart/CartProvider';
import { useAuthProvider } from '../../Context/Auth/AuthProvider';

import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Checkout = () => {
    useScrollToTop();

    const { cartState } = useCartProvider();
    const { userAuth } = useAuthProvider();

    const navigate = useNavigate();

    useEffect(() => {
        if (!userAuth.login) {
            navigate('/login');
        }
    }, [userAuth]);

    return (
        <>
            {cartState.cartItems.length === 0 ? (
                <div className="my-4 flex w-full flex-1 flex-col items-center justify-center bg-gray-50">
                    <h1 className="mb-5 text-center text-5xl font-bold tracking-wide text-gray-700">
                        No Product in Cart
                    </h1>
                    <div className="text-center">
                        <Link
                            to="/products"
                            className="inline-block rounded bg-indigo-500 px-4 py-2 font-semibold text-white"
                        >
                            Add Products
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="m-0 flex flex-1 flex-col bg-gray-50">
                    <div className="container my-4 mx-auto w-full p-4 md:w-[96%] md:max-w-screen-lg lg:w-[90%] lg:max-w-screen-xl lg:px-0">
                        <h1 className="mb-8 flex justify-center text-2xl font-medium tracking-tight text-gray-700">
                            <span>Checkout</span>
                            <FontAwesomeIcon
                                icon={faBagShopping}
                                className="pl-2"
                            />
                        </h1>
                        <div className="mdmid:flex-row flex flex-col gap-6">
                            <CheckoutForm />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Checkout;
