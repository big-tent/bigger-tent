import React from "react"
import { bubble as Menu } from "react-burger-menu"
import { Link } from "gatsby"

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "25px",
    height: "20px",
    right: "36px",
    top: "25px"
  },
  bmBurgerBars: {
    background: "#fefefe"
  },
  bmBurgerBarsHover: {
    background: "white"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
    left: "34px",
    top: "24px"
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
    background: "hsl(0, 0%, 25.6%)",
    padding: "3.5rem 2rem 0",
    fontSize: "3rem",
    fontFamily: "sans-serif",
    width: "100vw"
  },
  bmMorphShape: {
    fill: "hsl(0, 0%, 25.6%)"
  },
  bmItemList: {
    color: "hsl(31.6, 92.5%, 52.5%)",
    padding: "0.8em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  bmItem: {
    color: "inherit",
    margin: "2rem 0",
    lineHeight: "100%",
    outline: "none"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
}

export default props => {
  return (
    <Menu right styles={styles}>
      <Link to="/" className="menu-item">
        Home
      </Link>
      <Link to="/about" className="menu-item">
        About
      </Link>
      <Link to="/web" className="menu-item">
        Web
      </Link>
      <Link to="/social" className="menu-item">
        Social
      </Link>
      <Link to="/content" className="menu-item">
        Content
      </Link>
    </Menu>
  )
}
