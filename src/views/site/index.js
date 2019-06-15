import React from 'react'
import {Layout} from 'antd';

import Breadcrumb from "../../components/Breadcrumb";

class Sites extends React.Component {

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className='sites'>
                <Breadcrumb items={['Sites']}/>
                <div style={{background: '#fff', padding: 24, minHeight: 'calc(100vh - 186px)'}}>
                    <div>Sites</div>
                </div>
            </div>
        )
    }
}

export default Sites