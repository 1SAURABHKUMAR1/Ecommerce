import FilterWrapper from './FilterWrapper';

import { useFilterProvider } from '../../../Context/Filter/FilterProvider';

const SortFilter = () => {
    const { filterState, filterDispatch } = useFilterProvider();

    return (
        <>
            <FilterWrapper headerTitle={'Sort By'}>
                <div className="mt-2 flex w-full flex-col gap-y-2 pl-1">
                    <div className="flex w-full items-center gap-x-3">
                        <input
                            type="radio"
                            id="lowToHigh"
                            checked={filterState.sortBy === 'PRICE_LOW_TO_HIGH'}
                            onChange={() => {
                                filterDispatch({
                                    type: 'SORT_FILTER',
                                    payload: 'PRICE_LOW_TO_HIGH',
                                });
                            }}
                            name="sort"
                            className="h-3.5 w-3.5"
                        />
                        <label
                            htmlFor="lowToHigh"
                            className="font-semibold tracking-wide text-gray-600"
                        >
                            Low To High
                        </label>
                    </div>
                    <div className="flex w-full items-center gap-x-3">
                        <input
                            type="radio"
                            id="highToLow"
                            checked={filterState.sortBy === 'PRICE_HIGH_TO_LOW'}
                            onChange={() => {
                                filterDispatch({
                                    type: 'SORT_FILTER',
                                    payload: 'PRICE_HIGH_TO_LOW',
                                });
                            }}
                            name="sort"
                            className="h-3.5 w-3.5"
                        />
                        <label
                            htmlFor="highToLow"
                            className="font-semibold tracking-wide text-gray-600"
                        >
                            High to Low
                        </label>
                    </div>
                </div>
            </FilterWrapper>
        </>
    );
};

export default SortFilter;
