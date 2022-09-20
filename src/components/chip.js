import React from "react"
import PropTypes from "prop-types"
import { chip } from "./chip.module.css"

const Chip = ({ text, backgroundColor }) => (
  <span style={{ backgroundColor }} className={chip}>
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
