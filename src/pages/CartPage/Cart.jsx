import { useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import CartForm from '../../Components/CartPage/CartForm';

import useScrollToTop from '../../Hooks/useScrollToTop';

import { useCartProvider } from '../../Context/Cart/CartProvider';
import { useAuthProvider } from '../../Context/Auth/AuthProvider';

const Cart = () => {
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
                        Cart Is Empty
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
                    <div className="my-10 w-full px-4">
                        <div className="container mx-auto md:w-[96%] md:max-w-screen-lg lg:w-[90%] lg:max-w-screen-xl lg:px-0">
                            <h1 className="mb-8 text-center text-2xl font-semibold tracking-tight text-gray-700">
                                Shopping Cart (1)
                            </h1>
                            <div className="mdmid:flex-row flex flex-col gap-6">
                                <CartForm />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;
