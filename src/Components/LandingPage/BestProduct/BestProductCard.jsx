import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormButton from '../../UI/Button/FormButton';

const BestProductCard = ({
    productName,
    productPrice,
    productImg,
    productRating,
    productReview,
    productKey,
}) => {
    // const ratingStars = [];

    const [ratingStars, setRatingStars] = useState([]);

    for (let rating = 1; rating <= 5; rating++) {
        ratingStars.push(
            <svg
                viewBox="0 0 24 24"
                className={`h-5 w-5 fill-current ${
                    rating <= productRating
                        ? 'text-indigo-600'
                        : 'text-gray-300'
                }`}
            >
                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
            </svg>,
        );
    }

    return (
        <>
            <div className="m-auto">
                <div className="relative max-h-[21rem] w-full max-w-[19rem] overflow-hidden rounded bg-white text-gray-900 shadow">
                    <div className="relative h-[60%] overflow-hidden bg-gray-100">
                        <img
                            src={productImg}
                            alt="product"
                            loading="lazy"
                            className="h-full w-full object-cover object-center duration-200 ease-in-out hover:scale-105"
                        />
                    </div>
                    <div className="py-4 px-6">
                        <Link
                            to={`/products/${productKey}`}
                            state={{ isValid: true }}
                        >
                            <div className="flex items-baseline justify-between">
                                <h1 className="cursor-pointer text-xl font-semibold">
                                    {productName}
                                </h1>
                                <div className="cursor-pointer font-medium">
                                    {productPrice} Rs
                                </div>
                            </div>
                            <div className="mb-4 flex cursor-pointer items-center pt-2 align-bottom text-base">
                                {ratingStars}
                                <span className="ml-2 text-sm text-gray-700">
                                    {productReview}
                                    <span className="ml-[3px]">reviews</span>
                                </span>
                            </div>
                            <FormButton buttonText={'Read More..'} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BestProductCard;
