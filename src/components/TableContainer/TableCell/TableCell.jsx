import React from 'react';
import PropTypes from "prop-types";

import "./TableCell.css";

const TableCell = ({ className, value }) => (
    <td className={`table-cell ${className}`}>{value}</td>
);

TableCell.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    className: PropTypes.string,
};

TableCell.defaultProps = {
    className: "",
};

export default TableCell;