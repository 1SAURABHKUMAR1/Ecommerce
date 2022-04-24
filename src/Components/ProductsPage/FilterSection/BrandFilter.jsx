import FilterWrapper from './FilterWrapper';

import { useFilterProvider } from '../../../Context/Filter/FilterProvider';

const BrandFilter = () => {
    const { filterState, filterDispatch } = useFilterProvider();

    return (
        <>
            <FilterWrapper headerTitle={'Brands'}>
                <div className="mt-2 flex w-full flex-col gap-y-2">
                    <div className="flex w-full items-center gap-x-3">
                        <input
                            type="checkbox"
                            id="Lenskart"
                            checked={filterState.brand.includes('Lenskart')}
                            onChange={() => {
                                filterDispatch({
                                    type: 'BRAND_FILTER',
                                    payload: 'Lenskart',
                                });
                            }}
                            className="h-3.5 w-3.5"
                        />
                        <label
                            htmlFor="Lenskart"
                            className="font-semibold tracking-wide text-gray-600"
                        >
                            Lenskart
                        </label>
                    </div>
                    <div className="flex w-full items-center gap-x-3">
                        <input
                            type="checkbox"
                            id="Vincent Chase"
                            checked={filterState.brand.includes(
                                'Vincent Chase',
                            )}
                            onChange={() => {
                                filterDispatch({
                                    type: 'BRAND_FILTER',
                                    payload: 'Vincent Chase',
                                });
                            }}
                            className="h-3.5 w-3.5"
                        />
                        <label
                            htmlFor="Vincent Chase"
                            className="font-semibold tracking-wide text-gray-600"
                        >
                            Vincent Chase
                        </label>
                    </div>
                    <div className="flex w-full items-center gap-x-3">
                        <input
                            type="checkbox"
                            id="John Jacobs"
                            checked={filterState.brand.includes('John Jacobs')}
                            onChange={() => {
                                filterDispatch({
                                    type: 'BRAND_FILTER',
                                    payload: 'John Jacobs',
                                });
                            }}
                            className="h-3.5 w-3.5"
                        />
                        <label
                            htmlFor="John Jacobs"
                            className="font-semibold tracking-wide text-gray-600"
                        >
                            John Jacobs
                        </label>
                    </div>
                    <div className="flex w-full items-center gap-x-3">
                        <input
                            type="checkbox"
                            id="Tommy Hilfiger"
                            checked={filterState.brand.includes(
                                'Tommy Hilfiger',
                            )}
                            onChange={() => {
                                filterDispatch({
                                    type: 'BRAND_FILTER',
                                    payload: 'Tommy Hilfiger',
                                });
                            }}
                            className="h-3.5 w-3.5"
                        />
                        <label
                            htmlFor="Tommy Hilfiger"
                            className="font-semibold tracking-wide text-gray-600"
                        >
                            Tommy Hilfiger
                        </label>
                    </div>
                </div>
            </FilterWrapper>
        </>
    );
};

export default BrandFilter;
