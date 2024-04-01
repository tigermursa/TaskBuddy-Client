import { authKey } from "../lib/authKey";
import { decodedToken } from "./jwt";
import { getFromLocalStorage, removeFromLocalStorage } from "./local-storage";


export const getUserInfo = () => {
    const authToken = getFromLocalStorage(authKey);
    if (authToken) {
        const decodedData = decodedToken(authToken);
        return {
            ...decodedData,
        }
    }
}

export const isLoggedIn = () => {
    const authToken = getFromLocalStorage(authKey);
    if (authToken) {
        return true;
    }

}
export const removeUser = () => {
    return removeFromLocalStorage(authKey)
}