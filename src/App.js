import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Login from './views/Login/index'
import Index from './routes/Index/index'
import { PrivateRoute } from './components/PrivateRoute'
import './App.css';

class App extends React.Component {

    componentWillReceiveProps(nextProps) { // or componentDidUpdate
        if (nextProps.match.params.id !== this.props.match.params.id) {
            fetch(nextProps.match.params.id)
        }
    }

    render () {
        return (
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/' component={Index}/>
                {/*<PrivateRoute path='/' component={Index}/>*/}
            </Switch>
        );
    }
}

export default App;
