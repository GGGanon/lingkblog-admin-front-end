import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Login from './views/Login/index'
import Index from './routes/Index/index'
import { PrivateRoute } from './components/PrivateRoute'
import './App.css';

function App() {
    return (
        <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/' component={Index}/>
            {/*<PrivateRoute path='/' component={Index}/>*/}
        </Switch>
    );
}

export default App;
