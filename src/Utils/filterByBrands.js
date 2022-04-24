const filterByBrands = (productsList, action) => {
    let tempFinalArray = [];

    if (action.length === 0) {
        return [...productsList];
    }

    action.forEach((item) => {
        tempFinalArray.push(
            ...productsList.filter((product) => product.brand === item),
        );
    });

    return tempFinalArray;
};

export default filterByBrands;
