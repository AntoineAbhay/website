import { Link } from "gatsby"
import React from "react"
import styles from "./header.module.css"

const Header = ({ location }) => {
  const navigationItemClass = path =>
    `${styles.navigationItem} ${location?.pathname === path && styles.active}`
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={navigationItemClass("/")} to="/">
          Accueil
        </Link>
        <div className={styles.spacer} />
        <Link className={navigationItemClass("/aboutme")} to="/aboutme">
          About me
        </Link>
      </div>
    </header>
  )
}

export default Header
