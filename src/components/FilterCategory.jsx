import React, { useState } from 'react';

const CategoryFilter = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState('');
    const [price, setPrice] = useState('');

    return (
        <>
            <div className="py-4 md:px-12">
                <div className="md:flex md:justify-between">
                    <div className="flex items-center text-lg font-semibold text-gray-600 duration-150 ease-in-out ">
                        <span className="cursor-pointer">Filters</span>
                        <span className="ml-1 cursor-pointer fill-current font-semibold text-gray-500">
                            <svg
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                className="h-6 w-6 fill-current"
                            >
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                            </svg>
                        </span>
                    </div>

                    <div className="my-4 flex flex-wrap justify-between gap-x-5 gap-y-4">
                        <div className="relative inline-flex max-w-[8rem] flex-grow items-center rounded-lg p-2 px-4 text-center font-semibold text-slate-700 shadow-sm ring-1 ring-slate-900/10">
                            <span className="m-auto flex truncate">
                                {name ? name : 'Name'}
                                <svg
                                    className="ml-1 h-6 w-6 text-slate-400"
                                    fill="none"
                                >
                                    <path
                                        d="m15 11-3 3-3-3"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </span>
                            <select
                                className="form-select absolute inset-0 m-0 block h-full w-full appearance-none bg-clip-padding bg-no-repeat px-3 py-1.5 opacity-0 transition ease-in-out"
                                aria-label="Default select example"
                                onChange={(e) => setName(e.target.value)}
                            >
                                <option
                                    value="Burnikk"
                                    className="font-medium text-gray-500"
                                >
                                    Burnikk
                                </option>
                                <option
                                    value="Kibal Batal"
                                    className="font-medium text-gray-500"
                                >
                                    Kibal Batal
                                </option>
                                <option
                                    value="Very Nice"
                                    className="font-medium text-gray-500"
                                >
                                    Very Nice
                                </option>
                                <option
                                    value="Beach Blue"
                                    className="font-medium text-gray-500"
                                >
                                    Beach Blue
                                </option>
                                <option
                                    value="Overload"
                                    className="font-medium text-gray-500"
                                >
                                    Overload
                                </option>
                                <option
                                    value="Vincent Chase"
                                    className="font-medium text-gray-500"
                                >
                                    Vincent Chase
                                </option>
                            </select>
                        </div>
                        <div className="relative inline-flex max-w-[8rem] flex-grow items-center rounded-lg p-2 px-4 text-center font-semibold text-slate-700 shadow-sm ring-1 ring-slate-900/10">
                            <span className="m-auto flex truncate">
                                {category ? category : 'Category'}
                                <svg
                                    className="ml-1 h-6 w-6 text-slate-400"
                                    fill="none"
                                >
                                    <path
                                        d="m15 11-3 3-3-3"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </span>
                            <select
                                aria-label="Default select example"
                                onChange={(e) => setCategory(e.target.value)}
                                className="form-select absolute inset-0 m-0 block h-full w-full appearance-none bg-clip-padding bg-no-repeat px-3 py-1.5 opacity-0 transition ease-in-out"
                            >
                                <option
                                    value="Thin Rims"
                                    className="font-medium text-gray-500"
                                >
                                    Thin Rims
                                </option>
                                <option
                                    value="Cat Eye"
                                    className="font-medium text-gray-500"
                                >
                                    Cat Eye
                                </option>
                                <option
                                    value="Light Weight"
                                    className="font-medium text-gray-500"
                                >
                                    Light Weight
                                </option>
                                <option
                                    value="Blue Lens"
                                    className="font-medium text-gray-500"
                                >
                                    Blue Lens
                                </option>
                            </select>
                        </div>
                        <div className="relative inline-flex max-w-[8rem] flex-grow items-center rounded-lg p-2 px-4 text-center font-semibold text-slate-700 shadow-sm ring-1 ring-slate-900/10">
                            <span className="m-auto flex truncate">
                                {rating ? `Above ${rating}` : 'Rating'}
                                <svg
                                    className="ml-1 h-6 w-6 text-slate-400"
                                    fill="none"
                                >
                                    <path
                                        d="m15 11-3 3-3-3"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </span>
                            <select
                                aria-label="Default select example"
                                onChange={(e) => setRating(e.target.value)}
                                className="form-select absolute inset-0 m-0 block h-full w-full appearance-none bg-clip-padding bg-no-repeat px-3 py-1.5 opacity-0 transition ease-in-out"
                            >
                                <option
                                    value="1"
                                    className="font-medium text-gray-500"
                                >
                                    Above 1
                                </option>
                                <option
                                    value="2"
                                    className="font-medium text-gray-500"
                                >
                                    Above 2
                                </option>
                                <option
                                    value="3"
                                    className="font-medium text-gray-500"
                                >
                                    Above 3
                                </option>
                                <option
                                    value="4"
                                    className="font-medium text-gray-500"
                                >
                                    Above 4
                                </option>
                            </select>
                        </div>
                        <div className="relative inline-flex max-w-[8rem] flex-grow items-center rounded-lg p-2 px-4 text-center font-semibold text-slate-700 shadow-sm ring-1 ring-slate-900/10">
                            <span className="m-auto flex truncate">
                                {price ? price : 'Price'}
                                <svg
                                    className="ml-1 h-6 w-6 text-slate-400"
                                    fill="none"
                                >
                                    <path
                                        d="m15 11-3 3-3-3"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </span>
                            <select
                                aria-label="Default select example"
                                onChange={(e) => setPrice(e.target.value)}
                                className="form-select absolute inset-0 m-0 block h-full w-full appearance-none bg-clip-padding bg-no-repeat px-3 py-1.5 opacity-0 transition ease-in-out"
                            >
                                <option
                                    value="light"
                                    className="font-medium text-gray-500"
                                >
                                    Light
                                </option>
                                <option
                                    value="dark"
                                    className="font-medium text-gray-500"
                                >
                                    Dark
                                </option>
                                <option
                                    value="system"
                                    className="font-medium text-gray-500"
                                >
                                    System
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryFilter;
