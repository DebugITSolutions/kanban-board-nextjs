import axios from "axios";
import {getAccessToken, getAndSaveToken} from "@/api/auth";

export const API_URL = 'http://localhost:5000'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use(async (config) => {
    config.headers.Authorization = `Bearer ${await getAccessToken()}`
    return config
})

$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const ogRequest = error.config
    if (error.response.status === 401 && !error.config._isRetry) {
        try {
            error.config._isRetry = true
            await getAndSaveToken()
            return $api.request(ogRequest)
        } catch(e) {
            console.log(e.message)
        }
    }
})

export default $api