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

export const categoryCreate = (category) => {
    return fetch("http://localhost:8088/catgories", {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(category)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Creation failed, you're no Frankenstein sadly....");
        }
        return response.json();
    });
}