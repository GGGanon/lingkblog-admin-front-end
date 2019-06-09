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
            config.headers['X-Token'] = getToken()
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
        const res = response.data

        // if the custom code is not 20000, it is judged as an error.
        if (res.code >= 300) {
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export default service