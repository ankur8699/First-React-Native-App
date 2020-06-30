export const fetchProductsFromServer = async () => {
    return fetch('https://api.gftpl.in/api/products/')
        .then((response) => response.json())
        .then((json) => {
            return { error: false, result: json };
        })
        .catch((error) => {
            return { error: true };
        });
}