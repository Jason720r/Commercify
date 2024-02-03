export const productFetch = () => {
    return fetch("http://localhost:8088/products", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(response => response.json())
} 

export const singleProduct = (productId) => {
    return fetch(`http://localhost:8088/products/${productId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(response => response.json())
}

export const productCreate = (product) => {
    return fetch("http://localhost:8088/products", {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(product)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Creation failed, you're no Frankenstein sadly....");
        }
        return response.json();
    });
}