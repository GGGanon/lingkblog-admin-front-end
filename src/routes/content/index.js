import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import asyncComponent from "../../components/AsyncComponent/index";

class Content extends React.Component {

    componentDidMount () {
    }

    componentWillUnmount () {
    }

    render () {
        let routers = []
        if (this.props.menus != null) {
            // routers.push()
            routers.push(this.props.menus.map(menu => <Route path={menu.path} component={asyncComponent(() => import(`../../views/${menu.name}`))}/>))
        }
        return (
            <Switch>
                <Route path='/home' component={asyncComponent(() => import("../../views/homepage"))}/>
                {routers}
                <Redirect to="/404" />
            </Switch>
        )
    }
}

export default Content