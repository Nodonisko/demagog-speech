// @flow
import * as React from 'react'
import Link from 'next/link'
import type { ArticleListItem as ArticleListItemType } from '../lib/types'
import removeHtmlTags from '../lib/removeHtmlTags'

type ArticleListItemProps = {
  article: ArticleListItemType,
}

const ArticleListItem = ({
  article: { slug, illustration, title, perex },
}: ArticleListItemProps) => (
  <div className="card">
    <img
      className="card-img-top"
      src={`https://demagog.cz/${illustration}`}
      alt={title}
    />
    <div className="card-body">
      <h4 className="card-title">{title}</h4>
      <p className="card-text">{removeHtmlTags(perex).slice(0, 135)}...</p>
      <Link prefetch href={{ pathname: '/article', query: { slug } }}>
        <a className="btn btn-primary">Číst dál</a>
      </Link>
    </div>
  </div>
)

export default ArticleListItem
