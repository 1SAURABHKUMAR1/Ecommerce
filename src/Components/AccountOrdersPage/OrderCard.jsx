import OrderItems from './OrderItems';

const OrderCard = (props) => {
    const { orderItems, orderedAt, totalAmount } = props;

    return (
        <div className="mb-6 border-b-2 px-3">
            {orderItems.map((element) => (
                <OrderItems {...element} key={element._id} />
            ))}

            <div className="mt-8 mb-4 flex flex-wrap justify-between ">
                <div className=" flex gap-3">
                    Ordered At
                    <span className="font-medium">
                        {orderedAt.slice(0, 10)}
                    </span>
                </div>
                <div className=" flex gap-2">
                    {'Total Amount -'}
                    <span className="font-medium">₹ {totalAmount}</span>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
