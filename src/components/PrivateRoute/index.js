import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {getToken} from "../../base/utils/auth";
import reducers from '../../redux/reducers'

const getRouteAuthority = (path) => {
  return true
};

const PrivateRoute = ({component: Component, ...rest}) => {
    const token = getToken();
    const isAuthenticated = token != null && getRouteAuthority()
    console.log(token)
    console.log(isAuthenticated)
    return (
        <Route {...rest} render={(props) => (
            isAuthenticated ? <Component {...props} /> : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
        )}/>
    )
}

export default PrivateRoute