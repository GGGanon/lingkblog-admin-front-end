import React, {Fragment} from 'react'
import { Form, Icon, Input, Button } from 'antd';
import './login.css'

class RegisterForm extends React.Component {

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

    handleReturn = e => {
        e.preventDefault()
        this.props.handleReturn()
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
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleRegister}>
                            Register Now!
                        </Button>
                        <a className="login-form-forgot" href={`javascript:void(0);`} onClick={this.handleReturn} >
                            Return
                        </a>
                    </Form.Item>
                </Form>
            </Fragment>
        )
    }
}

export default RegisterForm