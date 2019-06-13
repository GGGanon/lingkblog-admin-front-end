import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {getToken} from "../../base/utils/auth";
import { getMenus } from "../../base/api/permission";
import store from '../../redux/redux';

const routeAuthority = (path, props) => {
    const state = store.getState();
    const menus = state.menus;
    if (menus == null) {
        if (state.token == null) {
            store.dispatch({
                type: 'SET_TOKEN',
                payload: getToken()
            });
        }
        getMenus().then(response => {
            store.dispatch({
                type: "SET_PERMISSIONS",
                payload: response.data
            });
        });
        return true
    } else {
        return matchRoute(path)
    }
};

const matchRoute = (path) => {
    const menus = store.getState().menus;
    if (path === '/home') return true;
    for (let i = 0; i < menus.length; i++) {
        if (menus[i].path === path) {
            return true
        }
    }
    return false
};

const PrivateRoute = ({component: Component, props, ...rest}) => {
    const token = getToken();
    const path = rest.location != null ? rest.location.pathname: rest.path
    const isAuthenticated = token != null && routeAuthority(path, rest)
    return (
        <Route {...rest} render={(props) => {
            if (isAuthenticated) {
                if (path === '/') {
                    return <Redirect to={{pathname: '/home', state: {from: props.location}}}/>
                } else {
                    return <Component {...props} />
                }
            }
            return <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
        }}/>
    )
}

export default PrivateRoute