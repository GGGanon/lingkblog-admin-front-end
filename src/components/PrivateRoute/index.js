import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {getToken} from "../../base/utils/auth";
import { createStore } from 'redux';
import reducer from '../../redux/reducers'
import { getMenus } from "../../base/api/permission";
let { dispatch, getState } = createStore(reducer);

const getRouteAuthority = (path, props) => {
    const state = getState()
    const menus = state.menus
    if (menus == null) {
        if (state.token == null) {
            dispatch({
                type: 'SET_TOKEN',
                payload: getToken()
            })
        }
        getMenus().then(response => {
            dispatch({
                type: "SET_PERMISSIONS",
                payload: response.data
            });
            console.log("========");
            console.log(getState());
            // window.location.replace(path)
        })
    }
    return true
    // if (path === '/') return true
    // for (let i = 0; i < menus.length; i++) {
    //
    // }
};

const PrivateRoute = ({component: Component, props, ...rest}) => {
    const token = getToken();
    console.log(rest)
    const isAuthenticated = token != null && getRouteAuthority(rest.path, rest)
    return (
        <Route {...rest} render={(props) => (
            isAuthenticated ? <Component {...props} /> : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
        )}/>
    )
}

export default PrivateRoute