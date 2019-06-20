import React from 'react'
import {getArticleList, updateArticleStatus, deleteArticle} from "../../../base/api/article"
import ArticleTable from "./components/ArticleTable";
import {Button, Modal, Switch, Icon} from 'antd';
import {Link} from 'react-router-dom'

import '../../common/common.css'

class ArticleList extends React.Component {

    state = {
        page: 1,
        size: 10,
        total: 0,
        pages: 0,
        data: [],
        loading: false,
        settingData: {
            visible: false,
            articleId: -1,
            status: 1
        }
    };

    componentDidMount() {
        this.getArticleList(this.state.page, this.state.size)
    }

    async getArticleList(page, limit) {
        this.setState({
            loading: true
        });
        try {
            const response = await getArticleList(page, limit);
            if (response.status >= 200 && response.status < 300) {
                this.setState({
                    data: response.data["articles"],
                    page: page,
                    total: response.data["total"],
                    pages: response.data["pages"]
                });
            }
        } catch (e) {
            console.log(e)
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    deleteArticle(id) {
        deleteArticle(id).then(response => {
            this.getArticleList(this.state.page, this.state.size)
        }).catch(e => {
            console.log(e)
        })

    }

    onPaginationChange = (pagination, filters, sorter) => {
        this.getArticleList(pagination.current, pagination.pageSize)
    };

    // 打开设置面板
    onSettingClick = (id, status) => {
        this.setState({
            settingData: {
                visible: true,
                articleId: id,
                status: status
            }
        })
    };

    handleSettingOk = () => {
        console.log(this.state);
        updateArticleStatus(this.state.settingData.articleId, this.state.settingData.status).then(response => {
            this.setState({
                settingData: {
                    visible: false,
                    articleId: -1,
                    status: 1
                }
            });
            this.getArticleList(this.state.page, this.state.size)
        }).catch(e => {
           console.log(e)
        });
    };

    handleSettingCancel = () => {
        this.setState({
            settingData: {
                visible: false,
                articleId: -1,
                status: 1
            }
        })
    };

    onDeleteClick = id => {
        console.log(id);
        var self = this
        Modal.confirm({
            icon: <Icon type="question-circle" color={"red"}></Icon>,
            title: <span>是否确认删除该文章？</span>,
            okText: "删除",
            okType: "danger",
            maskClosable: 'true',
            cancelText: "取消",
            onOk() {self.deleteArticle(id)},
            onCancel() {},
        });
    };

    render() {
        return (
            <div className="content" style={{position: "relative", paddingBottom: "88px"}}>
                {/*<div style={style.form}>*/}
                {/**/}
                {/*</div>*/}
                <ArticleTable
                    style={style.articleTable}
                    data={this.state.data}
                    loading={this.state.loading}
                    currentPage={this.state.page}
                    size={this.state.size}
                    total={this.state.total}
                    onPaginationChange={this.onPaginationChange}
                    onSettingClick={this.onSettingClick}
                    onDeleteClick={this.onDeleteClick}
                />
                <Link to={`${this.props.match.url}/write`}>
                    <Button style={style.addButton} size="large" type="primary" shape="circle" icon={'plus'}/>
                </Link>
                <Modal
                    title="更新文章状态"
                    visible={this.state.settingData.visible}
                    onOk={this.handleSettingOk}
                    onCancel={this.handleSettingCancel}>
                    <p>是否发布该文章: </p>
                    <Switch checked={this.state.settingData.status == 1} onChange={(e) => {
                        this.setState({
                            settingData: {
                                visible: true,
                                articleId: this.state.settingData.articleId,
                                status: 3 - this.state.settingData.status
                            }
                        })
                    }}/>
                </Modal>
            </div>
        )
    }
}

export default ArticleList;

const style = {
    form: {
        textAlign: "right"
    },
    addButton: {
        position: "absolute",
        right: "28px",
        bottom: "28px",
        boxShadow: "1px 1px 6px 0 #BDBDBD"
    }
}