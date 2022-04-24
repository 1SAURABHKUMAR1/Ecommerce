import CartProductCard from './CartProductCard/CartProductCard';
import CartCheckoutPriceCard from './PriceCard/PriceCard';

const CartForm = () => {
    return (
        <>
            <div className="flex w-full flex-col items-center justify-center">
                <CartProductCard />
                <CartProductCard />
                <CartProductCard />
                <CartProductCard />
                <CartProductCard />
                <CartProductCard />
            </div>
            <CartCheckoutPriceCard
                headerTitle="Order Details"
                buttonText="Place Order"
            />
        </>
    );
};

export default CartForm;
