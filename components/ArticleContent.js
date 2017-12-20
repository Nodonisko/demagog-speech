// @flow
import * as React from 'react'
import type {
  Statement as StatementType,
  StatementLocation,
  Article,
} from '../lib/types'
import Statement from './Statement'
import { find, path } from 'ramda'
import reactStringReplace from 'react-string-replace'
import Sidebar from './Sidebar'
import StatementPopup from './StatementPopup'
import escapeStringRegexp from 'escape-string-regexp'
import SidebarInfo from './SidebarInfo'

type ArticleContentProps = {
  statementsLocations: Array<StatementLocation>,
  article: Article,
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
    const { article: { statements } } = this.props
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
    this.props.statementsLocations.forEach(location => {
      const statement = this.findAssesmentById(location.id)
      const fragmentWhiteChars = location.fragment.match(/\r?\n|\r/g)
      if (!statement) return
      replacedText = reactStringReplace(
        replacedText,
        new RegExp(
          `(${escapeStringRegexp(location.fragment).replace(
            /\r?\n|\r/g,
            fragmentWhiteChars ? '(\\s*)(.*)' : '',
          )})`,
          'mi',
        ),
        match => (
          <Statement
            {...statement}
            onClick={this.handleStatementClick}
            key={location.id}
            active={
              this.state.statementPopup &&
              location.id === this.state.statementPopup.id
            }
          >
            {match}
          </Statement>
        ),
      )
    })

    return replacedText
  }

  render() {
    const { article: { source }, article } = this.props
    const { statementPopup, statementPopupOffset } = this.state
    return (
      <div className="article-content">
        <div className="container-fluid">
          <div className="row ">
            <div className="col offset-sm-1">
              {this.insertMarks(source.transcript)}
              <style jsx>{`
                div {
                  white-space: pre-wrap;
                }
              `}</style>
            </div>
            <Sidebar>
              <SidebarInfo
                medium={source.medium.name}
                mediumUrl={source.source_url}
                moderatorName={source.media_personality.name}
                publishedAt={article.published_at}
              />
              <StatementPopup
                statement={statementPopup}
                offset={statementPopupOffset}
                onClose={this.handleStatementPopupClose}
              />
            </Sidebar>
            <div className="col-sm-1" />
          </div>
        </div>
      </div>
    )
  }
}

export default ArticleContent
