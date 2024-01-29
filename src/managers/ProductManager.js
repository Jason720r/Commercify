export const productFetch = () => {
    return fetch("http://localhost:8088/products", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(response => response.json())
} 