import React from 'react'

import { Menu } from 'antd';

class HeaderMenu extends React.Component {

    constructor() {
        super();
    }

    componentDidMount () {
    }

    componentWillUnmount () {
    }

    render () {
        const items = [];

        for (let i = 0; i < this.props.menus.length; i++) {
            const menuItem = this.props.menus[i];
            items.push(<Menu.Item key={i} to={menuItem.path} name={menuItem.name}>{menuItem.title}</Menu.Item>)
        }

        return (
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px', display: 'inline-block' }}>
                {items}
            </Menu>
        )
    }
}

export default HeaderMenu