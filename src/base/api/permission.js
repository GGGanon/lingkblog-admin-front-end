import request from './index'

export function getMenu() {
    return request({
        url: '/sites/menus',
        method: 'get'
    })
}
