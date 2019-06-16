import React from 'react'
import {Table, Tag, Button} from 'antd'

class ArticleTable extends React.Component {


    onPaginationChange = (pagination, filters, sorter) => {
        this.props.onPaginationChange(pagination, filters, sorter);
    };

    render () {
        const pagination = {
            current: this.props.currentPage,
            pageSize: this.props.size,
            total: this.props.total
        };
        return (
            <Table
                columns={this.columns}
                dataSource={this.props.data}
                loading={this.props.loading}
                pagination={pagination}
                onChange={this.onPaginationChange}/>
        )
    }

    columns = [
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
}

export default ArticleTable;