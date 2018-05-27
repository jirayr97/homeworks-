import React from 'react';
import PropTypes from "prop-types";

import "./TableHeader.css";

const TableHeader = ({ headers }) => {
    return (
        <thead> 
            <tr className="table-header-row">
                {
                    headers.map((name) => (
                       <th key={name} className="table-header-cell">{name}</th>
                    ))
                }
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    headers: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired,
};

export default TableHeader;