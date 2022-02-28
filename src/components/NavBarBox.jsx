import React from 'react';

const NavbarBox = () => {
    return (
        <>
            <a
                href="/"
                className="block px-2 py-2 text-gray-900 hover:rounded hover:bg-slate-200"
            >
                Account Settings
            </a>
            <a
                href="/"
                className="block px-2 py-2 text-gray-900 hover:rounded hover:bg-slate-200"
            >
                My Orders
            </a>
            <a
                href="/"
                className="block px-2 py-2 text-gray-900 hover:rounded hover:bg-slate-200"
            >
                Logout
            </a>
        </>
    );
};

export default NavbarBox;
