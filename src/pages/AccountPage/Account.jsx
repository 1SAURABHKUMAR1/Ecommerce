import { useEffect, useState } from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import useScrollToTop from '../../Hooks/useScrollToTop';
import SidePanel from '../../Components/AccountPage/SidePanel';

import { useAuthProvider } from '../../Context/Auth/AuthProvider';

const Account = () => {
    useScrollToTop();

    const [heading, setHeading] = useState();
    const path = useLocation()?.pathname;
    const { userAuth } = useAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const handleHanding = () => {
        if (path === '/account/profile') {
            setHeading('Profile Settings');
        } else if (path === '/account/orders') {
            setHeading('My Orders');
        } else if (path === '/account/support') {
            setHeading('Support');
        }
    };

    useEffect(() => {
        handleHanding();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]);

    useEffect(() => {
        if (!userAuth.login) {
            navigate('/login', { state: { from: location.pathname } });
        } else if (
            location.pathname === '/account' ||
            location.pathname === '/account/'
        ) {
            navigate('/account/profile');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {
                <div className="m-0 flex w-full flex-1 flex-col bg-gray-50">
                    <div className="container my-8 mx-auto h-full  w-full flex-1 px-4  md:max-w-screen-lg lg:max-w-screen-xl lg:px-6">
                        <h1 className="mb-8 text-center text-2xl font-semibold tracking-tight text-gray-700 md:text-3xl">
                            {/* {path === 'order' ? 'order' : ''}  */}
                            {heading}
                        </h1>
                        <div className="flex h-full w-full flex-wrap">
                            <div className="w-full md:w-1/5 lg:w-1/6">
                                <SidePanel />
                            </div>
                            <div className="mt-3 w-full py-4 md:w-4/5 md:px-8 md:py-2 lg:w-5/6 lg:px-10 lg:py-4">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Account;
