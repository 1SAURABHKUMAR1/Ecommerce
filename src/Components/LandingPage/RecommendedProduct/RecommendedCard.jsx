import { NavLink } from 'react-router-dom';

const RecommendedCard = ({
    productSubTitle,
    productTitle,
    productDescription,
}) => {
    return (
        <>
            <div
                className={
                    'mt-1.5rem m-auto flex h-[35rem] flex-col-reverse items-center justify-between py-8 md:mt-0 md:grid md:h-[18rem] md:w-[87%] md:grid-cols-[1fr,1fr] lg:w-[90%]'
                }
            >
                <div>
                    <p className="text-lg font-medium text-black">
                        {productSubTitle}
                    </p>
                    <h1 className="mt-2 text-2xl font-semibold text-black  md:text-2xl">
                        {productTitle}
                    </h1>
                    <p className="mt-3 leading-7 text-black">
                        {productDescription}
                    </p>
                    <button className=" mt-4 inline-flex  items-center justify-center rounded border-2 bg-indigo-600 px-3 py-2 font-bold  text-gray-50 md:px-4 md:py-4">
                        <NavLink
                            to="/products/621f7b51a5782f76001f272c"
                            state={{ isValid: true }}
                        >
                            {'Read More...'}
                        </NavLink>
                    </button>
                </div>
                <img
                    src={
                        'https://res.cloudinary.com/dz5uflnzm/image/upload/v1646230352/ecommerce/ziw2ell4h2lvezxd2hmg.png'
                    }
                    alt="camera"
                    loading="lazy"
                    className="m-auto h-auto max-w-[19rem] object-contain sm:max-w-[22rem] lg:max-w-[20rem] xl:max-w-[22rem]"
                />
            </div>
        </>
    );
};

export default RecommendedCard;
