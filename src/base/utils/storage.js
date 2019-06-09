export function getValue(key) {
    localStorage.getItem(key)
}

export function putValue(key, value) {
    localStorage.setItem(key, value)
}

export function removeValue(key) {
    localStorage.removeItem(key)
}

export function getValueSession(key) {
    sessionStorage.getItem(key)
}

export function putValueSession(key, value) {
    sessionStorage.setItem(key, value)
}

export function removeValueSession(key) {
    sessionStorage.removeItem(key)
}