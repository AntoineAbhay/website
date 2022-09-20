import React from "react"
import PropTypes from "prop-types"
import { label } from "./label.module.css"

const Label = ({ text }) => <span className={label}>{text}</span>

Label.propTypes = {
  text: PropTypes.string,
}

Label.defaultProps = {
  text: "",
}

export default Label
