import React from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import './login.css'
import { setToken, getToken, removeToken } from "../../base/utils/auth";
import { login } from "../../base/api/user";
import store from '../../redux/redux';

class Login extends React.Component {

    state = {
        showBox: 'login'
    };

    componentDidMount () {
        removeToken()
    }

    componentWillUnmount () {
    }

    handleLogin = (username, passwd) => {
        login(username, passwd).then(response => {
            if (response.status >= 200 && response.status < 300) {
                const data = response.data
                setToken(data.access_token)
                store.dispatch({
                    type: 'SET_TOKEN',
                    payload: data.access_token
                })
                const location = {
                    pathname: '/',
                    state: {}
                };
                this.props.history.replace(location)
            }
        }).catch(e => {})
    }

    handleGotoRegister = e => {
        this.setState({
            showBox: 'register'
        })
    };

    handleReturn = e => {
        this.setState({
            showBox: 'login'
        })
    }

    render () {
        let form = null
        if (this.state.showBox === 'login') {
            form = <LoginForm handleRegister={this.handleGotoRegister} handleLogin={this.handleLogin}/>
        } else if (this.state.showBox === 'register') {
            form = <RegisterForm handleReturn={this.handleReturn}/>
        }
        return (
            <div className='login-page'>
                <div className='login-panel'>
                    <h1 className='login-panel__logo'>Logo</h1>
                    {form}
                </div>
            </div>
        )
    }
}

export default Login