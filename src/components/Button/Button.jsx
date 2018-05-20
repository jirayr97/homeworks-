import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

const Button =(props) => (
    <button onMouseLeave={props.leave} onMouseOver={props.hover} onClick={props.click} className="btn">{props.name}</button>
)


Button.propTypes = {
    leave: PropTypes.func.isRequired,
    hover: PropTypes.func.isRequired,
    click: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};
export default Button;
