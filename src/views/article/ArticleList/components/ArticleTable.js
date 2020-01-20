import React from 'react'
import {Table, Tag, Button, Tooltip} from 'antd'
import { Link } from 'react-router-dom'
import {formatDate} from "../../../../base/utils/date";

const {Column} = Table;

class ArticleTable extends React.Component {

    onPaginationChange = (pagination, filters, sorter) => {
        this.props.onPaginationChange(pagination, filters, sorter);
    };

    onSettingClick = (id, status, e) => {
        e.preventDefault();
        this.props.onSettingClick(id, status);
    };

    onDeleteClick = (id, e) => {
        e.preventDefault();
        this.props.onDeleteClick(id);
    };

    render() {
        const pagination = {
            current: this.props.currentPage,
            pageSize: this.props.size,
            total: this.props.total,
            position: "top"
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
                    title="Tags"
                    dataIndex='tags'
                    key="tags"
                    render={tags => (<span>{tags.map(tag => (<Tag color={'blue'} key={tag}>{tag}</Tag>))}</span>)}
                />
                <Column
                    title="Category"
                    dataIndex='category_id'
                    key="category_id"
                    width={100}
                />
                <Column
                    title="状态"
                    dataIndex='status'
                    key="status"
                    width={100}
                    render={status => (
                        <span>
                            {
                                {
                                    "1": <Tag color={'#2db7f5'}>已发布</Tag>,
                                    "2": <Tag color={'#87d068'}>草稿</Tag>
                                }[status]
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
                    title="操作"
                    dataIndex='id'
                    key="id"
                    width={150}
                    align='center'
                    render={(id, record) => (
                        <React.Fragment>
                            <Link to={`/articles/edit/${record.uuid}`} >
                                <Button size={`small`} type="link" icon={'edit'}/>
                            </Link>
                            <Button
                                size={`small`}
                                type="link"
                                icon={'setting'}
                                style={{color: '#9E9E9E'}}
                                onClick={(e) => this.onSettingClick(id, record.status, e)}/>
                            <Button
                                size={`small`}
                                type="link"
                                icon={'delete'}
                                style={{color: 'red'}}
                                onClick={(e) => this.onDeleteClick(id, e)}/>
                        </React.Fragment>
                    )}
                />
            </Table>
        )
    }
}

export default ArticleTable;