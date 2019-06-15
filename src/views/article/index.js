import React from 'react'
import '../common/common.css'

import Breadcrumb from "../../components/Breadcrumb";
import ArticleList from "./ArticleList";

class Articles extends React.Component {

    componentDidMount () {
    }

    componentWillUnmount () {
    }

    render () {
        return (
            <div className='articles'>
                <Breadcrumb items={['Articles']}/>
                <div className="content">
                    <ArticleList/>
                </div>
            </div>
        )
    }
}

export default Articles