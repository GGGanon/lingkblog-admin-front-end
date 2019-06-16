import React from 'react'
import {Table, Tag, Button, Tooltip} from 'antd'
import {formatDate} from "../../../../base/utils/date";

const {Column} = Table;

class ArticleTable extends React.Component {


    onPaginationChange = (pagination, filters, sorter) => {
        this.props.onPaginationChange(pagination, filters, sorter);
    };

    render() {
        const pagination = {
            current: this.props.currentPage,
            pageSize: this.props.size,
            total: this.props.total
        };
        return (
            <Table
                dataSource={this.props.data}
                loading={this.props.loading}
                pagination={pagination}
                onChange={this.onPaginationChange}>
                <Column
                    title="标题"
                    dataIndex='title'
                    key="title"
                    render={(title, record) => (
                        <Tooltip placement="topLeft" title={`Summary: ${record['summary']}`}>
                            <span>
                                {title}
                            </span>
                        </Tooltip>
                    )}
                />
                <Column
                    title="Category"
                    dataIndex='category_id'
                    key="category_id"
                    width={100}
                />
                <Column
                    title="Tags"
                    dataIndex='tags'
                    key="tags"
                    render={tags => (
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
                    )}
                />
                <Column
                    title="状态"
                    dataIndex='status'
                    key="status"
                    width={100}
                    render={status => (
                        <span>
                            {
                                {"1": "已发布", "2": "草稿"}[status]
                            }
                            </span>
                    )}
                />
                <Column
                    title="创建时间"
                    dataIndex='created_at'
                    key="created_at"
                    width={190}
                    render={created_at => (
                        <span>
                            {formatDate(created_at)}
                        </span>
                    )}
                />
                <Column
                    title="编辑"
                    dataIndex='id'
                    key="id"
                    width={120}
                    align='center'
                    render={id => (<Button>编辑</Button>)}
                />
            </Table>
        )
    }
}

export default ArticleTable;