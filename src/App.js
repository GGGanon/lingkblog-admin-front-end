import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Login from './views/Login/index'
import { PrivateRoute } from './components/PrivateRoute'
import './App.css';

function App() {
    return (
        <Switch>
            <Route path='/login' component={Login}/>
            {/*<PrivateRoute path='/' component={Index}/>*/}
        </Switch>
    );
}

export default App;
