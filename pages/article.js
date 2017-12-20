// @flow
import * as React from 'react'
import api from '../lib/api'
import type { Article, StatementLocation } from '../lib/types'
import ArticleContent from '../components/ArticleContent'
import ArticleHeading from '../components/ArticleHeading'
import Page from '../components/Page'

type ArticlePageProps = {
  article: ?Article,
  statementsLocations: Array<StatementLocation>,
}

class ArticlePage extends React.Component<ArticlePageProps> {
  static async getInitialProps({ query }: any) {
    const article = await api.getArticleBySlug(query.slug)
    const statementsLocations = await api.getStatementLocations(query.slug)
    return {
      article,
      statementsLocations,
    }
  }

  render() {
    const { article, statementsLocations } = this.props
    if (!article) return null
    const { title, perex, illustration, published_at } = article

    return (
      <Page title={title}>
        {
          <div>
            <ArticleHeading
              title={title}
              subtitle={perex}
              image={`https://demagog.cz/${illustration}`}
            />
            <ArticleContent
              statementsLocations={statementsLocations}
              article={article}
            />
          </div>
        }
      </Page>
    )
  }
}

export default ArticlePage
