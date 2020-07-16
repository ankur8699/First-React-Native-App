export const fetchProductsFromServer = async () => {
    return fetch('http://10.10.20.37:8000/api/Products/')
        .then((response) => response.json())
        .then((json) => {
            return { error: false, result: json };
        })
        .catch((error) => {
            return { error: true };
        });
}