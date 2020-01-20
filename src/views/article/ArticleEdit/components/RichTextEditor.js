import React from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

class RichEditer extends React.Component {

    state = {
        // 创建一个空的editorState作为初始值
        editorState: BraftEditor.createEditorState(null)
    };

    async componentDidMount () {
        // 假设此处从服务端获取html格式的编辑器内容
        // const htmlContent = await fetchEditorContent()
        this.setState({
            editorState: BraftEditor.createEditorState("")
        })
    }

    submitContent = async () => {
        // const htmlContent = this.state.editorState.toHTML()
    };

    handleEditorChange = (editorState) => {
        this.setState({ editorState })
    };

    render () {
        return (
            <div>
                <BraftEditor
                    value={this.state.editorState}
                    onChange={this.handleEditorChange}
                    onSave={this.submitContent}
                />
            </div>
        )
    }
}

export default RichEditer;
