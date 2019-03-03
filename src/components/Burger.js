import React from "react"
import { slide as Menu } from "react-burger-menu"

export default props => {
  return (
    <Menu right>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/blog">
        Blog
      </a>
    </Menu>
  )
}
