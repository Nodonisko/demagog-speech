// @flow
import * as React from 'react'

const Sidebar = ({ children }: { children: React.Node }) => (
  <aside className="col-md-4 offset-md-1 blog-sidebar">{children}</aside>
)

export default Sidebar
