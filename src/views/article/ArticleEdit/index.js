import React from 'react'
import RichEditer from "./components/RichTextEditor";
// import MarkdownEditor from "./components/MarkdownEditor";

import '../../common/common.css'

class ArticleEdit extends React.Component {

    state = {
      mode: MODE_EDIT
    };

    componentDidMount() {
        if (this.props.match != null && this.props.match.path === '/articles/write') {
            this.setState({
                mode: MODE_WRITE
            })
        } else {
            this.setState({
                mode: MODE_EDIT
            })
        }
    }

    componentWillUnmount() {
    }

    render () {
        return (
            <div className="content">
                <RichEditer/>
            </div>
        )
    }
}

export default ArticleEdit;
const MODE_WRITE = 'MODE_WRITE';
const MODE_EDIT = 'MODE_EDIT';