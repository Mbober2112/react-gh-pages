export const getDataApi = (): Promise<any> => {
    return fetch(`https://artisant.io/api/products`,
    { method: 'GET' }).then(response => response.json());
}