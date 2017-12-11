// @flow
import * as React from 'react'

const Sidebar = ({ children }) => (
  <aside className="col-md-4 offset-md-1 blog-sidebar">
    <ul className="list-group">
      <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
        Publikováno
        <strong>1. prosince 2017</strong>
      </li>
      <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
        Moderátor
        <strong>Světlana Witowská</strong>
      </li>
    </ul>
    <div className="list-group" style={{ marginTop: '1rem' }}>
      <a
        href="#"
        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      >
        Záznam
        <strong>Interview ČT24</strong>
      </a>
    </div>
    {children}
  </aside>
)

export default Sidebar
