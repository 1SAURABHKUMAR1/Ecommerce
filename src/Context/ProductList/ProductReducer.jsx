const ProductReducer = (productState, action) => {
    switch (action.type) {
        case 'getAllProducts':
            return {
                ...productState,
                products: action.payload,
            };

        case 'getAllCategories':
            return {
                ...productState,
                categories: action.payload,
            };

        case 'getAllBrands':
            return {
                ...productState,
                brands: action.payload,
            };

        default:
            return productState;
    }
};

export default ProductReducer;
