import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

import useScrollToTop from '../../Hooks/useScrollToTop';
import CheckoutForm from '../../Components/CheckoutPage/CheckoutForm';

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
                        <CheckoutForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
