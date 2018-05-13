import React from "react";
import PropTypes from "prop-types";
import "./SubTitle.css"

const SubTitle = ({ className, children }) => (
    <h5 className={`subTitle ${className}`}>
        {children}
    </h5>
)

SubTitle.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

SubTitle.defaultProps = {
    className: ''
}

export default SubTitle;