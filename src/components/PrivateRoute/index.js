import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {getToken} from "../../base/utils/auth";
import { getMenus } from "../../base/api/permission";
import store from '../../redux/redux';

const getRouteAuthority = (path, props) => {
    const state = store.getState()
    const menus = state.menus
    if (menus == null) {
        if (state.token == null) {
            store.dispatch({
                type: 'SET_TOKEN',
                payload: getToken()
            })
        }
        getMenus().then(response => {
            store.dispatch({
                type: "SET_PERMISSIONS",
                payload: response.data
            });
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
    // console.log(rest)
    const isAuthenticated = token != null && getRouteAuthority(rest.path, rest)
    return (
        <Route {...rest} render={(props) => (
            isAuthenticated ? <Component {...props} /> : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
        )}/>
    )
}

export default PrivateRoute