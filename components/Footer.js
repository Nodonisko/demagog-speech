// @flow
import * as React from 'react'

const Footer = () => (
  <footer className="text-muted">
    <div className="container-fluid">
      <div className="row">
        <div className="col col-5 offset-sm-1">
          <p>
            &copy; 2012—2017 <a href="https://demagog.cz">Demagog.cz</a>, z.s.
            IČ: 05 14 05 44, se sídlem Tomešova 568/6, Staré Brno, 602 00 Brno
            zapsaný ve spolkovém rejstříku u Krajského soudu v Brně.{' '}
          </p>
          <p>Bankovní účet 2185401001/5500 vedený u Raiffeisenbank, a.s.</p>
        </div>
        <div className="col">
          <p className="float-right text-right social">
            <a
              href="https://www.facebook.com/Demagog.CZ/"
              title="Demagog na Facebooku"
              target="_blank"
            >
              <img src="/static/icon-facebook.svg" alt="Demagog na Facebooku" />
            </a>
            <a
              href="https://twitter.com/demagogcz"
              title="Demagog na Twitteru"
              target="_blank"
            >
              <img src="/static/icon-twitter.svg" alt="Demagog na Twitteru" />
            </a>
            <a
              href="https://www.instagram.com/demagog.cz/"
              title="Demagog na Instagramu"
              target="_blank"
            >
              <img
                src="/static/icon-instagram.svg"
                alt="Demagog na Instagramu"
              />
            </a>
          </p>
        </div>
        <div className="col-sm-1" />
      </div>
    </div>
  </footer>
)

export default Footer
