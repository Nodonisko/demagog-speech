// @flow
import { GraphQLClient } from 'graphql-request'
import type { ArticleList, Article, StatementLocation } from './types'

require('es6-promise').polyfill()
require('isomorphic-fetch')

const client = new GraphQLClient('https://demagog.cz/graphql', {})

const getAllArticles = (): Promise<?ArticleList> =>
  client
    .request(
      `
    {
      articles {
        id
        slug
        title
        illustration
        perex
        source {
          transcript
        }
      }
    }
  `,
    )
    .then(response => response.articles)

const getArticleBySlug = (slug: string): Promise<Article> =>
  client
    .request(
      `
    query ($slug: String!) {
      article(slug: $slug) {
        illustration
        title
        perex
        published_at
        source {
          transcript
          source_url
          medium {
            name
          }
          media_personality {
            name
          }
        }
        statements {
          id
          speaker {
            id
            last_name
            first_name
          }
          assessment {
            id
            explanation
            veracity {
              key
              name
            }
          }
          content
        }
      }
    }
    `,
      {
        slug,
      },
    )
    .then(response => response.article)

const getStatementLocations = (
  slug: string,
): Promise<Array<StatementLocation>> =>
  fetch(`https://demagog-speech-editor.herokuapp.com/data/${slug}`)
    .then(response => response.json())
    .catch(error => {
      console.log(error)
      return []
    })

export default { getAllArticles, getArticleBySlug, getStatementLocations }
