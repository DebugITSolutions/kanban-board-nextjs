import axios from "axios";
import {API_URL} from "@/api/http";

export const signUp = async (email, name, password) => {
    const response = await axios.post(`${API_URL}/users/sign-up`, {
            email: email,
            name: name,
            password: password
        },

    )
    return response.data
}

export const signIn = async (email, password) => {
    const response = await axios.post(`${API_URL}/auth/sign-in`, {
            email: email,
            password: password
        },
        {withCredentials: true}
    )
    return response.data
}