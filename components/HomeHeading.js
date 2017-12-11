// @flow
import * as React from 'react'
import Link from 'next/link'

const HomeHeading = () => (
  <section className="jumbotron text-center landing">
    <div className="container">
      <h1 className="jumbotron-heading">
        Projevy Demagog<sup>cz</sup>
      </h1>
      <p className="lead text-muted">
        Znáte to. Sledujete projevy politiků a nevíte, jestli vám říkají pravdu,
        nebo s vámi manipulují. A štve vás to. Tak to jste tady správně.
        Demagog.cz vám nabízí nový nástroj, kde si můžete vychutnat výstupy
        české politické elity v textovém znění s námi ověřenými výroky.
      </p>
      <p>
        <Link href="/podporit" prefetch>
          <a className="btn btn-primary" style={{ marginRight: 5 }}>
            Podpořte nás
          </a>
        </Link>
        <a
          href="https://demagog.cz/diskuze/jak-hodnotime-metodika"
          className="btn btn-secondary"
          target="_blank"
        >
          Naše metodika
        </a>
      </p>
    </div>
  </section>
)

export default HomeHeading
