import Cookies from 'js-cookie'

const LINGK_BLOG_KEY_TOKEN = "LINGK_BLOG_KEY_TOKEN"

// 获取用户token
export function getToken() {
    return Cookies.get(LINGK_BLOG_KEY_TOKEN)
}

// 设置用户token
export function setToken(token) {
    Cookies.set(LINGK_BLOG_KEY_TOKEN, token)
}

export function removeToken() {
    Cookies.remove(LINGK_BLOG_KEY_TOKEN)
}