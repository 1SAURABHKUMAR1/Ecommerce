import React from 'react';
import Form from '../../components/NavBar/Form';

const SignUp = () => {
    return (
        <>
            <div className="mx-4 mb-8 mt-4 flex items-center justify-center py-5 sm:mx-6 sm:px-4">
                <div className="flex w-full items-center justify-center lg:w-3/5">
                    <div className="flex w-full max-w-xl items-center justify-center rounded bg-white pb-10 shadow-2xl lg:p-8">
                        <Form
                            header={'Signup'}
                            name={true}
                            photo={true}
                            buttonText={'Sign Up'}
                        />
                    </div>
                </div>
                <div className="m-auto hidden w-full max-w-md lg:block lg:w-2/5">
                    <img
                        src="/images/signup.svg"
                        alt=""
                        className="m-auto block w-5/6"
                    />
                </div>
            </div>
        </>
    );
};

export default SignUp;
