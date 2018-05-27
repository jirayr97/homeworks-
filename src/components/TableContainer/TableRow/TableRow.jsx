import React from 'react';
import PropTypes from "prop-types";
import TableCell from "../TableCell";

import "./TableRow.css";

const TableRow = ({ columnNames, row }) => (
    <tr className="table-row">
        {
            columnNames.map(name =>
                <TableCell key={name} value={row[name]} />
            )
        }
    </tr>
);

TableRow.propTypes = {
    columnNames: PropTypes.array.isRequired,
    row: PropTypes.object.isRequired,
};

export default TableRow;