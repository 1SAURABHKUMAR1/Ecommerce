import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const CartProductCard = () => {
    return (
        <>
            <div className="mb-3 flex w-full flex-col items-center justify-center bg-white">
                <div className="relative mx-1 flex w-full space-x-2 rounded border-2 p-3.5 px-1.5 shadow-sm sm:space-x-4">
                    <div className="flex h-auto w-48 items-center justify-center px-1.5 py-2 sm:w-48  md:w-60">
                        <img
                            src="/images/1.png"
                            className="h-24 w-32 object-contain sm:h-28 sm:w-48 md:w-56"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div className="flex w-full flex-col items-center justify-between space-y-4 pr-2 sm:space-y-0">
                        <div className="flex w-full flex-col justify-between space-y-2 sm:h-[70%] sm:flex-row sm:space-y-0 md:mb-3 lg:mb-0">
                            <h2 className="max-h-[6rem] w-full flex-wrap overflow-hidden font-medium">
                                GoPr Front LCD and ToucackMP. 3MP.
                            </h2>
                            <h2 className="w-full sm:mt-0 sm:text-right">
                                ₹ <span className="font-medium">{12000}</span>
                            </h2>
                        </div>
                        <div className="flex w-full items-center justify-between sm:h-[30%]">
                            <button className="items-center justify-center rounded bg-indigo-600 px-2 py-1 text-sm font-medium text-gray-50 sm:text-base">
                                Remove
                            </button>
                            <div className="flex">
                                <div className="mr-1.5 h-6 w-6 cursor-pointer  rounded-full bg-indigo-600 text-center">
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                        className="text-white"
                                    />
                                </div>
                                <span className="min-w-[20px] text-center font-semibold">
                                    {1}
                                </span>
                                <div className="mr-1.5 h-6 w-6 cursor-pointer  rounded-full bg-indigo-600 text-center">
                                    <FontAwesomeIcon
                                        icon={faMinus}
                                        className="text-white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartProductCard;
