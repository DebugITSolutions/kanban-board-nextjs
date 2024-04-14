import axios from "axios";
import {API_URL} from "@/api/http";
import Cookies from "js-cookie";

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

export const signOut = async (email) => {
    try {
         return await axios.put(`${API_URL}/auth/sign-out`, {email}, {withCredentials: true})
    } catch (e) {
        console.log(e.message)
    }
}

export const getAccessToken = () => {
    return Cookies.get('accessToken')
}

export const getRefresh = async () => {
    return await axios.put(`${API_URL}/auth/refresh`, {} , {withCredentials: true})
}