import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

const Button =({ leave, hover, click, name }) => (
    <button onMouseLeave={leave} onMouseOver={hover} onClick={click} className="btn">{name}</button>
)


Button.propTypes = {
    leave: PropTypes.func.isRequired,
    hover: PropTypes.func.isRequired,
    click: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};
export default Button;
