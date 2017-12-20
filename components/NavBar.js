// @flow
import * as React from 'react'
import Link from 'next/link'
import NavBarLink from './NavBarLink'

const NavBar = () => (
  <nav
    className="navbar navbar-expand-lg navbar-dark"
    style={{ background: '#3c325c' }}
  >
    <Link href="/" prefetch>
      <a className="navbar-brand">
        <img
          src="/static/logo.svg"
          width="28"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
      </a>
    </Link>
    <div id="navbarColor01">
      <ul className="navbar-nav mr-auto">
        <NavBarLink href="/podporit">Podpořit</NavBarLink>
      </ul>
    </div>
  </nav>
)

export default NavBar
