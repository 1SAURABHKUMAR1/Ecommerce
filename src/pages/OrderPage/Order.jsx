import OrderCard from '../../Components/AccountOrdersPage/OrderCard';

import useScrollToTop from '../../Hooks/useScrollToTop';

import { Link } from 'react-router-dom';

import { useOrderProivider } from '../../Context/Orders/OrderProvider';

const Order = () => {
    const { orderItems } = useOrderProivider();

    useScrollToTop();

    return (
        <>
            {orderItems.length === 0 ? (
                <>
                    <h1 className="mt-20 text-center text-2xl font-bold tracking-wide text-gray-700">
                        No Orders To Show
                    </h1>
                    <div className="mt-4 text-center">
                        <Link
                            to="/products"
                            className="inline-block rounded bg-indigo-500 px-4 py-2 font-semibold text-white"
                        >
                            Buy Now
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    {orderItems.map((element) => (
                        <OrderCard key={element._id} {...element} />
                    ))}
                </>
            )}
        </>
    );
};

export default Order;
