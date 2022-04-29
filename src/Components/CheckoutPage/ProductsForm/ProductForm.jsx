import CheckoutWrapper from '../Wrapper/CheckoutWrapper';
import ProductCard from './ProductCard';

import { useCartProvider } from '../../../Context/Cart/CartProvider';

const ProductForm = () => {
    const { cartState } = useCartProvider();

    return (
        <>
            <CheckoutWrapper headerTitle={'Item Overview'} iconBlue={true}>
                {cartState.cartItems.map((element) => (
                    <>
                        <ProductCard {...element} key={element._id} />
                    </>
                ))}
            </CheckoutWrapper>
        </>
    );
};

export default ProductForm;
