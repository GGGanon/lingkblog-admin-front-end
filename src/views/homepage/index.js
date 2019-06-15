import React from 'react'
import {Layout} from 'antd';

import Breadcrumb from "../../components/Breadcrumb";

class HomePage extends React.Component {

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className='home'>
                <Breadcrumb/>
                <div style={{background: '#fff', padding: 24, minHeight: 'calc(100vh - 186px)'}}>
                    <div>Home</div>
                </div>
            </div>
        )
    }
}

export default HomePage