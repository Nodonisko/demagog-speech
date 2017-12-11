// @flow
import * as React from 'react'
import api from '../lib/api'
import type { ArticleList } from '../lib/types'
import Page from '../components/Page'
import HomeHeading from '../components/HomeHeading'
import ArticleListItem from '../components/ArticleListItem'
import { isEmpty } from 'ramda'

class PodporitPage extends React.Component<> {
  render() {
    return (
      <Page title="Podpořte nás">
        <div className="list-content">
          <div className="container heading text-center">
            <div className="row">
              <div className="col">
                <h3>Podpořte Demagog.cz</h3>
              </div>
            </div>
          </div>
          <div className="donate-widget col text-center">
            <div style={{ width: 500 }}>
              <iframe
                title="Podporte Demagog.cz"
                src="https://www.darujme.cz/widget?token=qvfkahwmnueom9wk"
                style={{
                  border: 0,
                  display: 'inline-block',
                  height: 360,
                  overflow: 'hidden',
                }}
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default PodporitPage
