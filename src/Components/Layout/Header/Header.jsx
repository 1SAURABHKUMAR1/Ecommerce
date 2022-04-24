import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

import HeaderBoxDesktop from './HeaderBox/HeaderBoxDesktop';
import HeaderBoxMobile from './HeaderBox/HeaderBoxMobile';
import { useAuthProvider } from '../../../Context/Auth/AuthProvider';

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { userAuth } = useAuthProvider();

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <>
            <header className="sticky top-0 z-50 bg-indigo-500 px-4 pb-1 sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center justify-between px-2 py-3">
                    <div>
                        <NavLink
                            to="/"
                            className="text-xl font-semibold text-white outline-none focus:text-gray-100"
                        >
                            Ecommerce
                        </NavLink>
                    </div>

                    <div className="sm:hidden">
                        <button
                            type="button"
                            className="block fill-current text-white hover:text-white focus:text-white focus:outline-none"
                            onClick={handleToggle}
                        >
                            {navbarOpen ? (
                                <FontAwesomeIcon
                                    icon={faXmark}
                                    className="m-auto block h-6 w-6 fill-current"
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faBars}
                                    className="m-auto block h-5 w-5 fill-current"
                                />
                            )}
                        </button>
                    </div>
                </div>

                <nav
                    className={`pt-2 pb-4 ease-in-out sm:flex sm:items-center sm:p-0 sm:py-2 sm:pl-4
                     ${navbarOpen ? 'block' : 'hidden'}`}
                >
                    {!userAuth.login && (
                        <>
                            <NavLink
                                to="/signup"
                                onClick={() =>
                                    handleToggle
                                        ? setNavbarOpen(false)
                                        : setNavbarOpen(true)
                                }
                                className="mt-1 block rounded py-1 px-2 text-lg font-semibold text-gray-50 hover:rounded hover:bg-slate-200 hover:text-gray-800 focus:rounded focus:bg-slate-200 focus:text-gray-800 focus:outline-none sm:mr-3 sm:bg-indigo-400 sm:px-3 sm:font-medium sm:hover:rounded sm:hover:bg-gray-100 sm:hover:text-indigo-500 sm:focus:bg-gray-100 sm:focus:text-indigo-500"
                            >
                                Signup
                            </NavLink>
                            <NavLink
                                to="/login"
                                onClick={() =>
                                    handleToggle
                                        ? setNavbarOpen(false)
                                        : setNavbarOpen(true)
                                }
                                className="mt-1 block rounded py-1 px-2 text-lg font-semibold text-gray-50 hover:rounded hover:bg-slate-200 hover:text-gray-800 focus:bg-slate-200 focus:text-gray-800 focus:outline-none sm:px-3 sm:font-medium sm:hover:bg-indigo-500 sm:hover:text-gray-50 sm:focus:bg-indigo-500 sm:focus:text-gray-50"
                            >
                                Login
                            </NavLink>
                        </>
                    )}

                    {userAuth.login && (
                        <NavLink
                            to="/cart"
                            onClick={() =>
                                handleToggle
                                    ? setNavbarOpen(false)
                                    : setNavbarOpen(true)
                            }
                            className="mt-1 block rounded py-1 px-2 text-lg font-semibold text-gray-50 hover:rounded hover:bg-slate-200 hover:text-gray-800 focus:bg-slate-200 focus:text-gray-800 focus:outline-none sm:px-3 sm:font-medium sm:hover:bg-indigo-500 sm:hover:text-gray-50 sm:focus:bg-indigo-500 sm:focus:text-gray-50"
                        >
                            Cart
                        </NavLink>
                    )}

                    <NavLink
                        to="/products"
                        onClick={() =>
                            handleToggle
                                ? setNavbarOpen(false)
                                : setNavbarOpen(true)
                        }
                        className="mt-1 block rounded py-1 px-2 text-lg font-semibold text-gray-50 hover:rounded hover:bg-slate-200 hover:text-gray-800 focus:bg-slate-200 focus:text-gray-800 focus:outline-none sm:px-3 sm:font-medium sm:hover:bg-indigo-500 sm:hover:text-gray-50 sm:focus:bg-indigo-500 sm:focus:text-gray-50"
                    >
                        Product
                    </NavLink>

                    {userAuth.login && (
                        <HeaderBoxMobile handleToggle={handleToggle} />
                    )}

                    {userAuth.login && (
                        <HeaderBoxDesktop
                            handleToggle={handleToggle}
                            navbarOpen={navbarOpen}
                            setNavbarOpen={setNavbarOpen}
                        />
                    )}
                </nav>
            </header>
        </>
    );
};

export default Header;
