import CheckoutWrapper from '../Wrapper/CheckoutWrapper';

import googlePay from '../../../Data/Svg/googlepay.svg';
import paypal from '../../../Data/Svg/paypal.svg';
import razorpay from '../../../Data/Svg/razorpay.svg';
import stripe from '../../../Data/Svg/stripe.svg';

import { useCheckoutProvider } from '../../../Context/Checkout/CheckoutProvider';
import { useEffect, useState } from 'react';

const PaymentOptions = () => {
    const {
        checkoutState: { paymentMode },
        checkoutDispatch,
    } = useCheckoutProvider();
    const [isValid, setIsValid] = useState(false);

    const addPaymentMode = (payload) => {
        checkoutDispatch({
            type: 'SET_PAYMENT',
            payload: payload,
        });
    };

    useEffect(() => {
        paymentMode ? setIsValid(true) : setIsValid(false);
    }, [paymentMode]);

    useEffect(() => {
        checkoutDispatch({
            type: 'DEFAULT_STATE',
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <CheckoutWrapper headerTitle={'Payment Method'} iconBlue={isValid}>
                <div className="flex flex-wrap gap-4 px-4">
                    <img
                        src={googlePay}
                        alt="google pay"
                        loading=""
                        className="h-full w-auto cursor-not-allowed rounded border-2 bg-white px-3 py-1 brightness-50 grayscale"
                    />
                    <img
                        src={paypal}
                        alt="paypal"
                        className="h-full w-auto cursor-pointer rounded border-2 bg-white px-3 py-1 brightness-50 grayscale"
                    />
                    <img
                        src={razorpay}
                        alt="razorpay"
                        onClick={() => addPaymentMode('razorpay')}
                        className={`h-full w-auto cursor-pointer rounded border-2 px-3 py-1 ${
                            paymentMode === 'razorpay'
                                ? 'border-indigo-700'
                                : ''
                        }`}
                    />
                    <img
                        src={stripe}
                        className="h-full w-auto cursor-pointer rounded border-2 bg-white px-3 py-1 brightness-50 grayscale"
                        alt="stripe"
                    />
                </div>
            </CheckoutWrapper>
        </>
    );
};

export default PaymentOptions;
