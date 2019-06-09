import React, {Fragment} from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { createStore } from 'redux';
import permissions from '../../redux/reducers';
import './login.css';

const store = createStore(permissions)

class LoginForm extends React.Component {

    constructor () {
        super()
    }

    componentDidMount () {
    }

    componentWillUnmount () {
    }

    handleLogin = e => {
        e.preventDefault();
        this.props.handleLogin();
    };

    handleForgetPassword = e => {
        e.preventDefault();
    };

    handleRegister = e => {
        e.preventDefault()
        this.props.handleRegister()
    };


    render () {
        return (
            <Fragment>
                <Form className='login-form' style={{margin: '20px', textAlign: 'left'}}>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"/>
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"/>
                    </Form.Item>
                    <Form.Item>
                        <Checkbox>Remember me</Checkbox>
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleLogin}>
                            Log in
                        </Button>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleRegister}>
                            Register Now!
                        </Button>
                    </Form.Item>
                </Form>
            </Fragment>
        )
    }
}

export default LoginForm