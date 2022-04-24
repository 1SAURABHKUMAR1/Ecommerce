import { createContext, useContext, useReducer } from 'react';
import FilterReducer from './FilterReducer';

const intialFilterData = {
    minPrice: 0,
    maxPrice: 5000,
    rating: 0,
    sortBy: null,
    brand: [],
    category: [],
};

const FilterContext = createContext(intialFilterData);

const FilterProvider = ({ children }) => {
    const [filterState, filterDispatch] = useReducer(
        FilterReducer,
        intialFilterData,
    );

    return (
        <FilterContext.Provider value={{ filterState, filterDispatch }}>
            {children}
        </FilterContext.Provider>
    );
};

const useFilterProvider = () => useContext(FilterContext);

export { FilterProvider, useFilterProvider };
