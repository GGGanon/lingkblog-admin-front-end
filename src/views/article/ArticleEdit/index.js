import React from 'react'
import RichEditer from "./components/RichTextEditor";
import {getArticleDetailByUid} from "../../../base/api/article";
// import MarkdownEditor from "./components/MarkdownEditor";
import {Row, Col, Upload, Icon, Input, Button} from 'antd';

import './article-editor.css'

import '../../common/common.css'

class ArticleEdit extends React.Component {

    state = {
        mode: MODE_EDIT,
        article: {},
        title: "",
        description: "",
        imageUrl: "" // fixme delete me
    };

    constructor () {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (this.props.match != null) {
            if (this.props.match.path === '/articles/write') {
                this.setState({
                    mode: MODE_WRITE
                });
            } else {
                this.setState({
                    mode: MODE_EDIT
                });
                const articleUid = this.props.match.params['id'];
                this.getArticle(articleUid)
            }
        }
    }

    componentWillUnmount() {
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log(this.state)
    }

    async getArticle(uid) {
        const response = await getArticleDetailByUid(uid)
        console.log(response)
    }

    // TODO upload image
    props = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
        }
    };


    render() {
        return (
            <React.Fragment>
                <div style={style.editPanel}>
                    <Upload.Dragger {...this.props} style={{marginBottom: '16px'}}>
                        <p className="ant-upload-drag-icon"><Icon type="file-image"/></p>
                        <p className="ant-upload-text">上传封面</p>
                    </Upload.Dragger>
                    <input
                        type="text"
                        placeholder="请输入标题"
                        className="text-input"
                        style={style.settingPanelTitle}
                        name="title"
                        onChange={this.handleChange}/>
                    <input
                        type="text"
                        placeholder="请输入文章描述"
                        className="text-input"
                        style={style.settingPanelDescription}
                        name="description"
                        onChange={this.handleChange}/>
                    <RichEditer onChange={this.handleChange}/>
                </div>
                <Button style={style.addButton} size="large" type="primary" shape="circle" icon={'check'}/>
            </React.Fragment>
        )
    }
}

export default ArticleEdit;
const MODE_WRITE = 'MODE_WRITE';
const MODE_EDIT = 'MODE_EDIT';
const style = {
    addButton: {
        position: "fixed",
        right: "28px",
        bottom: "28px",
        boxShadow: "1px 1px 6px 0 #BDBDBD"
    },
    editPanel: {
        background: "#fff",
        width: '768px',
        padding: "18px",
        minHeight: "calc(100vh)",
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: "10px",
        borderRadius: "10px",
        boxShadow: "1px 1px 6px 0 #BDBDBD"
    },
    settingPanelTitle: {
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '12px',
        marginTop: '16px'
    },
    settingPanelDescription: {
        fontSize: '16px',
        paddingLeft: '4px',
        marginBottom: '12px'
    }
}