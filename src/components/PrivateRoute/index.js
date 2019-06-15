import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {getToken} from "../../base/utils/auth";
import store from '../../redux/redux';

const PrivateRoute = ({component: Component, ...rest}) => {
    const token = getToken();
    if (store.getState().token == null) {
        store.dispatch({
            type: 'SET_TOKEN',
            payload: getToken()
        });
    }
    const path = rest.location != null ? rest.location.pathname: rest.path;
    const isAuthenticated = token != null;
    return (
        <Route {...rest} render={(props) => {
            if (isAuthenticated) {
                if (path === '/') {
                    return <Redirect to={{pathname: '/home', state: {from: props.location}}}/>
                } else if (path === '/home') {
                    return <Component {...props} />
                } else if (store.getState().menus == null) {
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