import filterByRating from './filterByRating';
import sortByPrice from './sortByPrice';
import filterByPrice from './filterByPrice';
import filterByCategory from './filterByCategory';
import filterByBrands from './filterByBrands';

const finalFilteredData = (productsList, filterState) => {
    let filteredData = [...productsList];

    filteredData = filterByCategory(filteredData, filterState.category);

    filteredData = filterByBrands(filteredData, filterState.brand);

    filteredData = filterByRating(filteredData, filterState.rating);

    filteredData = filterByPrice(
        filteredData,
        filterState.minPrice,
        filterState.maxPrice,
    );

    filteredData = sortByPrice(filteredData, filterState.sortBy);

    return [...filteredData];
};

export default finalFilteredData;
