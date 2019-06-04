import React from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import './login.css'

class Login extends React.Component {

    state = {
        showBox: 'login',   //展示当前表单
        url: '',  //背景图片
        loading:false,
        loading2:false,
    }

    componentDidMount () {
    }

    componentWillUnmount () {
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
            form = <LoginForm handleRegister={this.handleGotoRegister}></LoginForm>
        } else if (this.state.showBox === 'register') {
            form = <RegisterForm handleReturn={this.handleReturn}></RegisterForm>
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