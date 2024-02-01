export const userFetch = () => {
    return fetch("http://localhost:8088/users", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(response => response.json())
}