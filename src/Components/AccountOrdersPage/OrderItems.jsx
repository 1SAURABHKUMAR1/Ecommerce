const OrderItems = (props) => {
    const { image, name, price } = props;
    return (
        <>
            <div className="mb-4 flex items-center py-2 md:mb-0">
                <img src={image} alt="" className="hidden h-20 w-44 md:block" />
                <div className="w-5/6 font-medium md:ml-6">{name}</div>
                <div className="w-1/6 text-right font-medium">₹ {price}</div>
            </div>
        </>
    );
};

export default OrderItems;
