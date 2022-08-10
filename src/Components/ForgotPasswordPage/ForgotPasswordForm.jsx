import { useState } from 'react';
import { useAuthProvider } from '../../Context/Auth/AuthProvider';

import FormButton from '../UI/Button/FormButton';
import LoaderButton from '../UI/Loader/LoaderButton';
import TextField from '../UI/InputField/TextField';

import ErrorToast from '../../Toast/ErrorToast';
import SuccessToast from '../../Toast/SuccessToast';

import { useNavigate } from 'react-router-dom';

import Axios from '../../Utils/Axios';
import { useEffect } from 'react';

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const { userAuth } = useAuthProvider();
    const navigate = useNavigate();

    const handleForgotPassword = async () => {
        try {
            setLoading(true);

            await Axios.post('/forgotpassword', { email });

            setLoading(false);
            SuccessToast('Token Send Success');
            navigate('/');
        } catch (error) {
            if (error.response) {
                error.response.status === 400 &&
                    ErrorToast(error.response.data.message);
            } else {
                ErrorToast('Token Send Failed');
            }

            console.log(error);
            setLoading(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleForgotPassword();
    };

    useEffect(() => {
        if (userAuth.login === true) {
            navigate('/');
        }

        return () => {
            setEmail('');
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
                <h1 className="mt-6 mb-6 text-center text-3xl font-bold tracking-tight text-indigo-500">
                    Forgot Password
                </h1>

                <TextField
                    htmlFor={'email'}
                    labelTitle={'Email'}
                    type={'email'}
                    placeHolder={'test@gmail.com'}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    id={'email'}
                    name={'email'}
                />

                {loading ? (
                    <LoaderButton />
                ) : (
                    <FormButton buttonText={'Get Reset Link'} />
                )}
            </form>
        </>
    );
};

export default ForgotPasswordForm;
