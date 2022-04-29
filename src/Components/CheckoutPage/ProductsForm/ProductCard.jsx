import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const { image, name, price, productId } = props;

    const [deliveryDate, setDeliveryDate] = useState(7);

    useEffect(() => {
        setDeliveryDate(Math.floor(Math.random() * 6 + 5));
    }, []);

    return (
        <>
            <div className="mb-3 flex w-full flex-col items-center justify-center bg-white">
                <div className="relative flex w-full gap-4 py-3 px-2">
                    <div className="flex h-auto w-56 items-center justify-center p-2 sm:w-72 md:w-80">
                        <img
                            src={image}
                            className="h-auto w-auto object-contain"
                            alt={name}
                            loading="lazy"
                        />
                    </div>
                    <div className="flex w-full flex-col justify-center py-4">
                        <Link to={`/products/${productId}`}>
                            <h2 className="h-auto w-full flex-wrap break-normal font-medium">
                                {name}
                            </h2>
                        </Link>
                        <div className="mt-6 flex h-auto w-full gap-8">
                            <h1 className="text-sm font-semibold sm:text-base">
                                Delivery: {deliveryDate} Days
                            </h1>
                            <h1>
                                Price : ₹
                                <span className="text-sm font-semibold sm:text-base">
                                    {price}
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
