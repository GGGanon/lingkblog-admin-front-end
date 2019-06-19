import React from 'react'
import '../common/common.css'

import Breadcrumb from "../../components/Breadcrumb";
import ArticleList from "./ArticleList/index";
import ArticleEdit from "./ArticleEdit/index";
import { Route, Switch, Redirect } from 'react-router-dom'
// import asyncComponent from "../../components/AsyncComponent";

class Articles extends React.Component {

    componentDidMount () {
    }

    componentWillUnmount () {
    }

    render () {
        return (
            <div className='articles'>
                <Breadcrumb items={this.props.location.pathname.split('/')}/>
                <Switch>
                    <Route path={`${this.props.match.path}/write`} component={ArticleEdit}/>
                    <Route path={`${this.props.match.path}/edit/:id`} component={ArticleEdit}/>
                    <Route path={`${this.props.match.path}/`} component={ArticleList}/>
                    <Redirect to="/404" />
                </Switch>
                {/*<div className="content">*/}
                    {/**/}
                {/*</div>*/}
            </div>
        )
    }
}

export default Articles