const sortByPrice = (productsList, action) => {
    switch (action) {
        case 'PRICE_LOW_TO_HIGH':
            return productsList.sort((a, b) => a.price - b.price);

        case 'PRICE_HIGH_TO_LOW':
            return productsList.sort((a, b) => b.price - a.price);

        default:
            return productsList;
    }
};

export default sortByPrice;
