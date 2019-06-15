import React from 'react'
import '../common/common.css'

import Breadcrumb from "../../components/Breadcrumb";

class Dashboard extends React.Component {

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className='dashboard'>
                <Breadcrumb items={['Dashboard']}/>
                <div className="content">
                    <div>Dashboard</div>
                </div>
            </div>
        )
    }
}

export default Dashboard