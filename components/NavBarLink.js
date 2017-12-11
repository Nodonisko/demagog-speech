// @flow
import * as React from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'

type NavBarLinkProps = {
  router: Object,
  href: string,
  children: string,
}

const NavBarLink = ({ router, href, children }: NavBarLinkProps) => {
  const activeClass = router.pathname === href ? 'active' : ''

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <li className={`nav-item ${activeClass}`}>
      <Link href={href} prefetch>
        <a onClick={handleClick} className="nav-link">
          {children}
        </a>
      </Link>
    </li>
  )
}

export default withRouter(NavBarLink)
