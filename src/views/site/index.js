import React from 'react'
import "../common/common.css"

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
                <div className="content">
                    <div>Sites</div>
                </div>
            </div>
        )
    }
}

export default Sites