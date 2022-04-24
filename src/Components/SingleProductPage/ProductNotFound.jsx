import { Link } from 'react-router-dom';

const ProductNotFound = () => {
    return (
        <>
            <h1 className="mb-5 text-center text-5xl font-bold tracking-wide text-gray-700">
                <span className="text-indigo-700">404 &nbsp;</span>
                Product not found
            </h1>

            <div className="text-center">
                <Link
                    to="/"
                    className="inline-block rounded bg-indigo-500 px-4 py-2 font-semibold text-white"
                >
                    Go to Home
                </Link>
            </div>
        </>
    );
};

export default ProductNotFound;
