import { useState, useEffect } from 'react';

import useScrollToTop from '../../Hooks/useScrollToTop';
import { useAuthProvider } from '../../Context/Auth/AuthProvider';

import ComponentLoader from '../../Components/UI/Loader/LoaderComponent';

import { RiCake2Fill } from 'react-icons/ri';
import date from 'date-and-time';
import Axios from '../../Utils/Axios';

const Profile = () => {
    const [userInfo, setUserInfo] = useState({
        user: { name: '', photo: '', createdAt: 0 },
        cart: 0,
        order: 0,
    });
    const { userAuth } = useAuthProvider();
    const [loadingState, setLoadingState] = useState('IDLE');

    useScrollToTop();

    const getUserProfile = async (controller, unMounted) => {
        try {
            setLoadingState('LOADING');
            const { data } = await Axios.get(`/my-profile`, {
                signal: controller.signal,
                headers: {
                    Authorization: `Bearer ${userAuth.token}`,
                },
            });

            if (data.success && !unMounted) {
                setUserInfo({
                    user: {
                        name: data.user.name,
                        photo: data.user.photo.secure_url,
                        createdAt: date.format(
                            new Date(data.user.createdAt),
                            'DD MM YYYY',
                        ),
                    },
                    cart: data.cart?.cartItems?.length ?? 0,
                    order: data.order?.length ?? 0,
                });
                setLoadingState('FULFILED');
            } else {
                setLoadingState('REJECTED');
            }
        } catch (error) {
            console.log(error);
            setLoadingState('REJECTED');
        }
    };

    useEffect(() => {
        let unMounted = false;
        const controller = new AbortController();

        getUserProfile(controller, unMounted);

        return () => {
            unMounted = true;
            controller.abort();
            setLoadingState('IDLE');
            // setUserInfo
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loadingState === 'LOADING') {
        return (
            <>
                <ComponentLoader />
            </>
        );
    } else if (loadingState === 'REJECTED') {
        return (
            <>
                <div className="my-4 flex w-full flex-1 flex-col items-center justify-center bg-gray-50">
                    <h1 className="mb-5 text-center text-xl font-medium tracking-wide text-gray-400">
                        Something Went Wrong
                    </h1>
                </div>
            </>
        );
    }
    return (
        <>
            <main className="m-0 flex w-full flex-1 flex-col scroll-smooth">
                <div className="profile-user-info rounded">
                    <div className="mx-0 my-auto w-full max-w-5xl p-4 md:pt-12">
                        <header className="box-shadow-profile mt-6 break-words rounded-md bg-inherit bg-slate-50 p-2 text-center text-black md:mt-2">
                            <div className="relative mt-[-2rem] md:mt-[-3rem] md:mb-2">
                                <div className="inline-block h-16 w-16 overflow-hidden rounded-full bg-black p-1 md:ml-0 md:h-20 md:w-20 md:p-2">
                                    <img
                                        src={userInfo.user?.photo}
                                        className="h-full w-full rounded-full object-contain"
                                        alt=""
                                        width="128"
                                        height="128"
                                    />
                                </div>
                            </div>
                            <div className="p-4">
                                <h1 className="mb-[0.3rem] inline-block items-center text-center text-3xl font-black text-black md:mb-3">
                                    {userInfo.user?.name}
                                </h1>
                                <div className="mb-2 flex flex-wrap items-center justify-center gap-2 whitespace-nowrap p-2 text-[0.76rem] text-sm text-gray-800 md:text-sm">
                                    <>
                                        <span>
                                            <RiCake2Fill
                                                className="h-5 w-5 fill-current"
                                                style={{
                                                    marginRight: '0.1rem',
                                                }}
                                            />
                                        </span>
                                        <span>
                                            Joined on {userInfo.user.createdAt}
                                        </span>
                                    </>
                                </div>
                            </div>

                            <div className="flex flex-row justify-evenly border-t-[1px] border-gray-300 p-[0.7rem] pb-2 text-center text-[0.8rem] md:p-[0.9rem]">
                                <div>
                                    <strong className="font-semibold text-[#717171]">
                                        Cart Items
                                    </strong>
                                    <p className="text-gray-900">
                                        {userInfo.cart}
                                    </p>
                                </div>
                                <div>
                                    <strong className="font-semibold text-[#717171]">
                                        Orders
                                    </strong>
                                    <p className="text-gray-900">
                                        {userInfo.order}
                                    </p>
                                </div>
                            </div>
                        </header>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Profile;
