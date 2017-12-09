// @flow
import * as React from 'react'
import api from '../lib/api'
import type { Article } from '../lib/types'
import ArticleContent from '../components/ArticleContent'

type ArticlePageProps = {
  article: ?Article,
}

class ArticlePage extends React.Component<ArticlePageProps> {
  static async getInitialProps({ query }: any) {
    const article = await api.getArticleBySlug(query.slug)
    return {
      article,
    }
  }

  render() {
    const { article } = this.props

    return (
      <div>
        {article && (
          <ArticleContent
            content={article.source.transcript}
            statements={article.statements}
          />
        )}
      </div>
    )
  }
}

export default ArticlePage
