import React from 'react'
import { getArticleList } from "../../../base/api/article"
import ArticleTable from "./components/ArticleTable";
import { Button, Icon } from 'antd';

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
            <div>
                <div style={style.form}>
                    <Button type="primary" icon={'plus'} style={style.addButton}>写文章</Button>
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