import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthProvider } from '../../../../Context/Auth/AuthProvider';

import SuccessToast from '../../../../Toast/SuccessToast';
const HeaderBoxMobile = ({ handleToggle }) => {
    const { userAuth, userAuthDispatch } = useAuthProvider();
    const navigate = useNavigate('/');
    const [profilePhoto, setProfilePhoto] = useState('');
    const [userName, setUserName] = useState('');

    const logoutUser = () => {
        userAuthDispatch({
            type: 'logout',
        });

        SuccessToast('Logout Success');
        handleToggle();
        navigate('/');
    };

    useEffect(() => {
        setProfilePhoto(userAuth.user.photo ?? '');
        setUserName(userAuth.user.name ?? '');
    }, [userAuth]);
    return (
        <>
            <div className="relative mt-6 sm:hidden">
                <div className="flex items-center">
                    <img
                        src={profilePhoto}
                        alt="avatar"
                        loading="lazy"
                        className="mx-2 h-8 w-8 overflow-hidden rounded-full object-cover focus:outline-none"
                    />
                    <span className="mx-3 cursor-default font-semibold text-white">
                        {userName}
                    </span>
                </div>

                <div className="mt-3">
                    <NavLink
                        to="/"
                        onClick={handleToggle}
                        className="mt-1 block px-2 py-2 font-semibold text-white hover:rounded hover:bg-slate-50 hover:text-gray-800"
                    >
                        Account Settings
                    </NavLink>

                    <NavLink
                        to="/"
                        onClick={handleToggle}
                        className="mt-1 block px-2 py-2 font-semibold text-white  hover:rounded hover:bg-slate-50 hover:text-gray-800"
                    >
                        My Orders
                    </NavLink>

                    <NavLink
                        to="/"
                        onClick={logoutUser}
                        className="mt-1 block px-2 py-2 font-semibold text-white  hover:rounded hover:bg-slate-50 hover:text-gray-800"
                    >
                        Logout
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default HeaderBoxMobile;
