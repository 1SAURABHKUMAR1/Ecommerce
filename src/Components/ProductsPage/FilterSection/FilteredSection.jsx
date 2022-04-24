import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import BrandFilter from './BrandFilter';
import CategoryFilter from './CategoryFilter';
import PriceBracketFilter from './PriceBracketFilter';
import RatingsFilter from './RatingsFilter';
import SortFilter from './SortFilter';

import { useFilterProvider } from '../../../Context/Filter/FilterProvider';

const FilteredSection = () => {
    const [showFilters, setShowFilters] = useState(false);

    const { filterDispatch } = useFilterProvider();

    const toggleFilter = () => {
        setShowFilters(!showFilters);
    };

    return (
        <>
            <div className="flex w-full flex-grow flex-col border-r-2 pr-2 md:h-max md:max-w-[18rem]">
                <div className="flex h-max w-full items-center justify-between">
                    <div
                        className={`flex w-max items-center rounded py-1.5 px-1.5 text-lg font-semibold text-gray-600 hover:text-indigo-600${
                            showFilters && 'border-2 border-indigo-600 '
                        }`}
                        onClick={toggleFilter}
                    >
                        <FontAwesomeIcon
                            icon={faFilter}
                            className="mr-2 cursor-pointer fill-current font-semibold"
                        />
                        <span className="cursor-pointer text-base">
                            Show Filters
                        </span>
                    </div>

                    <div
                        className={`cursor-pointer ${
                            showFilters ? 'block' : 'hidden'
                        } text-lg font-semibold text-gray-600 md:block`}
                        onClick={() =>
                            filterDispatch({
                                type: 'CLEAR_FILTER',
                            })
                        }
                    >
                        Clear
                    </div>
                </div>

                <div
                    className={`mt-4 flex flex-col ${
                        showFilters ? 'block' : 'hidden'
                    } justify-between gap-y-4 px-1.5 md:block`}
                >
                    <CategoryFilter />
                    <BrandFilter />
                    <PriceBracketFilter />
                    <RatingsFilter />
                    <SortFilter />
                </div>
            </div>
        </>
    );
};

export default FilteredSection;
