// @flow
import * as React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Head from 'next/head'

type PageProps = {
  children: React.Node,
  title: string,
}

const Page = ({ children, title }: PageProps) => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"
        integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="/static/style.css" />
      <meta name="language" content="Czech" />
      <title>{title} - Demagog.cz</title>
    </Head>
    <NavBar />
    {children}
    <Footer />
  </div>
)

export default Page
