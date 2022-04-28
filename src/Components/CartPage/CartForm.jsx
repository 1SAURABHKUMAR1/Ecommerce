import CartProductCard from './CartProductCard/CartProductCard';
import CartCheckoutPriceCard from './PriceCard/PriceCard';

import { useCartProvider } from '../../Context/Cart/CartProvider';

const CartForm = () => {
    const { cartState } = useCartProvider();

    return (
        <>
            <div className="flex w-full flex-col items-center ">
                {cartState.cartItems.map((element) => (
                    <CartProductCard {...element} key={element._id} />
                ))}
            </div>
            <CartCheckoutPriceCard
                headerTitle="Order Details"
                buttonText="Place Order"
            />
        </>
    );
};

export default CartForm;
