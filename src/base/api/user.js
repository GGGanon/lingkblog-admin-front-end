import request from './index'
import Qs from 'qs'

export function login(username, passwd) {
    var data =  Qs.stringify({
        email: username,
        password: passwd
    });
    return request({
        url: '/users/token',
        method: 'post',
        data: data
    })
}
