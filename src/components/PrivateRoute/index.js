import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {getToken} from "../../base/utils/auth";

const PrivateRoute = ({component: Component, ...rest}) => {
    const isAuthenticated = getToken();
    return (
        <Route {...rest} render={(props) => (
            !!isAuthenticated ? <Component {...props} /> : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
        )}/>
    )
}

export default PrivateRoute