import axios from 'axios'
import { message } from 'antd';

import { createStore } from 'redux';
import reducer from '../../redux/reducers'
let { getState } = createStore(reducer);

const BASE_API = 'http://localhost:5000/admin-api'

const service = axios.create({
    baseURL: BASE_API,
    timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
    if (getState().token) {
        config.headers['authorization'] = getState().token
    }
    return config
}, error => {
    console.log(error)
    return Promise.reject(error)
});

// response interceptor
service.interceptors.response.use(
    response => {
        if (response.status >= 300) {
            return Promise.reject(new Error(response.message || 'Error'))
        } else {
            return response
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default service