const filterByRating = (productsList, action) => {
    switch (action) {
        case 'ABOVE_1':
            return productsList.filter((product) => product.rating > 1);

        case 'ABOVE_2':
            return productsList.filter((product) => product.rating > 2);

        case 'ABOVE_3':
            return productsList.filter((product) => product.rating > 3);

        case 'ABOVE_4':
            return productsList.filter((product) => product.rating > 4);

        default:
            return [...productsList];
    }
};

export default filterByRating;
