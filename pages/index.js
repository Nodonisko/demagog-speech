// @flow
import * as React from 'react'
import api from '../lib/api'
import Link from 'next/link'
import type { ArticleList } from '../lib/types'

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
      <div>
        {articles.map(({ slug }) => (
          <div>
            <Link href={{ pathname: '/article', query: { slug } }}>
              <a>{slug}</a>
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

export default IndexPage
