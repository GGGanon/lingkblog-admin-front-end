import React from 'react'

import Breadcrumb from "../../components/Breadcrumb";

class Articles extends React.Component {

    componentDidMount () {
    }

    componentWillUnmount () {
    }

    render () {
        return (
            <div className='articles'>
                <Breadcrumb items={['Articles']}/>
                <div style={{ background: '#fff', padding: 24, minHeight: 'calc(100vh - 186px)' }}>
                    <div>Articles</div>
                </div>
            </div>
        )
    }
}

export default Articles