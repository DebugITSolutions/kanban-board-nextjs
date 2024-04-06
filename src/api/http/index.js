import axios from "axios";

export const API_URL = 'http://localhost:5000'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config
})

$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const ogRequest = error.config
    if (error.response.status === 401) {
        try {
            const response = await axios.get(`${API_URL}/auth/refresh`, {withCredentials: true})
            localStorage.setItem('accessToken', response.data.accessToken)
            return $api.request(ogRequest)
        } catch(e) {
            console.log(e.message)
        }
    }
})

export default $api