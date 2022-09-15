import { Link } from "gatsby"
import React from "react"
import styles from "./header.module.css"

const Header = ({ pageId }) => {
  const navigationItemClass = path => {
    const current = pageId === path;
    if (current) {
      return `${styles.navigationItem} ${styles.active}`
    }
    return `${styles.navigationItem}`
  }
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={navigationItemClass("home")} to="/">
          Accueil
        </Link>
        <div className={styles.spacer} />
        <Link className={navigationItemClass("aboutme")} to="/aboutme">
          About me
        </Link>
      </div>
    </header>
  )
}

export default Header
