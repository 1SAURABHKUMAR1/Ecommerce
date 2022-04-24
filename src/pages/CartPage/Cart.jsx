import CartForm from '../../Components/CartPage/CartForm';

import useScrollToTop from '../../Hooks/useScrollToTop';

const Cart = () => {
    useScrollToTop();

    return (
        <div className="m-0 flex flex-1 flex-col bg-gray-50">
            <div className="my-10 w-full px-4">
                <div className="container mx-auto md:w-[96%] md:max-w-screen-lg lg:w-[90%] lg:max-w-screen-xl lg:px-0">
                    <h1 className="mb-8 text-center text-2xl font-semibold tracking-tight text-gray-700">
                        Shopping Cart (1)
                    </h1>
                    <div className="mdmid:flex-row flex flex-col gap-6">
                        <CartForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
