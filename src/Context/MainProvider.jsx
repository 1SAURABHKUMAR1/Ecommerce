import { Toaster } from 'react-hot-toast';

import { ProductProvider } from './ProductList/ProductProvider';
import { AuthProvider } from './Auth/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import { FilterProvider } from './Filter/FilterProvider';
import { CartProvider } from './Cart/CartProvider';

const MainProvider = ({ children }) => {
    return (
        <>
            <BrowserRouter>
                <Toaster position="top-right" reverseOrder={false} />
                <AuthProvider>
                    <ProductProvider>
                        <FilterProvider>
                            <CartProvider>{children}</CartProvider>
                        </FilterProvider>
                    </ProductProvider>
                </AuthProvider>
            </BrowserRouter>
        </>
    );
};

export default MainProvider;
