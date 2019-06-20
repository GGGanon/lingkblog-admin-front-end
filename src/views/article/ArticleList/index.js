import React from 'react'
import { getArticleList } from "../../../base/api/article"
import ArticleTable from "./components/ArticleTable";
import { Button, Icon } from 'antd';
import { Link } from 'react-router-dom'

import '../../common/common.css'

class ArticleList extends React.Component {

    state = {
        page: 1,
        size: 10,
        total: 0,
        pages: 0,
        data: [],
        loading: false
    };

    componentDidMount () {
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

    onPaginationChange = (pagination, filters, sorter) => {
        this.getArticleList(pagination.current, pagination.pageSize)
    };

    render () {
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
                />
                <Link to={`${this.props.match.url}/write`}>
                    <Button style={style.addButton} size="large" type="primary" shape="circle" icon={'plus'}/>
                </Link>
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
        bottom: "28px"
    }
}