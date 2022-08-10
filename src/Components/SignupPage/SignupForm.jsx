import { useEffect, useState } from 'react';
import { useAuthProvider } from '../../Context/Auth/AuthProvider';

import FormButton from '../UI/Button/FormButton';
import TextField from '../UI/InputField/TextField';
import PasswordField from '../UI/InputField/PasswordField';

import ErrorToast from '../../Toast/ErrorToast';
import SuccessToast from '../../Toast/SuccessToast';

import { useNavigate } from 'react-router-dom';

import './FormInputButton.module.css';
import LoaderButton from '../UI/Loader/LoaderButton';

import Axios from '../../Utils/Axios';

const initalUserDetails = {
    name: '',
    email: '',
    password: '',
    photo: '',
};

const SignupForm = () => {
    const [userDetails, setUserDetails] = useState(initalUserDetails);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { userAuth, userAuthDispatch } = useAuthProvider();

    const setInputFieldData = (event) => {
        const userDetail = event.target.name;
        const userValue = event.target.value;

        setUserDetails((oldData) => {
            return {
                ...oldData,
                [userDetail]:
                    userDetail === 'photo' ? event.target.files[0] : userValue,
            };
        });
    };

    const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

    const handleSignup = async () => {
        if (
            userDetails.email.match(emailRegex) &&
            userDetails.password.match(passwordRegex)
        ) {
            const formData = new FormData();
            formData.append('photo', userDetails.photo);
            formData.append('name', userDetails.name);
            formData.append('email', userDetails.email);
            formData.append('password', userDetails.password);

            try {
                setLoading(true);
                let { data } = await Axios.post('/signup', formData);

                setTimeout(() => {
                    userAuthDispatch({
                        type: 'login',
                        payload: data,
                    });
                    SuccessToast('Signup Success');
                    navigate('/');
                }, 1500);
            } catch (error) {
                if (error.response) {
                    error.response.status === 403 &&
                        ErrorToast(error.response.data.message);
                } else {
                    ErrorToast('Signup Failed');
                }

                console.log(error);
                setLoading(false);
            }
        } else {
            ErrorToast('Enter a strong password');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSignup();
    };

    useEffect(() => {
        if (userAuth.login === true) {
            navigate('/');
        }

        return () => {
            setUserDetails(initalUserDetails);
            setLoading(false);
        };
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
                    Create an account
                </h1>

                <TextField
                    htmlFor={'name'}
                    labelTitle={'Name'}
                    type={'text'}
                    placeHolder={'test Kumar'}
                    value={userDetails.name}
                    onChange={setInputFieldData}
                    name={'name'}
                    id={'name'}
                />

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

                <div>
                    <label
                        htmlFor="profilephoto"
                        className="mb-1 block font-semibold tracking-wide text-gray-600"
                    >
                        Profile Photo
                    </label>
                    <input
                        type="file"
                        id="photo"
                        required
                        aria-required
                        file={userDetails.photo}
                        name={'photo'}
                        onChange={setInputFieldData}
                        className="w-full rounded-md border-[1.5px] border-gray-300 outline-none focus:border-indigo-400 focus:outline-none"
                    />
                </div>

                <div className="flex items-center gap-2 ">
                    <input
                        type="checkbox"
                        name=""
                        id="agree"
                        required
                        aria-required
                        className="rounded focus:outline-none focus:outline-indigo-500"
                    />
                    <label
                        htmlFor="agree"
                        className="text-md ml-2 text-gray-700"
                    >
                        I agree to terms and condition
                    </label>
                </div>

                {loading ? (
                    <LoaderButton />
                ) : (
                    <FormButton buttonText={'Signup'} />
                )}
            </form>
        </>
    );
};

export default SignupForm;
