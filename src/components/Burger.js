import React from "react"
import { slide as Menu } from "react-burger-menu"

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "25px"
  },
  bmBurgerBars: {
    background: "white"
  },
  bmBurgerBarsHover: {
    background: "blue"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
    left: "10%"
  },
  bmCross: {
    background: "white"
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    width: "100%"
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmItem: {
    display: "inline-block"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
}

export default props => {
  return (
    <Menu right styles={styles}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/blog">
        Blog
      </a>
    </Menu>
  )
}
