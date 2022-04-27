import ProductForm from './ProductsForm/ProductForm';
import AddressForm from './AddressForm/AddressForm';
import PaymentOptions from './PaymentOptions/PaymentOptions';
import OrderPriceSummary from './OrderPriceSummary/OrderPriceSummary';

const CheckoutForm = () => {
    return (
        <>
            <div className="flex w-full flex-col items-center">
                <ProductForm />
                <AddressForm />
                <PaymentOptions />
            </div>
            <OrderPriceSummary
                headerTitle="Order Summary"
                buttonText="Confirm Order"
            />
        </>
    );
};

export default CheckoutForm;
