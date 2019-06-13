import React from 'react'
import { Link } from 'react-router-dom'

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
            items.push(<Menu.Item key={i} name={menuItem.name}><Link to={menuItem.path} >{menuItem.title}</Link></Menu.Item>)
        }

        return (
            <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px', display: 'inline-block' }}>
                {items}
            </Menu>
        )
    }
}

export default HeaderMenu