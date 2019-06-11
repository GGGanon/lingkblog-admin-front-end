import React from 'react'

import { Menu, Icon } from 'antd';
import { createStore } from 'redux';
import reducer from '../../../redux/reducers'
let { subscribe, dispatch, getState } = createStore(reducer);

class HeaderMenu extends React.Component {

    componentDidMount () {
        // subscribe(this.onMenuChange())
    }

    componentWillUnmount () {
    }

    render () {
        subscribe(() => console.log("Store is changed: " + getState()));
        console.log("header")
        console.log(getState())
        return (
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px', display: 'inline-block' }}>
                <Menu.Item key="1"><Icon type="dashboard" />仪表盘</Menu.Item>
                <Menu.Item key="2"><Icon type="bulb" />文章发布</Menu.Item>
                <Menu.Item key="3"><Icon type="team" />成员管理</Menu.Item>
            </Menu>
        )
    }
}

export default HeaderMenu