import React, { useEffect, useState } from 'react';

const carouselData = [
    {
        span: ' Spring Festival buy glasses according to season.',
        image: '/images/banner2.png',
    },
    {
        span: ' Glasses, sunglasses, and contacts—we have got your eyes covered.',
        image: '/images/banner1.png',
    },
    {
        span: ' Best Price Serve Right.',
        image: '/images/banner3.png',
    },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCurrentIndex((currentIndex + 1) % carouselData.length);
    //     }, 4000);
    // }, [currentIndex]);

    return (
        <div className="mt-8 mb-8 flex max-h-96 min-h-[20rem] w-full bg-gray-100 text-gray-900">
            {carouselData.map((item, index) => (
                <React.Fragment key={index}>
                    {currentIndex === index && (
                        <>
                            <div className="flex w-full flex-col items-start justify-center px-6 py-4 md:p-20 lg:basis-1/2">
                                <h1 className="mb-4 break-words text-4xl font-normal text-gray-700 sm:text-5xl md:w-3/4  md:break-normal md:text-6xl">
                                    <strong className="text-indigo-500">
                                        See
                                    </strong>
                                    &nbsp;everything with&nbsp;
                                    <strong className="text-indigo-500">
                                        Clarity
                                    </strong>
                                </h1>
                                <p className="break-words text-sm text-gray-600 md:break-normal md:text-base">
                                    Buying eyewear should leave you happy and
                                    good-looking, with money in your pocket.
                                    {item.span}
                                </p>
                                <br />
                                <a
                                    className="flex items-center justify-center rounded border-2 bg-indigo-600 px-3 py-2 font-bold  text-gray-50 md:px-4 md:py-4"
                                    href="/category"
                                >
                                    Shop Now &nbsp;
                                    <span
                                        role="img"
                                        aria-label="arrow-right"
                                        className="anticon anticon-arrow-right hidden md:inline-block"
                                    >
                                        <svg
                                            viewBox="64 64 896 896"
                                            focusable="false"
                                            data-icon="arrow-right"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                            <div className="relative hidden max-h-96 w-full basis-1/2 overflow-hidden lg:inline-block">
                                <img
                                    src={item.image}
                                    className="m-auto h-full w-auto translate-x-20 object-cover"
                                    alt=""
                                />
                            </div>
                        </>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Carousel;
