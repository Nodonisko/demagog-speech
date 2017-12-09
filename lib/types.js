// @flow

export type ArticleList = Array<{ id: number, slug: string }>

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
}

export type Statement = {
  content: string,
  speaker: Speaker,
  assessment: Assessment,
}

export type Article = {
  source: {
    transcript: string,
  },
  statements: Array<Statement>,
}
