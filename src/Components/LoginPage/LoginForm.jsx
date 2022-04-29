import { useState } from 'react';
import { useAuthProvider } from '../../Context/Auth/AuthProvider';

import FormButton from '../UI/Button/FormButton';
import TextField from '../UI/InputField/TextField';
import PasswordField from '../UI/InputField/PasswordField';
import LoaderButton from '../UI/Loader/LoaderButton';

import ErrorToast from '../../Toast/ErrorToast';
import SuccessToast from '../../Toast/SuccessToast';

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const initalUserDetails = {
    email: '',
    password: '',
};

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const [userDetails, setUserDetails] = useState(initalUserDetails);
    const { userAuth, userAuthDispatch } = useAuthProvider();
    const navigate = useNavigate();

    const setInputFieldData = (event) => {
        const userDetail = event.target.name;
        const userValue = event.target.value;

        setUserDetails((oldUserDetails) => {
            return {
                ...oldUserDetails,
                [userDetail]: userValue,
            };
        });
    };

    const handleLogin = async () => {
        try {
            setLoading(true);
            let { data } = await axios.post(
                `${process.env.REACT_APP_API_URL}/login`,
                userDetails,
                { Accept: 'application/json' },
            );

            setTimeout(() => {
                userAuthDispatch({
                    type: 'login',
                    payload: data,
                });
                setUserDetails(initalUserDetails);
                setLoading(false);
                SuccessToast('Login Success');

                //TODO: navigate to where it came from
                navigate('/');
            }, 1500);
        } catch (error) {
            if (error.response) {
                error.response.status === 403 ? (
                    ErrorToast(error.response.data.message)
                ) : (
                    <></>
                );
            } else {
                ErrorToast('Login Failed');
            }

            console.log(error);
            setLoading(false);
            setUserDetails(initalUserDetails);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogin();
    };

    useEffect(() => {
        if (userAuth.login === true) {
            navigate('/');
        }
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <form
                className="w-5/6 max-w-sm space-y-4 sm:space-y-6"
                method="POST"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
            >
                <h1 className="mt-6 mb-8 text-center text-3xl font-bold tracking-tight text-indigo-500">
                    Sign In
                </h1>

                <TextField
                    htmlFor={'email'}
                    labelTitle={'Email'}
                    type={'email'}
                    placeHolder={'test@gmail.com'}
                    value={userDetails.email}
                    onChange={setInputFieldData}
                    id={'email'}
                    name={'email'}
                />

                <PasswordField
                    value={userDetails.password}
                    onChange={setInputFieldData}
                    name={'password'}
                />

                {loading ? (
                    <LoaderButton />
                ) : (
                    <FormButton buttonText={'Login'} />
                )}

                <div className="text-md cursor-pointer text-right text-gray-700 hover:text-gray-500">
                    <Link to="/forgotpassword">Forgot Password</Link>
                </div>
            </form>
        </>
    );
};

export default LoginForm;
