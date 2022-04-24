import FilterWrapper from './FilterWrapper';

import { useFilterProvider } from '../../../Context/Filter/FilterProvider';

const RatingsFilter = () => {
    const { filterState, filterDispatch } = useFilterProvider();

    return (
        <>
            <FilterWrapper headerTitle={'Rating'}>
                <div className="mt-1 flex w-full flex-col gap-y-2 pl-1">
                    <div className="flex w-full items-center gap-x-3">
                        <input
                            type="radio"
                            id="above1"
                            checked={filterState.rating === 'ABOVE_1'}
                            onChange={() =>
                                filterDispatch({
                                    type: 'RATING_FILTER',
                                    payload: 'ABOVE_1',
                                })
                            }
                            name="rating"
                            className="h-3.5 w-3.5"
                        />
                        <label
                            htmlFor="above1"
                            className="font-semibold tracking-wide text-gray-600"
                        >
                            Above<span>{' 1 '}</span> and more
                        </label>
                    </div>
                    <div className="flex w-full items-center gap-x-3">
                        <input
                            type="radio"
                            id="above2"
                            name="rating"
                            checked={filterState.rating === 'ABOVE_2'}
                            onChange={() =>
                                filterDispatch({
                                    type: 'RATING_FILTER',
                                    payload: 'ABOVE_2',
                                })
                            }
                            className="h-3.5 w-3.5"
                        />
                        <label
                            htmlFor="above2"
                            className="font-semibold tracking-wide text-gray-600"
                        >
                            Above 2 and more
                        </label>
                    </div>
                    <div className="flex w-full items-center gap-x-3">
                        <input
                            type="radio"
                            id="above3"
                            name="rating"
                            checked={filterState.rating === 'ABOVE_3'}
                            onChange={() =>
                                filterDispatch({
                                    type: 'RATING_FILTER',
                                    payload: 'ABOVE_3',
                                })
                            }
                            className="h-3.5 w-3.5"
                        />
                        <label
                            htmlFor="above3"
                            className="font-semibold tracking-wide text-gray-600"
                        >
                            Above 3 and more
                        </label>
                    </div>
                    <div className="flex w-full items-center gap-x-3">
                        <input
                            type="radio"
                            id="above4"
                            name="rating"
                            checked={filterState.rating === 'ABOVE_4'}
                            onChange={() =>
                                filterDispatch({
                                    type: 'RATING_FILTER',
                                    payload: 'ABOVE_4',
                                })
                            }
                            className="h-3.5 w-3.5"
                        />
                        <label
                            htmlFor="above4"
                            className="font-semibold tracking-wide text-gray-600"
                        >
                            Above 4 and more
                        </label>
                    </div>
                </div>
            </FilterWrapper>
        </>
    );
};

export default RatingsFilter;
