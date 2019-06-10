import axios from 'axios'
import { getToken } from '../utils/auth'

const BASE_API = 'http://localhost:5000/admin-api'

// create an axios instance
const service = axios.create({
    baseURL: BASE_API,
    timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        if (getToken()) {
            config.headers['Authorization'] = getToken()
        }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        // if the custom code is not 20000, it is judged as an error.
        if (response.status >= 300) {
            return Promise.reject(new Error(response.message || 'Error'))
        } else {
            return response
        }
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export default service