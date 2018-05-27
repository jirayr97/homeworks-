import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./HomeButton.css";

const HomeButton = ({ className }) => {
    const btnClassName = `home-btn ${className}`.trim();
    return (
        <Link to="/">
            <div className={btnClassName}></div>
        </Link>
    )
};

HomeButton.propTypes = {
    className: PropTypes.string,
};

HomeButton.defaultProps = {
    className: "",
};

export default HomeButton;