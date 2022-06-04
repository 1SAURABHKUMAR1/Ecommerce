import { useState, useEffect } from 'react';

import { useCartProvider } from '../../../Context/Cart/CartProvider';
import { useAuthProvider } from '../../../Context/Auth/AuthProvider';
import { useCheckoutProvider } from '../../../Context/Checkout/CheckoutProvider';

import LoaderButton from '../../UI/Loader/LoaderButton';

import ErrorToast from '../../../Toast/ErrorToast';
import SuccessToast from '../../../Toast/SuccessToast';

import axios from 'axios';
import { useNavigate, useLocation } from 'react-router';

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
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [allFieldValid, setAllFieldValid] = useState(false);

    // flow -> generateOrderID creates orderID -> handleCheckout handles razorpay pop up and gernates payment id then generateOrder takes paymnet and creates a order

    // generate order id for razor pay
    const generateOrderID = async () => {
        setLoading(true);

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/capturerazorpay`,
                {
                    amount: (totalAmount + shippingAmount) * 100,
                },
                {
                    Authorization: `Bearer ${userAuth.token}`,
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            );

            return response.data.order.id;
        } catch (error) {
            ErrorToast('Something Went Wrong!');
            setLoading(false);
            return;
        }
    };

    // gets order id then gets payment id from razoypay and
    const handleCheckout = async () => {
        const orderId = await generateOrderID();

        if (!orderId) {
            return;
        }

        const key = `${process.env.REACT_APP_RAZORPAY_KEY}`;

        const options = {
            key: key,
            amount: (totalAmount + shippingAmount) * 100,
            order_id: orderId,
            currency: 'INR',
            name: 'Lens Store',
            description: 'Payment for Glasses',
            handler: async function (response) {
                await generateOrder(response.razorpay_payment_id);
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    // handle order api for backend and creates checkout
    const generateOrder = async (paymentId) => {
        if (allFieldValid) {
            try {
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
                            id: paymentId,
                        },
                        taxAmount: taxAmount,
                        shippingAmount: shippingAmount,
                        totalAmount: totalAmount + shippingAmount,
                        orderItems: cartItems,
                    },
                    {
                        Authorization: `Bearer ${userAuth.token}`,
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                );

                SuccessToast('Order Successfull');
                setLoading(false);

                setTimeout(() => {
                    checkoutDispatch({
                        type: 'DEFAULT_STATE',
                    });
                    cartDispatch({
                        type: 'DEFAULT_CART',
                    });
                    navigate('/');
                }, 1000);
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

    // load script for razorpay
    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    useEffect(() => {
        if (!userAuth.login) {
            navigate('/login', { state: { from: location.pathname } });
        }

        loadScript('https://checkout.razorpay.com/v1/checkout.js');
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
                        onClick={handleCheckout}
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
