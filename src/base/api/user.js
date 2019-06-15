import request from './index'

export function login(username, passwd) {
    return request({
        url: '/users/token',
        method: 'post',
        data: {
            email: username,
            password: passwd
        }
    })
}
