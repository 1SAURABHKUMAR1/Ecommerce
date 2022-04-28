import { createContext, useContext, useReducer } from 'react';
import CartReducer from './CartReducer';

import { useAuthProvider } from '../Auth/AuthProvider';
import { useEffect } from 'react';
import axios from 'axios';

const intialCartState = {
    cartItems: [
        // {
        //     productId: null,
        //     price: 0,
        //     image: null,
        //     quantity: 0,
        //     name: null,
        // },
    ],
    taxAmount: 0,
    discount: 0,
    shippingAmount: 0,
    totalAmount: 0,
    totalQuantity: 0, // for checkout api send totalAmount + shipping Amount
};

const CartContext = createContext({});

const CartProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(CartReducer, intialCartState);
    const { userAuth } = useAuthProvider();

    const fetchData = async () => {
        try {
            const responseCart = await axios.get(
                `${process.env.REACT_APP_API_URL}/user/cart`,
                {
                    headers: {
                        Authorization: `Bearer ${userAuth.token}`,
                    },
                },
            );

            responseCart.data.cart?.cartItems?.length > 0
                ? cartDispatch({
                      type: 'UPDATE_CART_FROM_SERVER',
                      payload: responseCart.data.cart.cartItems,
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
