import React from 'react'
import { Layout } from 'antd';

import Breadcrumb from "../../components/Breadcrumb";

class Articles extends React.Component {

    componentDidMount () {
    }

    componentWillUnmount () {
    }

    render () {
        return (
            <React.Fragment>
                <Layout.Content style={{ padding: '0 50px' }}>
                    <div className='articles'>
                        <Breadcrumb items={['Articles']}/>
                        <div style={{ background: '#fff', padding: 24, minHeight: 'calc(100vh - 186px)' }}>
                            <div>Articles</div>
                        </div>
                    </div>
                </Layout.Content>
                <Layout.Footer style={{ textAlign: 'center' }}>LingKBlog ©2019 Created by GGGanon</Layout.Footer>
            </React.Fragment>
        )
    }
}

export default Articles