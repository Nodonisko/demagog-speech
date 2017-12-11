// @flow

export type ArticleListItem = {
  id: number,
  slug: string,
  title: string,
  illustration: string,
  perex: string,
}

export type ArticleList = Array<ArticleListItem>

export type Speaker = {
  id: string,
  last_name: string,
  first_name: string,
}

export type VeracityKey = 'true' | 'false' | 'unverifiable' | 'misleading'

export type Veracity = {
  key: VeracityKey,
  name: string,
}

export type Assessment = {
  id: string,
  veracity: Veracity,
  explanation: string,
}

export type Statement = {
  id: string,
  content: string,
  speaker: Speaker,
  assessment: Assessment,
}

export type Article = {
  source: {
    transcript: string,
    source_url: string,
  },
  illustration: string,
  title: string,
  perex: string,
  statements: Array<Statement>,
}

export type StatementLocation = {
  id: string,
  end: string,
  start: string,
}
