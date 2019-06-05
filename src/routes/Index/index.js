import React from 'react'
import { Layout, Avatar } from 'antd';

import HeaderMenu from './components/HeaderMenu'
import Breadcrumb from "./components/Breadcrumb";

class Index extends React.Component {

    componentDidMount () {
    }

    componentWillUnmount () {
    }

    render () {
        return (
            <Layout className="layout">
                <Layout.Header>
                    <div style={styles.logo}>
                        Logo
                    </div>
                    <HeaderMenu/>
                    <div style={{float: 'right'}}>
                        <Avatar size={40} icon="user" />
                    </div>
                </Layout.Header>
                <Layout.Content style={{ padding: '0 50px' }}>
                    <Breadcrumb items={['Dashboard']}/>
                    <div style={{ background: '#fff', padding: 24, minHeight: 'calc(100vh - 186px)' }}>
                        <div>Dashboard</div>
                    </div>
                </Layout.Content>
                <Layout.Footer style={{ textAlign: 'center' }}>LingKBlog ©2019 Created by GGGanon</Layout.Footer>
            </Layout>
        )
    }
}


const styles = {
    logo:{
        width: '100px',
        height: '31px',
        margin: '16px 24px 0 0',
        float: 'left',
        background: '#0D47A1',
        textAlign: 'center',
        lineHeight: '31px',
        color: 'white',
        fontWeight: 'bold'
    }
}

export default Index