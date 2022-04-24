import FilterWrapper from './FilterWrapper';

import { useFilterProvider } from '../../../Context/Filter/FilterProvider';

const CategoryFilter = () => {
    const { filterState, filterDispatch } = useFilterProvider();

    return (
        <>
            <FilterWrapper headerTitle={'Category'}>
                <div className="mt-2 flex w-full flex-col gap-y-2 pl-1">
                    <div className="flex w-full items-center gap-x-3">
                        <input
                            type="checkbox"
                            id="Thin Rims"
                            checked={filterState.category.includes('Thin Rims')}
                            onChange={() =>
                                filterDispatch({
                                    type: 'CATEGORY_FILTER',
                                    payload: 'Thin Rims',
                                })
                            }
                            className="h-3.5 w-3.5"
                        />
                        <label
                            htmlFor="Thin Rims"
                            className="font-semibold tracking-wide text-gray-600"
                        >
                            Thin Rims
                        </label>
                    </div>
                    <div className="flex w-full items-center gap-x-3">
                        <input
                            type="checkbox"
                            id="Cat Eye"
                            checked={filterState.category.includes('Cat Eye')}
                            onChange={() =>
                                filterDispatch({
                                    type: 'CATEGORY_FILTER',
                                    payload: 'Cat Eye',
                                })
                            }
                            className="h-3.5 w-3.5"
                        />
                        <label
                            htmlFor="Cat Eye"
                            className="font-semibold tracking-wide text-gray-600"
                        >
                            Cat Eye
                        </label>
                    </div>
                    <div className="flex w-full items-center gap-x-3">
                        <input
                            type="checkbox"
                            id="Light Weight"
                            checked={filterState.category.includes(
                                'Light Weight',
                            )}
                            onChange={() =>
                                filterDispatch({
                                    type: 'CATEGORY_FILTER',
                                    payload: 'Light Weight',
                                })
                            }
                            className="h-3.5 w-3.5"
                        />
                        <label
                            htmlFor="Light Weight"
                            className="font-semibold tracking-wide text-gray-600"
                        >
                            Light Weight
                        </label>
                    </div>
                    <div className="flex w-full items-center gap-x-3">
                        <input
                            type="checkbox"
                            id="Blue Lens"
                            checked={filterState.category.includes('Blue Lens')}
                            onChange={() =>
                                filterDispatch({
                                    type: 'CATEGORY_FILTER',
                                    payload: 'Blue Lens',
                                })
                            }
                            className="h-3.5 w-3.5"
                        />
                        <label
                            htmlFor="Blue Lens"
                            className="font-semibold tracking-wide text-gray-600"
                        >
                            Blue Lens
                        </label>
                    </div>
                </div>
            </FilterWrapper>
        </>
    );
};

export default CategoryFilter;
