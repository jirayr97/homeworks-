import React from "react";
import PropTypes from "prop-types";
import "./Title.css"

const Title = ({ className, label  }) => (
    <h1 className={`title ${className}` }>
        {label}
    </h1>
)

Title.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
} 

export default Title;