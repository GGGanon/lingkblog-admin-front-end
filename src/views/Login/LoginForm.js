import React, {Fragment} from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.css';

class LoginForm extends React.Component {

    constructor () {
        super()
        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount () {
    }

    componentWillUnmount () {
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleLogin = e => {
        e.preventDefault();
        this.props.handleLogin(this.state.username, this.state.password);
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
                            name="username"
                            placeholder="Username"
                            onChange={this.handleChange}/>
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={this.handleChange}/>
                    </Form.Item>
                    <Form.Item>
                        <Checkbox>Remember me</Checkbox>
                        <a className="login-form-forgot" href={`javascript:void(0);`}>
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