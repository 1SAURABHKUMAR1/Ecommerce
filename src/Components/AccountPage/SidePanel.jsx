import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidePanel = () => {
    const path = useLocation()?.pathname;

    return (
        <>
            <div className="sticky top-16 order-2 flex w-full flex-col md:order-1  md:pl-0 md:pt-0">
                <ul className="scrollbar-hide container mx-auto flex flex-row justify-between overflow-x-auto whitespace-nowrap border-b text-sm md:flex-col md:gap-2 md:rounded-md md:border-b-0 md:bg-indigo-50  md:px-[0.4rem] md:py-[0.6rem] md:text-base">
                    <li className="mr-1 md:m-0">
                        <Link
                            to="/account/profile"
                            className={`-mb-px block w-full border-b-[3px] border-transparent px-4 py-3 text-left font-medium hover:border-b-indigo-400 md:rounded-md md:border-0 md:text-indigo-600  hover:md:border-0 hover:md:bg-indigo-100  ${
                                path === '/account/profile' &&
                                'border-b-indigo-400 md:rounded-md md:border-0 md:bg-indigo-500 md:text-white hover:md:bg-indigo-500 '
                            }`}
                        >
                            Profile
                        </Link>
                    </li>
                    <li className="mr-1 md:m-0">
                        <Link
                            to="/account/orders"
                            className={`-mb-px block w-full border-b-[3px] border-transparent px-4 py-3 text-left font-medium hover:border-b-indigo-400 md:rounded-md md:border-0 md:text-indigo-600 hover:md:border-0  hover:md:bg-indigo-100 ${
                                path === '/account/orders' &&
                                'border-b-indigo-400 md:rounded-md md:border-0 md:bg-indigo-500 md:text-white hover:md:bg-indigo-500'
                            }`}
                        >
                            Orders
                        </Link>
                    </li>
                    <li className="mr-1 md:m-0">
                        <Link
                            to="/account/support"
                            className={`-mb-px block w-full border-b-[3px] border-transparent px-4 py-3 text-left font-medium hover:border-b-indigo-400 md:rounded-md md:border-0 md:text-indigo-600  hover:md:border-0 hover:md:bg-indigo-100 ${
                                path === '/account/support' &&
                                'border-b-indigo-400 md:rounded-md md:border-0 md:bg-indigo-500 md:text-white hover:md:bg-indigo-500'
                            }
                        }`}
                        >
                            Support
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default SidePanel;
