const filterByPrice = (productsList, actionMinPrice, actionMaxPrice) => {
    if (actionMinPrice === '0' && actionMaxPrice === '250') {
        return productsList.filter(
            (item) => parseInt(item.price) >= 0 && parseInt(item.price) <= 250,
        );
    } else if (actionMinPrice === '251' && actionMaxPrice === '500') {
        return productsList.filter(
            (item) =>
                parseInt(item.price) >= 251 && parseInt(item.price) <= 500,
        );
    } else if (actionMinPrice === '501' && actionMaxPrice === '1000') {
        return productsList.filter(
            (item) =>
                parseInt(item.price) >= 501 && parseInt(item.price) <= 1000,
        );
    } else if (actionMinPrice === '1001' && actionMaxPrice === '2000') {
        return productsList.filter(
            (item) =>
                parseInt(item.price) >= 1001 && parseInt(item.price) <= 2000,
        );
    } else if (actionMinPrice === '2001' && actionMaxPrice === '5000') {
        return productsList.filter(
            (item) =>
                parseInt(item.price) >= 2001 && parseInt(item.price) <= 5000,
        );
    }
    return productsList;
};

export default filterByPrice;
