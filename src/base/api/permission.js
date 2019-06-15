import request from './index'

export function getMenus() {
    return request({
        url: '/sites/menus',
        method: 'get'
    })
}
