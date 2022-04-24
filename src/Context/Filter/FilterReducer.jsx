const FilterReducer = (filterState, action) => {
    switch (action.type) {
        case 'SORT_FILTER':
            return { ...filterState, sortBy: action.payload };

        case 'RATING_FILTER':
            return { ...filterState, rating: action.payload };

        case 'PRICE_FILTER':
            return {
                ...filterState,
                minPrice: action.payload.minPrice,
                maxPrice: action.payload.maxPrice,
            };

        case 'CATEGORY_FILTER':
            return {
                ...filterState,
                category: filterState.category.includes(action.payload)
                    ? [
                          ...filterState.category.filter(
                              (item) => item !== action.payload,
                          ),
                      ]
                    : [...filterState.category, action.payload],
            };

        case 'BRAND_FILTER':
            return {
                ...filterState,
                brand: filterState.brand.includes(action.payload)
                    ? [
                          ...filterState.brand.filter(
                              (item) => item !== action.payload,
                          ),
                      ]
                    : [...filterState.brand, action.payload],
            };

        case 'CLEAR_FILTER':
            return {
                minPrice: 0,
                maxPrice: 5000,
                rating: 0,
                sortBy: null,
                brand: [],
                category: [],
            };

        default:
            return { ...filterState };
    }
};

export default FilterReducer;
