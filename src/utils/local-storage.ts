//to set data 
export const setToLocalStorage = (key: string, token: string) => {
    if (!key || typeof window === "undefined") {
        return "";
    }
    return localStorage.setItem(key, token)
}
//to get data 
export const getFromLocalStorage = (key: string,) => {
    if (!key || typeof window === "undefined") {
        return "";
    }
    return localStorage.getItem(key)
}
//to remove data 
export const removeFromLocalStorage = (key: string,) => {
    if (!key || typeof window === "undefined") {
        return "";
    }
    return localStorage.removeItem(key)
}