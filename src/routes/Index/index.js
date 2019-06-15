import React from 'react'
import { Layout, Avatar } from 'antd';

import HeaderMenu from './components/HeaderMenu'
import store from '../../redux/redux.js';
import Content from "../content";
import {getMenus} from "../../base/api/permission";

class Index extends React.Component {

    state = {
        menus: []
    }

    componentDidMount () {
        store.subscribe(() => this.onHeaderMenuChanged(store.getState().menus));
        getMenus().then(response => {
            store.dispatch({
                type: "SET_PERMISSIONS",
                payload: response.data
            });
            if (this.props.location.state != null && this.props.location.state.from != null) {
                const locationObj = this.props.location.state.from;
                const location = {
                    pathname: locationObj.pathname,
                    state: {}
                };
                this.props.history.replace(location)
            }
        });
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
                    <Content menus={this.state.menus}/>
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