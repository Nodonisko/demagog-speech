// @flow
import * as React from 'react'
import type { Statement as StatementType } from '../lib/types'
import StringSimilarity from 'string-similarity'
import Statement from './Statement'
import R from 'ramda'

type ArticleContentProps = {
  content: string,
  statements: Array<StatementType>,
}

class ArticleContent extends React.Component<ArticleContentProps> {
  wrapStatements = (text: string) => {
    if (text.length < 4) return text

    const { statements } = this.props
    const matchedStatements = statements
      .map(statement => {
        const matchUnit = StringSimilarity.compareTwoStrings(
          text,
          statement.content,
        )
        if (matchUnit > 0.4) {
          return statement
        }
        return null
      })
      .filter(item => item)

    if (matchedStatements && matchedStatements[0]) {
      return <Statement {...matchedStatements[0]}>{text}</Statement>
    }
    return text
  }

  nl2br = (content: string) =>
    content
      .split('\n')
      .map((item, key) => <p key={key}>{this.wrapStatements(item)}</p>)

  render() {
    const { content } = this.props
    return <div>{this.nl2br(content)}</div>
  }
}

export default ArticleContent
