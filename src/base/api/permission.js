import request from './index'
import {getToken} from "../utils/auth";

export function getMenus() {
    let config = {
        headers: {
            'Authorization': getToken(),
        }
    }
    return request({
        url: '/sites/menus',
        method: 'get',
        config
    })
}
