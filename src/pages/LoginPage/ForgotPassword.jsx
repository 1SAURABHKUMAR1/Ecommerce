import React from 'react';

const ForgotPassword = () => {
    return (
        <div className="m-0 flex flex-1 flex-col justify-center bg-gray-50">
            <div className="mx-4 flex items-center justify-center py-5 sm:mx-6 sm:px-4">
                <div className="flex w-full items-center justify-center lg:w-3/5">
                    <div className="flex w-full max-w-xl items-center justify-center rounded bg-white pb-10 shadow-2xl lg:p-8">
                        <form
                            action=""
                            className="w-5/6 max-w-sm space-y-4 sm:space-y-6"
                            method=""
                            encType="multipart/form-data"
                        >
                            <h1 className="mt-6 mb-8 text-center text-3xl font-bold tracking-tight text-indigo-500">
                                Forgot Password
                            </h1>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-lg font-semibold tracking-wide text-gray-600"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="test@gmail.com"
                                    className="mt-1 w-full rounded-md border-2 border-gray-300 p-2 px-4 outline-none focus:border-indigo-400 focus:outline-none"
                                />
                            </div>

                            <button className="text-md block w-full rounded bg-indigo-600 px-4 py-3 font-semibold  tracking-wider text-white transition duration-300 ease-in-out hover:bg-indigo-500 focus:bg-indigo-500 focus:outline-none">
                                Send Forgot Token
                            </button>
                        </form>
                    </div>
                </div>
                <div className="m-auto hidden w-full max-w-md lg:block lg:w-2/5">
                    <img
                        src="/images/forgotpassword.svg"
                        alt=""
                        className="m-auto block h-80"
                    />
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
