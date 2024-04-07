import axios from "axios";
import {getAccessToken, setAccessToken} from "@/utils/authTokenService"

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
    if (error.response.status === 401) {
        try {
            const response = await axios.get(`${API_URL}/auth/refresh`, {withCredentials: true})
            // setAccessToken(response.data.accessToken) ???
            return $api.request(ogRequest)
        } catch(e) {
            console.log(e.message)
        }
    }
})

export default $api