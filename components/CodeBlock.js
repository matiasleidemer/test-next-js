import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedlight } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const CodeBlock = ({ language, value }) => (
  <SyntaxHighlighter language={language} style={solarizedlight}>
    {value}
  </SyntaxHighlighter>
)

export default CodeBlock
