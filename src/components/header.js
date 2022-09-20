import { Link } from "gatsby"
import React from "react"
import {
  navigationItem,
  active,
  header,
  container,
  spacer,
} from "./header.module.css"

const Header = ({ pageId }) => {
  const navigationItemClass = (path) => {
    const current = pageId === path
    if (current) {
      return `${navigationItem} ${active}`
    }
    return `${navigationItem}`
  }
  return (
    <header className={header}>
      <div className={container}>
        <Link className={navigationItemClass("home")} to="/">
          Accueil
        </Link>
        <div className={spacer} />
        <Link className={navigationItemClass("aboutme")} to="/aboutme">
          About me
        </Link>
      </div>
    </header>
  )
}

export default Header
