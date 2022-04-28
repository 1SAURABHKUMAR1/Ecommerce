import FormButton from '../../UI/Button/FormButton';

import { useCartProvider } from '../../../Context/Cart/CartProvider';

import { Link } from 'react-router-dom';

const PriceCard = ({ headerTitle, buttonText }) => {
    const {
        cartState: { shippingAmount, discount, totalAmount, totalQuantity },
    } = useCartProvider();

    return (
        <>
            <div className="mdmid:h-max mdmid:max-w-[22rem] sticky top-20 w-full space-y-3 rounded border-2 bg-white p-4 shadow-sm">
                <h1 className="text-center text-lg font-medium ">
                    {headerTitle}
                </h1>
                <hr className="border-b-1 border-dashed border-gray-400" />
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <h3 className="text-gray-800">Price</h3>
                        <h3 className="text-gray-800">
                            ₹ {totalAmount + discount}
                        </h3>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-gray-800">Shipping Amount</h3>
                        <h3 className="text-gray-800">₹ {shippingAmount}</h3>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-gray-800">Discount</h3>
                        <h3 className="text-green-600">- ₹ {discount}</h3>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-gray-800">Total Quantity</h3>
                        <h3 className="text-gray-800">{totalQuantity}</h3>
                    </div>
                </div>
                <hr className="border-b-1 border-dashed border-gray-400" />
                <div className="flex justify-between">
                    <h3 className="font-medium">Total</h3>
                    <h3 className="font-medium">
                        ₹ {totalAmount + shippingAmount}
                    </h3>
                </div>
                <hr className="border-b-1 !mb-4 border-dashed  border-gray-400" />
                <Link to="/checkout">
                    <FormButton buttonText={buttonText} />
                </Link>
                <hr className="border-b-1 !mt-4 border-dashed  border-gray-400" />
                <div className="text-center font-medium text-green-600">
                    You will save ₹{discount} on this order
                </div>
            </div>
        </>
    );
};

export default PriceCard;
