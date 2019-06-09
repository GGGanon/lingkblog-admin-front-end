export default (state = {menus: []}, action) => {
    switch (action.type) {
        case 'SET_PERMISSIONS':
            return state.menus = action.payload
        default:
            return state
    }
}