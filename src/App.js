import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './views/Login/index'
import Index from './routes/Index/index'
import NotFound from './views/noutfound'
import PrivateRoute from './components/PrivateRoute'
import './App.css';

class App extends React.Component {

    render () {
        return (
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/404' component={NotFound}/>
                <PrivateRoute path='/' component={Index}/>
            </Switch>
        );
    }
}

export default App;
