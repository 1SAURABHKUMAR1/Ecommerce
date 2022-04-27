import CheckoutWrapper from '../Wrapper/CheckoutWrapper';
import ProductCard from './ProductCard';

const ProductForm = () => {
    return (
        <>
            <CheckoutWrapper headerTitle={'Item Overview'}>
                <ProductCard />
                <ProductCard />
            </CheckoutWrapper>
        </>
    );
};

export default ProductForm;
