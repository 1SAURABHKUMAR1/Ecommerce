import React, { useState } from 'react';

import NavbarBox from '../components/NavBar/NavBarBox';
import SearchBox from '../components/NavBar/SearchBox';

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <>
            <header className="bg-indigo-500 sm:flex sm:items-center sm:justify-between pb-1 px-4">
                <div className="px-2 py-3 flex items-center justify-between">
                    <div>
                        <span className="text-white font-semibold text-xl">
                            Ecommerce
                        </span>
                    </div>

                    <div className="sm:hidden">
                        <button
                            type="button"
                            className="block text-gray-200 fill-current focus:outline-none focus:text-white hover:text-white"
                            onClick={handleToggle}
                        >
                            <svg
                                className="h-6 w-6 fillCurrent"
                                viewBox="0 0 24 24"
                            >
                                {navbarOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                <SearchBox display={'sm'} />

                <nav
                    className={`pt-2 pb-4 ease-in-out sm:flex sm:p-0 sm:px-4 sm:py-2 sm:items-center
                     ${navbarOpen ? 'block' : 'hidden'}`}
                >
                    <a
                        href="/"
                        className="block text-white font-semibold text-lg mt-1 py-1 px-2  hover:bg-gray-100 hover:text-black hover:rounded rounded"
                    >
                        Product
                    </a>

                    <div className="relative sm:block hidden">
                        <button
                            onClick={handleToggle}
                            type="button"
                            className="z-10 relative block h-8 w-8 mx-4 rounded-full overflow-hidden focus:outline-none"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
                                alt="avatar"
                                className="h-full w-full object-cover"
                            />
                        </button>

                        <button
                            tabIndex="-1"
                            className={`fixed bg-black opacity-40 inset-0 cursor-default ${
                                navbarOpen ? 'block' : 'hidden'
                            }`}
                            onClick={() => setNavbarOpen(false)}
                        ></button>

                        <div
                            className={`absolute right-0 mt-4 py-2 px-2 border-1 w-48 bg-white rounded shadow-xl ${
                                navbarOpen ? 'block' : 'hidden'
                            }`}
                        >
                            <NavbarBox />
                        </div>
                    </div>

                    <div className="relative sm:hidden mt-6">
                        <div type="button" className="flex items-center">
                            <img
                                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
                                alt="avatar"
                                className="h-8 w-8 mx-2 rounded-full object-cover overflow-hidden focus:outline-none"
                            />
                            <span className="text-white font-semibold mx-3 cursor-default">
                                Joe James
                            </span>
                        </div>

                        <div className="mt-3">
                            <a
                                href="/"
                                className="block px-2 py-2 mt-1 text-white font-semibold hover:bg-gray-100 hover:text-black hover:rounded"
                            >
                                Account Settings
                            </a>
                            <a
                                href="/"
                                className="block px-2 py-2 mt-1 text-white font-semibold  hover:bg-gray-100 hover:text-black hover:rounded"
                            >
                                My Orders
                            </a>
                            <a
                                href="/"
                                className="block px-2 py-2 mt-1 text-white font-semibold  hover:bg-gray-100 hover:text-black hover:rounded"
                            >
                                Logout
                            </a>
                        </div>
                    </div>
                </nav>

                {!navbarOpen && <SearchBox display={'mobile'} />}
            </header>
        </>
    );
};

export default Header;
