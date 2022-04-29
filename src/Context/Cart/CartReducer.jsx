const CartReducer = (cartState, action) => {
    switch (action.type) {
        case 'UPDATE_CART_FROM_SERVER':
            return {
                ...cartState,
                cartItems: [...action.payload],
            };

        case 'UPDATE_PRICE_AND_QUANTITY':
            const totalAmount = cartState.cartItems.reduce(
                (previous, current) =>
                    previous + current.price * current.quantity,
                0,
            );

            return {
                ...cartState,
                totalAmount: totalAmount,
                taxAmount: parseInt(totalAmount * 0.18),
                shippingAmount: cartState.cartItems.length * 50,
                discount: parseInt(totalAmount * 0.08),
                totalQuantity: cartState.cartItems.reduce(
                    (previous, current) => previous + current.quantity,
                    0,
                ),
            };

        case 'DEFAULT_PRICE':
            return {
                ...cartState,
                taxAmount: 0,
                shippingAmount: 0,
                discount: 0,
                totalAmount: 0,
                totalQuantity: 0,
            };

        case 'DEFAULT_CART':
            return {
                cartItems: [],
                taxAmount: 0,
                shippingAmount: 0,
                discount: 0,
                totalAmount: 0,
                totalQuantity: 0,
            };

        default:
            return { ...cartState };
    }
};

export default CartReducer;
