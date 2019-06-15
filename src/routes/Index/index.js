import React from 'react'
import { Layout, Avatar } from 'antd';

import HeaderMenu from './components/HeaderMenu'
import store from '../../redux/redux.js';
import { Route, Switch, Redirect } from 'react-router-dom'
import asyncComponent from "../../components/AsyncComponent";

class Index extends React.Component {

    render () {
        let routers = [];
        if (store.getState().menus != null) {
            routers.push(store.getState().menus.map(menu => <Route path={menu.path} component={asyncComponent(() => import(`../../views/${menu.name}`))}/>))
        }
        return (
            <Layout className="layout">
                <Layout.Header>
                    <div style={styles.logo}>
                        Logo
                    </div>
                    <HeaderMenu menus={store.getState().menus}/>
                    <div style={{float: 'right'}}>
                        <Avatar size={40} icon="user" />
                    </div>
                </Layout.Header>
                <React.Fragment>
                    <Layout.Content style={{ padding: '0 32px' }}>
                        <Switch>
                            <Route path='/home' component={asyncComponent(() => import("../../views/homepage"))}/>
                            {routers}
                            <Redirect to="/404" />
                        </Switch>
                    </Layout.Content>
                    <Layout.Footer style={{ textAlign: 'center', marginTop: '12px', paddingTop: '10px' }}>LingKBlog ©2019 Created by GGGanon</Layout.Footer>
                </React.Fragment>
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