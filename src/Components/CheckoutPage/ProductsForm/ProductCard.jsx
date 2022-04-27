const ProductCard = () => {
    return (
        <>
            <div className="mb-3 flex w-full flex-col items-center justify-center bg-white">
                <div className="relative flex w-full gap-4 py-3 px-2">
                    <div className="flex h-auto w-56 items-center justify-center p-2 sm:w-72 md:w-80">
                        <img
                            src="/images/1.png"
                            className="h-auto w-auto object-contain"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div className="flex w-full flex-col items-center justify-center py-4">
                        <h2 className="h-auto w-full flex-wrap break-normal font-medium">
                            GoPro HERO10 Black - sFront LCD and Touch Rear
                            Screens
                        </h2>
                        <div className="mt-6 flex h-auto w-full gap-8">
                            <h1 className="text-sm font-semibold sm:text-base">
                                Delivery: 11 Days
                            </h1>
                            <h1>
                                Price : ₹
                                <span className="text-sm font-semibold sm:text-base">
                                    {12000}
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
