import React from 'react'
import { Link } from 'react-router-dom'

import { Menu } from 'antd';

class HeaderMenu extends React.Component {

    componentDidMount () {
    }

    componentWillUnmount () {
    }

    render () {
        const items = [];
        let select = null;

        for (let i = 0; i < this.props.menus.length; i++) {
            const menuItem = this.props.menus[i];
            items.push(<Menu.Item key={i} name={menuItem.name}><Link to={menuItem.path} >{menuItem.title}</Link></Menu.Item>)
            if (this.props.location != null && this.props.location.startsWith(menuItem.path)) {
                select = i;
            }
        }
        console.log(select);

        return (
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[String(select)]}
                style={{ lineHeight: '64px', display: 'inline-block' }}>
                {items}
            </Menu>
        )
    }
}

export default HeaderMenu