import {getValueSession, putValueSession, removeValueSession} from "./storage";

const LINGK_BLOG_KEY_TOKEN = "LINGK_BLOG_KEY_TOKEN"

// 获取用户token
export function getToken() {
    getValueSession(LINGK_BLOG_KEY_TOKEN)
}

// 设置用户token
export function setToken(token) {
    putValueSession(LINGK_BLOG_KEY_TOKEN, token)
}

export function removeToken() {
    removeValueSession(LINGK_BLOG_KEY_TOKEN)
}