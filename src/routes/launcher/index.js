import React from 'react'
import store from "../../redux/redux";
import { Spin, Alert } from 'antd';
import {getMenus} from "../../base/api/permission";

class Launcher extends React.Component {

    componentDidMount () {
        if (store.getState().menus == null) {
            getMenus().then(response => {
                store.dispatch({
                    type: "SET_PERMISSIONS",
                    payload: response.data
                });
                if (this.props.location.state != null && this.props.location.state.from != null) {
                    const locationObj = this.props.location.state.from;
                    const location = {
                        pathname: locationObj.pathname,
                        state: {}
                    };
                    this.props.history.replace(location)
                }
            });
        }
    }

    render () {
        return (
            <div style={styles.loadingContainer}>
                <Spin style={styles.loading} size="large" tip="系统正在启动..."/>
            </div>
            // <div className='loading'>
            //     Loading
            // </div>
        )
    }
}

export default Launcher


const styles = {
    loadingContainer: {
        position: "absolute",
        background: "#f7f7f7",
        width: "100vw",
        height: "100vh",
        textAlign: "center"
    },
    loading: {
        position: "relative",
        top: "40%"
    }
};