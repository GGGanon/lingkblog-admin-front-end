import React from 'react'
import "../common/common.css"

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
                <div className="content">
                    <div>Accounts</div>
                </div>
            </div>
        )
    }
}

export default Accounts