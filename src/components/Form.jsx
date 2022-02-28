import React, { useState } from 'react';

import './Form.module.css';

const Form = ({
    header,
    name,
    photo,
    buttonText,
    termsAnCondition,
    forgotPassword,
}) => {
    const [passwordHide, setPasswordHide] = useState(true);

    return (
        <>
            <form
                action=""
                className="w-5/6 max-w-sm space-y-4 sm:space-y-6"
                method=""
                encType="multipart/form-data"
            >
                <h1 className="mt-6 mb-8 text-center text-3xl font-bold tracking-tight text-indigo-500">
                    {header} Your Account
                </h1>

                {name && (
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-2 block text-lg font-semibold tracking-wide text-gray-600"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="test kumar"
                            id="name"
                            className="mt-1 w-full rounded-md border-2 border-gray-300 p-2 px-4 outline-none focus:border-indigo-400 focus:outline-none"
                        />
                    </div>
                )}

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

                <div>
                    <label
                        className="mb-2 block text-lg font-semibold tracking-wide text-gray-600"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 right-0 flex items-center px-2">
                            <label
                                className="cursor-pointer px-2 py-2"
                                onClick={() => setPasswordHide(!passwordHide)}
                            >
                                {passwordHide ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        width="24px"
                                        fill="#000000"
                                    >
                                        <path
                                            d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
                                            fill="none"
                                        />
                                        <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        width="24px"
                                        fill="#000000"
                                    >
                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                        <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" />
                                    </svg>
                                )}
                            </label>
                        </div>
                        <input
                            type={passwordHide ? 'password' : 'text'}
                            id="password"
                            placeholder="12345"
                            className="mt-1 w-full rounded-md border-2 border-gray-300 p-2 px-4 outline-none focus:border-indigo-400 focus:outline-none"
                        />
                    </div>
                </div>

                {photo && (
                    <div>
                        <label
                            htmlFor="profilephoto"
                            className="mb-2 block text-lg font-semibold tracking-wide text-gray-600"
                        >
                            Profile Photo
                        </label>
                        <input
                            type="file"
                            name=""
                            id="profilephoto"
                            className="mt-1 w-full rounded-md border-2 border-gray-300 outline-none focus:border-indigo-400 focus:outline-none"
                        />
                    </div>
                )}

                {termsAnCondition && (
                    <div className="flex items-center gap-2 ">
                        <input
                            type="checkbox"
                            name=""
                            id="agree"
                            className="rounded focus:outline-none focus:outline-indigo-500"
                        />
                        <label
                            htmlFor="agree"
                            className="text-md ml-2 text-gray-700"
                        >
                            I agree to terms and condition
                        </label>
                    </div>
                )}

                <button className="text-md block w-full rounded bg-indigo-600 px-4 py-3 font-semibold  tracking-wider text-white transition duration-300 ease-in-out hover:bg-indigo-500 focus:bg-indigo-500 focus:outline-none">
                    {buttonText}
                </button>

                {forgotPassword && (
                    <div className="text-md cursor-pointer text-right text-gray-700 hover:text-gray-500">
                        <a href="/">Forgot Password</a>
                    </div>
                )}
            </form>
        </>
    );
};

export default Form;
