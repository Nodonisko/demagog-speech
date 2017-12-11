// @flow
import * as React from 'react'
import api from '../lib/api'
import type { ArticleList } from '../lib/types'
import Page from '../components/Page'
import HomeHeading from '../components/HomeHeading'
import ArticleListItem from '../components/ArticleListItem'
import { isEmpty } from 'ramda'

type IndexPageProps = {
  articles: ArticleList,
}

class IndexPage extends React.Component<IndexPageProps> {
  static async getInitialProps() {
    const articles = await api.getAllArticles()
    return {
      articles,
    }
  }

  render() {
    const { articles } = this.props

    return (
      <Page title="Úvod">
        <HomeHeading />
        <div className="list-content">
          <div className="container-fluid">
            <div className="row">
              {articles
                .filter(article => !isEmpty(article.source.transcript))
                .map(article => (
                  <ArticleListItem article={article} key={article.slug} />
                ))}
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default IndexPage
