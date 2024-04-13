import axios from "axios";
import {API_URL} from "@/api/http";
import Cookies from "js-cookie";

export const signUp = async (email, name, password) => {
    try {
        const response = await axios.post(`${API_URL}/users/sign-up`, {
                email: email,
                name: name,
                password: password
            },

        )
        return response.data
    } catch (e) {
        console.log(e.message)
    }
}

export const signIn = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/sign-in`, {
                email: email,
                password: password
            },
            {withCredentials: true}
        )
        return response.data
    } catch (e) {
        console.log(e.message)
    }
}

export const signOut = async () => {
    try {
        return await axios.put(`${API_URL}/auth/sign-out`, {}, {withCredentials: true})
    } catch (e) {
        console.log(e.message)
    }
}

export async function getAndSaveToken() {
    try {
        const response = await axios.put(`${API_URL}/auth/refresh`, {},{withCredentials: true})
        if (response.data.accessToken) {
            Cookies.set('accessToken', response.data.accessToken)
        }
        return response
    } catch (e) {
        console.log(e.message)
    }

}

export async function getAccessToken(){
    return Cookies.get('accessToken')
}