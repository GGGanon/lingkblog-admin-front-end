import React from 'react'
import Breadcrumb from "../../components/Breadcrumb";

class Accounts extends React.Component {

    componentDidMount () {
    }

    componentWillUnmount () {
    }

    render () {
        return (
            <Template>
                <Layout.Content style={{ padding: '0 50px' }}>
                    <div className='accounts'>
                        <Breadcrumb items={['Accounts']}/>
                        <div style={{ background: '#fff', padding: 24, minHeight: 'calc(100vh - 186px)' }}>
                            <div>Accounts</div>
                        </div>
                    </div>
                </Layout.Content>
                <Layout.Footer style={{ textAlign: 'center' }}>LingKBlog ©2019 Created by GGGanon</Layout.Footer>
            </Template>
        )
    }
}

export default Accounts