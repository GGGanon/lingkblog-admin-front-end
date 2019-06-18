import React from 'react'
import RichEditer from "./components/RichTextEditor";
import MarkdownEditor from "./components/MarkdownEditor";

class ArticleEdit extends React.Component {

    render () {
        return (
            <div>
                <MarkdownEditor/>
            </div>
        )
    }
}

export default ArticleEdit;
