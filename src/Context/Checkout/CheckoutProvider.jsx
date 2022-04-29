import { createContext, useReducer, useContext } from 'react';

import CheckoutReducer from './CheckoutReducer';

const initalData = {
    shippingInfo: {
        name: null,
        phoneNumber: null,
        postalCode: null,
        city: null,
        address: null,
        state: null,
        country: null,
    },
    paymentMode: null,
};

const CheckoutContext = createContext({});

const CheckoutProvider = ({ children }) => {
    const [checkoutState, checkoutDispatch] = useReducer(
        CheckoutReducer,
        initalData,
    );

    return (
        <CheckoutContext.Provider value={{ checkoutState, checkoutDispatch }}>
            {children}
        </CheckoutContext.Provider>
    );
};

const useCheckoutProvider = () => useContext(CheckoutContext);

export { CheckoutProvider, useCheckoutProvider };
