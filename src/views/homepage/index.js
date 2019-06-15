import React from 'react'
import "../common/common.css"

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
                <div className="content">
                    <div>Home</div>
                </div>
            </div>
        )
    }
}

export default HomePage