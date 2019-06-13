const SET_TOKEN = "SET_TOKEN"
const SET_PERMISSIONS = "SET_PERMISSIONS"

const defaultState = {
    token: null,
    menus: null
}

const reducer = (state = defaultState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case SET_TOKEN:
            return Object.assign({}, state, {
                token: state.token = payload
            });
        case SET_PERMISSIONS:
            return Object.assign({}, state, {
                menus: state.menus = payload
            });
        default: return state;
    }
};

export default reducer