import React from "react"
import PropTypes from "prop-types"
import styles from "./label.module.css"

const Label = ({ text }) => <span className={styles.label}>{text}</span>

Label.propTypes = {
  text: PropTypes.string,
}

Label.defaultProps = {
  text: "",
}

export default Label
