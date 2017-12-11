// @flow
import * as React from 'react'
import type {
  Statement as StatementType,
  StatementLocation,
} from '../lib/types'
import Statement from './Statement'
import { find, path } from 'ramda'
import reactStringReplace from 'react-string-replace'
import Sidebar from './Sidebar'
import StatementPopup from './StatementPopup'

type ArticleContentProps = {
  content: string,
  statements: Array<StatementType>,
  statementsLocations: Array<StatementLocation>,
}

type ArticleContentState = {
  statementPopup: ?StatementType,
  statementPopupOffset: number,
}

class ArticleContent extends React.Component<
  ArticleContentProps,
  ArticleContentState,
> {
  state = {
    statementPopup: null,
    statementPopupOffset: 0,
  }

  findAssesmentById = (id: string) => {
    const { statements } = this.props
    const statement = find(val => val.id === id)(statements)

    return statement
  }

  handleStatementClick = (id: string, ref: Object) => {
    const statement = this.findAssesmentById(id)
    this.setState({
      statementPopup: statement,
      statementPopupOffset: ref.offsetTop,
    })
  }

  handleStatementPopupClose = () => {
    this.setState({ statementPopup: null })
  }

  insertMarks = (text: string) => {
    let replacedText = text
    console.log(this.props.statementsLocations)
    this.props.statementsLocations
      .map(location => ({
        content: text.slice(+location.start, +location.end),
        id: location.id,
      }))
      .forEach(location => {
        console.log(location, this.props.statements)
        const statement = this.findAssesmentById(location.id)
        console.log(statement)
        if (!statement) return

        replacedText = reactStringReplace(
          replacedText,
          location.content,
          match => (
            <Statement {...statement} onClick={this.handleStatementClick}>
              {match}
            </Statement>
          ),
        )
      })

    return replacedText
  }

  render() {
    const { content } = this.props
    const { statementPopup, statementPopupOffset } = this.state
    return (
      <div className="article-content">
        <div className="container-fluid">
          <div className="row ">
            <div className="col offset-sm-1">
              {this.insertMarks(content)}
              <style jsx>{`
                div {
                  white-space: pre-wrap;
                }
              `}</style>
            </div>
            <Sidebar>
              <StatementPopup
                statement={statementPopup}
                offset={statementPopupOffset}
                onClose={this.handleStatementPopupClose}
              />
            </Sidebar>
          </div>
        </div>
      </div>
    )
  }
}

export default ArticleContent
