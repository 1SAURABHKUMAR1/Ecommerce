import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

import OrderPriceSummary from '../../Components/CheckoutPage/OrderPriceSummary/OrderPriceSummary';
import ProductCard from '../../Components/CheckoutPage/ProductsForm/ProductCard';
import CheckoutWrapper from '../../Components/CheckoutPage/Wrapper/CheckoutWrapper';
import AddressForm from '../../Components/CheckoutPage/AddressForm/AddressForm';

import useScrollToTop from '../../Hooks/useScrollToTop';

const Checkout = () => {
    useScrollToTop();

    return (
        <>
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
                        <div className="flex w-full flex-col items-center">
                            <CheckoutWrapper headerTitle={'Item Overview'}>
                                <ProductCard />
                                <ProductCard />
                            </CheckoutWrapper>
                            <CheckoutWrapper
                                headerTitle={'Contact & Delivery Address'}
                            >
                                <AddressForm />
                            </CheckoutWrapper>
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
                        </div>
                        <OrderPriceSummary
                            headerTitle="Order Summary"
                            buttonText="Confirm Order"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
