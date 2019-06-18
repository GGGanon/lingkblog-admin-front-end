import React from 'react'
const ReactMarkdown = require('react-markdown')

class RichEditer extends React.Component {

    render () {
        return (
            <div>
                <ReactMarkdown source={"# Test\n### Test\n"} />
            </div>
        )
    }
}

export default RichEditer;
