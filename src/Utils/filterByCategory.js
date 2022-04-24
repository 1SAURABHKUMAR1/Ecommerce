const filterByCategory = (productsList, action) => {
    let tempFinalArray = [];

    if (action.length === 0) {
        return productsList;
    }

    action.forEach((item) => {
        tempFinalArray.push(
            ...productsList.filter((product) => product.category === item),
        );
    });

    return tempFinalArray;
};

export default filterByCategory;
