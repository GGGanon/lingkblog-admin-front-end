import React from 'react'
import Breadcrumb from "../../components/Breadcrumb";

class Dashboard extends React.Component {

    componentDidMount () {
    }

    componentWillUnmount () {
    }

    render () {
        return (
            <div className='dashboard'>
                <Breadcrumb items={['Dashboard']}/>
                <div style={{ background: '#fff', padding: 24, minHeight: 'calc(100vh - 186px)' }}>
                    <div>Dashboard</div>
                </div>
            </div>
        )
    }
}

export default Dashboard