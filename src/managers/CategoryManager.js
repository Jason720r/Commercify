export const categoryFetch = () => {
    return fetch("http://localhost:8088/categories", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(response => response.json())
}

export const singleCategory = (categoryId) => {
    return fetch(`http://localhost:8088/products/${categoryId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(response => response.json())
}