import React from 'react';

const NavbarBox = () => {
    return (
        <>
            <a
                href="/"
                className="block px-2 py-2 text-gray-800 hover:bg-gray-400 hover:text-white  hover:rounded "
            >
                Account Settings
            </a>
            <a
                href="/"
                className="block px-2 py-2 text-gray-800 hover:bg-gray-400 hover:text-white hover:rounded "
            >
                My Orders
            </a>
            <a
                href="/"
                className="block px-2 py-2 text-gray-800 hover:bg-gray-400 hover:text-white hover:rounded "
            >
                Logout
            </a>
        </>
    );
};

export default NavbarBox;
