const CheckoutReducer = (checkoutState, action) => {
    switch (action.type) {
        case 'SET_ADDRESS':
            return {
                ...checkoutState,
                shippingInfo: {
                    ...checkoutState.shippingInfo,
                    [action.field]: action.payload,
                },
            };

        case 'SET_PAYMENT':
            return {
                ...checkoutState,
                paymentMode: action.payload,
            };

        case 'DEFAULT_STATE':
            return {
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

        default:
            return { ...checkoutState };
    }
};

export default CheckoutReducer;
