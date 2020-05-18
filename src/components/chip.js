import React from "react"
import PropTypes from "prop-types"
import styles from "./chip.module.css"

const Chip = ({ text, backgroundColor, color }) => (
  <span style={{ backgroundColor, color }} className={styles.chip}>
    {text}
  </span>
)

Chip.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
}

Chip.defaultProps = {
  text: "",
  backgroundColor: "dddddd",
  color: "ffffff",
}

export default Chip
