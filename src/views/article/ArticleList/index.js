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
            <div className="content">
                <div style={style.form}>
                    <Link to={`${this.props.match.url}/write`}>
                        <Button style={style.addButton} type="primary" icon={'plus'}>写文章</Button>
                    </Link>
                </div>
                <ArticleTable
                    data={this.state.data}
                    loading={this.state.loading}
                    currentPage={this.state.page}
                    size={this.state.size}
                    total={this.state.total}
                    onPaginationChange={this.onPaginationChange}
                />
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
        marginBottom: "10px"
    }
}