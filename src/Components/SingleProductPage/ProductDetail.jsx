import { useState, Fragment } from 'react';

const ProductDetail = ({ props }) => {
    const { brand, name, rating, description, price } = props;

    const [ratingStars, setRatingStars] = useState([]);

    for (let ratingIndex = 1; ratingIndex <= 5; ratingIndex++) {
        if (ratingStars.length < 5) {
            ratingStars.push(
                <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    key={ratingIndex + 100}
                    strokeWidth="2"
                    className={`fillCurrent h-5 w-5 ${
                        ratingIndex <= rating
                            ? 'text-indigo-500'
                            : 'text-gray-300'
                    }`}
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>,
            );
        } else {
            setRatingStars([]);
        }
    }

    // TODO: buy  now and  add to cart and redirect to login if not signed up

    return (
        <>
            <div className="mt-7 w-full overflow-hidden py-4 px-5 shadow-lg lg:mt-0 lg:h-96 lg:w-1/2 lg:px-6">
                <h2 className="title-font mb-3 text-sm tracking-widest text-gray-500 lg:mb-2">
                    {brand}
                </h2>
                <h1 className="mb-3 text-3xl font-medium text-gray-900 lg:mb-2 lg:text-2xl">
                    {name}
                </h1>
                <div className="mb-3 flex lg:mb-3">
                    <span className="flex items-center">
                        {ratingStars.map((element, index) => (
                            <Fragment key={index}>{element}</Fragment>
                        ))}
                        <span className="ml-3 text-gray-500">
                            <span className="font-bold"> {rating} &nbsp;</span>
                            Reviews
                        </span>
                    </span>
                </div>
                <p className="mb-3 max-h-[6rem] min-h-[6rem] leading-relaxed lg:max-h-[8.5rem] lg:min-h-[8.5rem]">
                    {description}
                </p>
                <div className="mb-3 ">
                    <span className="title-font font-gray-600 text-2xl lg:text-xl">
                        Rs
                        <span className="font-medium text-gray-800">
                            {' '}
                            {price}
                        </span>
                    </span>
                </div>
                <div className="flex justify-center gap-3">
                    <button className="ml-auto  w-full rounded border-0 bg-indigo-500 py-2 px-6 text-center text-white hover:bg-indigo-600 focus:outline-none lg:px-4">
                        Add To Cart
                    </button>
                    <button className="ml-auto  w-full rounded border-0 bg-indigo-500 py-2 px-6 text-center text-white hover:bg-indigo-600 focus:outline-none lg:px-4">
                        Buy Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
