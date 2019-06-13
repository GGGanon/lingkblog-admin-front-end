import React from 'react'
import { Layout, Avatar } from 'antd';

import HeaderMenu from './components/HeaderMenu'
import store from '../../redux/redux.js';
import { Route } from 'react-router-dom'
import HomePage from "../../views/homepage"
import Articles from "../../views/articles"
import Dashboard from "../../views/dashboard"
import Sites from "../../views/site";
import Accounts from "../../views/account";
import PrivateRoute from "../../components/PrivateRoute";

class Index extends React.Component {

    state = {
        menus: []
    }

    componentDidMount () {
        store.subscribe(() => this.onHeaderMenuChanged(store.getState().menus));
    }

    componentWillUnmount () {
    }

    onHeaderMenuChanged (menus) {
        this.setState({
            menus: menus
        })
    }

    render () {
        return (
            <Layout className="layout">
                <Layout.Header>
                    <div style={styles.logo}>
                        Logo
                    </div>
                    <HeaderMenu menus={this.state.menus}/>
                    <div style={{float: 'right'}}>
                        <Avatar size={40} icon="user" />
                    </div>
                </Layout.Header>
                <Layout.Content style={{ padding: '0 50px' }}>
                    <Route path='/home' component={HomePage}/>
                    <PrivateRoute path='/articles' component={Articles}/>
                    <PrivateRoute path='/dashboard' component={Dashboard}/>
                    <PrivateRoute path='/sites' component={Sites}/>
                    <PrivateRoute path='/accounts' component={Accounts}/>
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