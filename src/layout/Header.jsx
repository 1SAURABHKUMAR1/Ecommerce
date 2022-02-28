import React, { useState } from 'react';

import NavbarBox from '../components/NavBarBox';

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <>
            <header className="bg-indigo-500 px-4 pb-1 sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center justify-between px-2 py-3">
                    <div>
                        <a
                            href="/"
                            className="text-xl font-semibold text-white"
                        >
                            Ecommerce
                        </a>
                    </div>

                    <div className="sm:hidden">
                        <button
                            type="button"
                            className="block fill-current text-gray-200 hover:text-white focus:text-white focus:outline-none"
                            onClick={handleToggle}
                        >
                            <svg
                                className="fillCurrent h-6 w-6"
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

                <nav
                    className={`pt-2 pb-4 ease-in-out sm:flex sm:items-center sm:p-0 sm:py-2 sm:pl-4
                     ${navbarOpen ? 'block' : 'hidden'}`}
                >
                    <a
                        href="/signup"
                        className="mt-1 block rounded py-1 px-2 text-lg font-semibold text-gray-50 hover:rounded hover:bg-slate-200 hover:text-gray-800 sm:mr-3 sm:bg-indigo-400 sm:px-3 sm:font-medium sm:hover:rounded sm:hover:bg-gray-100 sm:hover:text-indigo-500"
                    >
                        Signup
                    </a>

                    <a
                        href="/login"
                        className="mt-1 block rounded py-1 px-2 text-lg font-semibold text-gray-50 hover:rounded hover:bg-slate-200 hover:text-gray-800 sm:px-3 sm:font-medium sm:hover:bg-indigo-500 sm:hover:text-gray-50"
                    >
                        Login
                    </a>
                    <a
                        href="/category"
                        className="mt-1 block rounded py-1 px-2 text-lg font-semibold text-gray-50 hover:rounded hover:bg-slate-200 hover:text-gray-800 sm:px-3  sm:font-medium sm:hover:bg-indigo-500 sm:hover:text-gray-50"
                    >
                        Product
                    </a>

                    <div className="relative hidden sm:block">
                        <button
                            onClick={handleToggle}
                            type="button"
                            className="relative z-10 mx-4 block h-8 w-8 overflow-hidden rounded-full focus:outline-none"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
                                alt="avatar"
                                className="h-full w-full object-cover"
                            />
                        </button>

                        <button
                            tabIndex="-1"
                            className={`fixed inset-0 z-20 cursor-default bg-black opacity-40 ${
                                navbarOpen ? 'block' : 'hidden'
                            }`}
                            onClick={() => setNavbarOpen(false)}
                        ></button>

                        <div
                            className={`border-1 absolute right-0 mt-4 w-48 rounded bg-white py-2 px-2 shadow-xl ${
                                navbarOpen ? 'block' : 'hidden'
                            } z-20`}
                        >
                            <NavbarBox />
                        </div>
                    </div>

                    <div className="relative mt-6 sm:hidden">
                        <div type="button" className="flex items-center">
                            <img
                                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
                                alt="avatar"
                                className="mx-2 h-8 w-8 overflow-hidden rounded-full object-cover focus:outline-none"
                            />
                            <span className="mx-3 cursor-default font-semibold text-white">
                                Joe James
                            </span>
                        </div>

                        <div className="mt-3">
                            <a
                                href="/"
                                className="mt-1 block px-2 py-2 font-semibold text-white hover:rounded hover:bg-slate-50 hover:text-gray-800"
                            >
                                Account Settings
                            </a>
                            <a
                                href="/"
                                className="mt-1 block px-2 py-2 font-semibold text-white  hover:rounded hover:bg-slate-50 hover:text-gray-800"
                            >
                                My Orders
                            </a>
                            <a
                                href="/"
                                className="mt-1 block px-2 py-2 font-semibold text-white  hover:rounded hover:bg-slate-50 hover:text-gray-800"
                            >
                                Logout
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
