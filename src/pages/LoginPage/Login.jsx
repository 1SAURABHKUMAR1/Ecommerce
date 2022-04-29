import { useEffect, useState } from 'react';
import LoaderMain from '../../Components/UI/Loader/LoaderMain/LoaderMain';

import LoginForm from '../../Components/LoginPage/LoginForm';

import useScrollToTop from '../../Hooks/useScrollToTop';

import login from '../../Data/Svg/login.svg';

const Signin = () => {
    useScrollToTop();

    const [loading, setLoading] = useState(false);

    const loadingHandler = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1700);
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        loadingHandler();
    }, []);

    return (
        <>
            {loading ? (
                <>
                    <LoaderMain />
                </>
            ) : (
                <div className="flex flex-1 flex-col justify-center bg-gray-50">
                    <div className="mx-4 mt-4 flex items-center justify-center py-5 sm:mx-6 sm:px-4">
                        <div className="flex w-full items-center justify-center lg:w-3/5">
                            <div className="flex w-full max-w-xl items-center justify-center rounded bg-white pb-10 shadow-2xl lg:p-8">
                                <LoginForm />
                            </div>
                        </div>
                        <div className="m-auto hidden w-full max-w-md lg:block lg:w-2/5">
                            <img
                                loading="lazy"
                                src={login}
                                alt=""
                                className="m-auto block h-80"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Signin;
