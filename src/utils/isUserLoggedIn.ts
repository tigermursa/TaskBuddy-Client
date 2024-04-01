

import { useState, useEffect } from "react";
import { getFromLocalStorage } from "./local-storage";
import { decodedToken } from "./jwt";


export const LoggedIn = () => {
    const [email, setEmail] = useState<string>("");

    useEffect(() => {
        const token = getFromLocalStorage("token");
        if (token) {
            const decoded = decodedToken(token);
            setEmail(decoded.email);      
        }
    }, []);

    return email;
};


