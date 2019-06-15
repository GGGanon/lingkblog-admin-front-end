import React from 'react'
import {Table, Tag, Button} from 'antd'
import { getArticleList } from "../../base/api/article"

class ArticleList extends React.Component {

    state = {
        page: 1,
        limit: 10,
        data: []
    };

    componentDidMount () {
        this.getArticleList(this.state.page, this.state.limit)
    }

    async getArticleList(page, limit) {
        const response = await getArticleList(page, limit)
        console.log(response)
        if (response.status >= 200 && response.status < 300) {
            this.setState({
                data: response.data["articles"]
            })
        }
    }

    render () {
        return (
            <div>
                <Table columns={columns} dataSource={this.state.data} />
            </div>
        )
    }
}

export default ArticleList;

const columns = [
    {
        title: '标题',
        dataIndex: 'title',
        key: 'title'
    },
    {
        title: '摘要',
        dataIndex: 'summary',
        key: 'summary',
    },
    {
        title: 'Category',
        dataIndex: 'category_id',
        key: 'category_id',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag}
                        </Tag>
                    );
                })}
                </span>
        ),
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: status => (
            <span>
                {
                    {"1": "已发布", "2": "草稿"}[status]
                }
            </span>
        )
    },
    {
        title: '创建时间',
        dataIndex: 'created_at',
        key: 'created_at',
    },
    {
        title: '编辑',
        dataIndex: 'id',
        key: 'id',
        render: id => (
            <Button>编辑</Button>
        )
    }
];