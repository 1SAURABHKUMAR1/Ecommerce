import { useEffect, createContext, useContext, useReducer } from 'react';
import CartReducer from './CartReducer';

import { useAuthProvider } from '../Auth/AuthProvider';
import Axios from '../../Utils/Axios';

const intialCartState = {
    cartItems: [],
    taxAmount: 0,
    discount: 0,
    shippingAmount: 0,
    totalAmount: 0,
    totalQuantity: 0,
};

const CartContext = createContext({});

const CartProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(CartReducer, intialCartState);
    const { userAuth } = useAuthProvider();

    const fetchData = async () => {
        try {
            const { data } = await Axios.get('/user/cart', {
                headers: {
                    Authorization: `Bearer ${userAuth.token}`,
                },
            });

            data.cart?.cartItems?.length > 0
                ? cartDispatch({
                      type: 'UPDATE_CART_FROM_SERVER',
                      payload: data.cart.cartItems,
                  })
                : cartDispatch({
                      type: 'DEFAULT_CART',
                  });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (userAuth.login) {
            fetchData();
        } else {
            cartDispatch({
                type: 'DEFAULT_CART',
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userAuth]);

    useEffect(() => {
        cartState.cartItems.length > 0 &&
            cartDispatch({
                type: 'UPDATE_PRICE_AND_QUANTITY',
            });
    }, [cartState.cartItems]);

    return (
        <CartContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </CartContext.Provider>
    );
};

const useCartProvider = () => useContext(CartContext);

export { CartProvider, useCartProvider };
