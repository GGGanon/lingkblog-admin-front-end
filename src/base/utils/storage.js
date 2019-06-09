const LINGK_BLOG_KEY_TOKEN = "LINGK_BLOG_KEY_TOKEN"

export function getValue(key) {
    localStorage.getItem(key)
}

export function putValue(key, value) {
    localStorage.setItem(key, value)
}

export function removeValue(key) {
    localStorage.removeItem(key)
}

// 获取用户token
export function getToken() {
    getValue(LINGK_BLOG_KEY_TOKEN)
}

// 设置用户token
export function setToken(token) {
    putValue(LINGK_BLOG_KEY_TOKEN, token)
}

export function removeToken() {
    removeToken(LINGK_BLOG_KEY_TOKEN)
}