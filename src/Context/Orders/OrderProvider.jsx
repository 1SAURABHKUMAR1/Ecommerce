import { useEffect, createContext, useContext, useState } from 'react';

import { useAuthProvider } from '../Auth/AuthProvider';
import { useCartProvider } from '../Cart/CartProvider';

import Axios from '../../Utils/Axios';

const OrderContext = createContext(null);

const OrderProvider = ({ children }) => {
    const [orderItems, setOrderItems] = useState([]);
    const { userAuth } = useAuthProvider();
    const {
        cartState: { cartItems },
    } = useCartProvider();

    const fetchData = async () => {
        try {
            const response = await Axios.get('/myorder', {
                headers: {
                    Authorization: `Bearer ${userAuth.token}`,
                },
            });

            response.data.order?.length > 0 &&
                setOrderItems(response.data.order);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (userAuth.login && cartItems.length === 0) {
            fetchData();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userAuth, cartItems]);

    return (
        <OrderContext.Provider value={{ orderItems }}>
            {children}
        </OrderContext.Provider>
    );
};

const useOrderProivider = () => useContext(OrderContext);

export { OrderProvider, useOrderProivider };
