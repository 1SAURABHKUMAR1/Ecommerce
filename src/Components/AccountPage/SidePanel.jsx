import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidePanel = () => {
    const path = useLocation()?.pathname;

    return (
        <>
            <div className="sticky top-16 order-2 flex w-full flex-col md:order-1  md:pl-0 md:pt-0">
                <ul className="scrollbar-hide container mx-auto flex flex-row justify-between overflow-x-auto whitespace-nowrap border-b text-sm md:flex-col md:border-b-0 md:pb-4 md:text-base">
                    <li className="mr-1">
                        <Link
                            to="/account/profile"
                            className={`-mb-px block w-full border-b-[3px] border-transparent  px-4 py-3 text-left font-semibold hover:border-b-indigo-400  md:border-[2px] ${
                                path === '/account/profile' &&
                                'border-b-indigo-400 md:rounded-md md:border-indigo-400'
                            }`}
                        >
                            Profile
                        </Link>
                    </li>
                    <li className="mr-1">
                        <Link
                            to="/account/orders"
                            className={`-mb-px block w-full border-b-[3px] border-transparent  px-4 py-3 text-left font-semibold hover:border-b-indigo-400 md:border-[2px] ${
                                path === '/account/orders' &&
                                'border-b-indigo-400 md:rounded-md md:border-indigo-400'
                            }`}
                        >
                            Orders
                        </Link>
                    </li>
                    <li className="mr-1">
                        <Link
                            to="/account/support"
                            className={`-mb-px block w-full border-b-[3px] border-transparent px-4  py-3 text-left font-semibold hover:border-b-indigo-400 md:border-[2px]  ${
                                path === '/account/support' &&
                                'border-b-indigo-400 md:rounded-md md:border-indigo-400'
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
