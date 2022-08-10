import {
    useState,
    useContext,
    createContext,
    useReducer,
    useEffect,
} from 'react';
import Axios from '../../Utils/Axios';

import ProductReducer from './ProductReducer';

const ProductContext = createContext([]);

const ProductProvider = ({ children }) => {
    const [productState, productDispatch] = useReducer(ProductReducer, {
        products: [],
        categories: [],
        brands: [],
    });
    const [productResponse, setProductResponse] = useState({});

    const responseProducts = async () => {
        const response = await Axios.get(`/products`);

        setProductResponse(response);
    };

    const getAllProducts = () => {
        productDispatch({
            type: 'getAllProducts',
            payload: productResponse.data.products,
        });
    };

    const getAllCategories = () => {
        const products = productResponse.data.products;

        let categories = [];
        products.forEach((product) => {
            if (!categories.includes(product.category)) {
                categories.push(product.category);
            }
        });

        productDispatch({
            type: 'getAllCategories',
            payload: categories,
        });
    };

    const getAllBrands = () => {
        const products = productResponse.data.products;

        let brands = [];
        products.forEach((product) => {
            if (!brands.includes(product.brand)) {
                brands.push(product.brand);
            }
        });

        productDispatch({
            type: 'getAllBrands',
            payload: brands,
        });
    };

    useEffect(() => {
        responseProducts();
    }, []);

    useEffect(() => {
        productResponse.data && getAllProducts();
        productResponse.data && getAllCategories();
        productResponse.data && getAllBrands();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productResponse]);

    return (
        <ProductContext.Provider value={{ productState, productDispatch }}>
            {children}
        </ProductContext.Provider>
    );
};

const useProductProvider = () => useContext(ProductContext);

export { ProductProvider, useProductProvider };
