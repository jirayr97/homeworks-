import React from "react";
import PropTypes from "prop-types";

const Section =({ className, children}) => (
    <section className={className}>
        {children}
    </section>
)


Section.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
} 
export default Section;

