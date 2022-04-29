import { useState, useEffect } from 'react';

import { useCartProvider } from '../../../Context/Cart/CartProvider';
import { useAuthProvider } from '../../../Context/Auth/AuthProvider';
import { useCheckoutProvider } from '../../../Context/Checkout/CheckoutProvider';

import LoaderButton from '../../UI/Loader/LoaderButton';

import ErrorToast from '../../../Toast/ErrorToast';
import SuccessToast from '../../../Toast/SuccessToast';

import axios from 'axios';
import { useNavigate } from 'react-router';

const OrderPriceSummary = ({ headerTitle, buttonText }) => {
    const {
        cartState: {
            shippingAmount,
            discount,
            totalAmount,
            totalQuantity,
            taxAmount,
            cartItems,
        },
        cartDispatch,
    } = useCartProvider();
    const {
        checkoutState: { shippingInfo, paymentMode },
        checkoutDispatch,
    } = useCheckoutProvider();
    const { userAuth } = useAuthProvider();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [allFieldValid, setAllFieldValid] = useState(false);

    const checkoutHandler = async () => {
        if (allFieldValid) {
            try {
                setLoading(true);

                await axios.post(
                    `${process.env.REACT_APP_API_URL}/order/create`,
                    {
                        shippingInfo: {
                            address: shippingInfo.address,
                            city: shippingInfo.city,
                            phoneNumber: shippingInfo.phoneNumber,
                            postalCode: shippingInfo.postalCode,
                            state: shippingInfo.state,
                            country: shippingInfo.country,
                        },
                        paymentInfo: {
                            id: `reciept#${Math.floor(Math.random() * 8 + 10)}`,
                        },
                        taxAmount: taxAmount,
                        shippingAmount: shippingAmount,
                        totalAmount: totalAmount + shippingAmount,
                        orderItems: cartItems,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${userAuth.token}`,
                        },
                    },
                );

                setTimeout(() => {
                    setLoading(false);

                    SuccessToast('Order Successfull');

                    checkoutDispatch({
                        type: 'DEFAULT_STATE',
                    });

                    cartDispatch({
                        type: 'DEFAULT_CART',
                    });

                    navigate('/');
                }, 1200);
            } catch (error) {
                ErrorToast('Something Went Wrong');
                setLoading(false);

                if (error.response) {
                    console.log(error.response.data.message);
                }
                console.log(error);
            }
        } else {
            ErrorToast('Please Fill All Details');
        }
    };

    useEffect(() => {
        if (!userAuth.login) {
            navigate('/login');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (
            shippingInfo.name &&
            shippingInfo.phoneNumber &&
            shippingInfo.postalCode &&
            shippingInfo.city &&
            shippingInfo.address &&
            shippingInfo.state &&
            shippingInfo.country &&
            paymentMode &&
            taxAmount &&
            shippingAmount &&
            totalAmount &&
            cartItems.length > 0
        ) {
            setAllFieldValid(true);
        } else {
            setAllFieldValid(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shippingInfo, paymentMode, taxAmount, shippingAmount, totalAmount]);

    return (
        <>
            <div className="mdmid:h-max mdmid:max-w-[22rem] sticky top-20 w-full space-y-3 rounded border-2 bg-white p-4 shadow-sm">
                <h1 className="text-center text-lg font-medium ">
                    {headerTitle}
                </h1>

                <hr className="border-b-1 border-dashed border-gray-400" />

                <div className="space-y-2">
                    <div className="flex justify-between">
                        <h3 className="text-gray-800">Price</h3>
                        <h3 className="text-gray-800">
                            ₹ {totalAmount + discount}
                        </h3>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-gray-800">Shipping Amount</h3>
                        <h3 className="text-gray-600">₹ {shippingAmount}</h3>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-gray-800">Discount</h3>
                        <h3 className="text-green-600">- ₹ {discount}</h3>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-gray-800">Total Quantity</h3>
                        <h3 className="text-gray-800">{totalQuantity}</h3>
                    </div>
                </div>

                <hr className="border-b-1 border-dashed border-gray-400" />

                <div className="flex justify-between">
                    <h3 className="font-medium">Total</h3>
                    <h3 className="font-medium">
                        ₹ {totalAmount + shippingAmount}
                    </h3>
                </div>

                <hr className="border-b-1 !mb-4 border-dashed  border-gray-400" />

                {loading ? (
                    <LoaderButton />
                ) : (
                    <button
                        className="text-md  block w-full rounded bg-indigo-600 px-4 py-3 font-semibold  tracking-wider text-white transition duration-300 ease-in-out hover:bg-indigo-500 focus:bg-indigo-500 focus:outline-none"
                        onClick={checkoutHandler}
                    >
                        {buttonText}
                    </button>
                )}

                <hr className="border-b-1 !mt-4 border-dashed  border-gray-400" />

                <div className="text-center font-medium text-green-600">
                    You will save ₹{discount} on this order
                </div>
            </div>
        </>
    );
};

export default OrderPriceSummary;
