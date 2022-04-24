import FilterWrapper from './FilterWrapper';

import { useFilterProvider } from '../../../Context/Filter/FilterProvider';

const PriceBracketFilter = () => {
    const { filterState, filterDispatch } = useFilterProvider();

    return (
        <>
            <FilterWrapper headerTitle={'Price'}>
                <div className="mt-2 flex w-full flex-col gap-y-2 pl-1">
                    <div className="flex w-full items-center gap-x-3">
                        <input
                            type="radio"
                            id="0250"
                            checked={
                                filterState.minPrice === '0' &&
                                filterState.maxPrice === '250'
                            }
                            onChange={() =>
                                filterDispatch({
                                    type: 'PRICE_FILTER',
                                    payload: {
                                        minPrice: '0',
                                        maxPrice: '250',
                                    },
                                })
                            }
                            name="price"
                            className="h-3.5 w-3.5"
                        />
                        <label
                            htmlFor="0250"
                            className="font-semibold tracking-wide text-gray-600"
                        >
                            Rs 0 - Rs 250
                        </label>
                    </div>
                    <div className="flex w-full items-center gap-x-3">
                        <input
                            type="radio"
                            id="251500"
                            checked={
                                filterState.minPrice === '251' &&
                                filterState.maxPrice === '500'
                            }
                            onChange={() =>
                                filterDispatch({
                                    type: 'PRICE_FILTER',
                                    payload: {
                                        minPrice: '251',
                                        maxPrice: '500',
                                    },
                                })
                            }
                            name="price"
                            className="h-3.5 w-3.5"
                        />
                        <label
                            htmlFor="251500"
                            className="font-semibold tracking-wide text-gray-600"
                        >
                            Rs 251 - Rs 500
                        </label>
                    </div>
                    <div className="flex w-full items-center gap-x-3">
                        <input
                            type="radio"
                            id="5011000"
                            checked={
                                filterState.minPrice === '501' &&
                                filterState.maxPrice === '1000'
                            }
                            onChange={() =>
                                filterDispatch({
                                    type: 'PRICE_FILTER',
                                    payload: {
                                        minPrice: '501',
                                        maxPrice: '1000',
                                    },
                                })
                            }
                            name="price"
                            className="h-3.5 w-3.5"
                        />
                        <label
                            htmlFor="5011000"
                            className="font-semibold tracking-wide text-gray-600"
                        >
                            Rs 501 - Rs 1000
                        </label>
                    </div>
                    <div className="flex w-full items-center gap-x-3">
                        <input
                            type="radio"
                            id="10012000"
                            checked={
                                filterState.minPrice === '1001' &&
                                filterState.maxPrice === '2000'
                            }
                            onChange={() =>
                                filterDispatch({
                                    type: 'PRICE_FILTER',
                                    payload: {
                                        minPrice: '1001',
                                        maxPrice: '2000',
                                    },
                                })
                            }
                            name="price"
                            className="h-3.5 w-3.5"
                        />
                        <label
                            htmlFor="10012000"
                            className="font-semibold tracking-wide text-gray-600"
                        >
                            Rs 1001 - Rs 2000
                        </label>
                    </div>
                    <div className="flex w-full items-center gap-x-3">
                        <input
                            type="radio"
                            id="20015000"
                            checked={
                                filterState.minPrice === '2001' &&
                                filterState.maxPrice === '5000'
                            }
                            onChange={() =>
                                filterDispatch({
                                    type: 'PRICE_FILTER',
                                    payload: {
                                        minPrice: '2001',
                                        maxPrice: '5000',
                                    },
                                })
                            }
                            name="price"
                            className="h-3.5 w-3.5"
                        />
                        <label
                            htmlFor="20015000"
                            className="font-semibold tracking-wide text-gray-600"
                        >
                            Rs 2001 - Rs 5000
                        </label>
                    </div>
                </div>
            </FilterWrapper>
        </>
    );
};

export default PriceBracketFilter;
