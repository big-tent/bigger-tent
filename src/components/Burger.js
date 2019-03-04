import React from "react"
import { slide as Menu } from "react-burger-menu"

var styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "25px",
    height: "20px",
    right: "36px",
    top: "0px"
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
    background: "hsl(31.6, 92.5%, 52.5%)"
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    width: "100%"
  },
  bmMenu: {
    background: "hsla(0, 0%, 8.6%, 0.8)",
    padding: "3.5rem 2rem 0",
    fontSize: "3rem",
    fontFamily: "sans-serif"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "hsl(31.6, 92.5%, 52.5%)",
    padding: "0.8em",
    display: "flex",
    flexDirection: "column"
  },
  bmItem: {
    color: "inherit",
    marginBottom: "4rem"
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
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/web">
        Web
      </a>
      <a className="menu-item" href="/social">
        Social
      </a>
      <a className="menu-item" href="/content">
        Content
      </a>
    </Menu>
  )
}
