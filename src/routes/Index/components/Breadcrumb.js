import React from 'react'

import { Breadcrumb } from 'antd';

class MyBreadcrumb extends React.Component {

    componentDidMount () {
    }

    componentWillUnmount () {
    }

    render () {
        const items = []
        for (let i = 0; this.props.items != null && i < this.props.items.length; i++) {
            items.push(<Breadcrumb.Item key={i}>{this.props.items[i]}</Breadcrumb.Item>)
        }
        return (
            <Breadcrumb style={{ margin: '16px 0'}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                {items}
            </Breadcrumb>
        )
    }

}

export default MyBreadcrumb