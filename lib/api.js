// @flow
import { GraphQLClient } from 'graphql-request'
import type { ArticleList, Article } from './types'

const client = new GraphQLClient('https://demagog.cz/graphql', {})

const getAllArticles = (): Promise<?ArticleList> =>
  client
    .request(
      `
    {
      articles {
        id
        slug
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
        source {
          transcript
        }
        statements {
          speaker {
            id
            last_name
            first_name
          }
          assessment {
            id
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

export default { getAllArticles, getArticleBySlug }
