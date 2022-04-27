import CheckoutWrapper from '../Wrapper/CheckoutWrapper';

const PaymentOptions = () => {
    return (
        <>
            <CheckoutWrapper headerTitle={'Payment Method'}>
                <div className="flex flex-wrap gap-4 px-4">
                    <img
                        src="/images/googlePay.svg"
                        alt="google pay"
                        className="h-full w-auto cursor-pointer rounded border-2 bg-white px-3 py-1 brightness-50 grayscale"
                    />
                    <img
                        src="/images/paypal.svg"
                        alt="paypal"
                        className="h-full w-auto cursor-pointer rounded border-2 bg-white px-3 py-1 brightness-50 grayscale"
                    />
                    <img
                        src="/images/razorpay.svg"
                        alt="razorpay"
                        className="h-full w-auto cursor-pointer rounded border-2 px-3 py-1"
                    />
                    <img
                        src="/images/stripe.svg"
                        alt="stripe"
                        className="h-full w-auto cursor-pointer rounded border-2 px-3 py-1"
                    />
                </div>
            </CheckoutWrapper>
        </>
    );
};

export default PaymentOptions;
