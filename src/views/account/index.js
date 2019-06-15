import React from 'react'
import {Layout} from 'antd';

import Breadcrumb from "../../components/Breadcrumb";

class Accounts extends React.Component {

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className='accounts'>
                <Breadcrumb items={['Accounts']}/>
                <div style={{background: '#fff', padding: 24, minHeight: 'calc(100vh - 186px)'}}>
                    <div>Accounts</div>
                </div>
            </div>
        )
    }
}

export default Accounts