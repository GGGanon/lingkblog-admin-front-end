const SET_PERMISSIONS = "SET_PERMISSIONS"

const defaultState = {
    menus: []
}

const reducer = (state = defaultState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case SET_PERMISSIONS:
            return Object.assign({}, state, {
                menus: state.menus = payload
            });
        default: return state;
    }
};

export default reducer