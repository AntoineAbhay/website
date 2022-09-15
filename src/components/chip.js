import React from "react"
import PropTypes from "prop-types"
import styles from "./chip.module.css"

const Chip = ({ text, backgroundColor }) => (
  <span style={{ backgroundColor }} className={styles.chip}>
    {text}
  </span>
)

Chip.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
}

Chip.defaultProps = {
  text: "",
  backgroundColor: "dddddd",
}

export default Chip
