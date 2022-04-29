import { useState, useEffect } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthProvider } from '../../../../Context/Auth/AuthProvider';

import SuccessToast from '../../../../Toast/SuccessToast';

const NavbarBoxDesktop = ({ handleToggle, navbarOpen, setNavbarOpen }) => {
    const { userAuth, userAuthDispatch } = useAuthProvider();
    const navigate = useNavigate('/');
    const [profilePhoto, setProfilePhoto] = useState('');

    const logoutUser = () => {
        userAuthDispatch({
            type: 'logout',
        });

        SuccessToast('Logout Success');
        setNavbarOpen(false);
        setTimeout(() => {
            navigate('/');
        }, 1500);
    };

    useEffect(() => {
        setProfilePhoto(userAuth.user.photo);
    }, [userAuth]);

    return (
        <>
            <div className="relative hidden sm:block">
                <button
                    onClick={handleToggle}
                    type="button"
                    className="relative z-10 mx-4 block h-8 w-8 overflow-hidden rounded-full focus:outline-none"
                >
                    <img
                        src={profilePhoto}
                        alt="avatar"
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                </button>

                <button
                    tabIndex="-1"
                    className={`fixed inset-0 z-20 cursor-default bg-black opacity-40 ${
                        navbarOpen ? 'block' : 'hidden'
                    }`}
                    onClick={handleToggle}
                ></button>

                <div
                    className={`border-1 absolute right-0 mt-4 w-48 rounded bg-white py-2 px-2 shadow-xl ${
                        navbarOpen ? 'block' : 'hidden'
                    } z-20`}
                >
                    <NavLink
                        to="/"
                        onClick={handleToggle}
                        className="block px-2 py-2 text-gray-900 hover:rounded hover:bg-slate-200"
                    >
                        Account Settings
                    </NavLink>

                    <NavLink
                        to="/orders"
                        onClick={handleToggle}
                        className="block px-2 py-2 text-gray-900 hover:rounded hover:bg-slate-200"
                    >
                        My Orders
                    </NavLink>

                    <NavLink
                        to="/"
                        className="block px-2 py-2 text-gray-900 hover:rounded hover:bg-slate-200"
                        onClick={logoutUser}
                    >
                        Logout
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default NavbarBoxDesktop;
