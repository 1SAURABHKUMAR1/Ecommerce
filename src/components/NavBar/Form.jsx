import React from 'react';

import './Form.module.css';

const Form = ({ header, name, photo, buttonText }) => {
    return (
        <>
            <form
                action=""
                className="w-5/6 max-w-sm space-y-4 sm:space-y-6"
                method=""
                enctype="multipart/form-data"
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
                        type="text"
                        id="email"
                        className="mt-1 w-full rounded-md border-2 border-gray-300 p-2 px-4 outline-none focus:border-indigo-400 focus:outline-none"
                    />
                </div>

                <div>
                    <label
                        htmlFor="password"
                        className="mb-2 block text-lg font-semibold tracking-wide text-gray-600"
                    >
                        Password
                    </label>
                    <input
                        type="text"
                        id="password"
                        className="mt-1 w-full rounded-md border-2 border-gray-300 p-2 px-4 outline-none focus:border-indigo-400 focus:outline-none"
                    />
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

                <button className="text-md block w-full rounded bg-indigo-600 px-4 py-3 font-semibold  tracking-wider text-white transition duration-300 ease-in-out hover:bg-indigo-500 focus:bg-indigo-500 focus:outline-none">
                    {buttonText}
                </button>
            </form>
        </>
    );
};

export default Form;
