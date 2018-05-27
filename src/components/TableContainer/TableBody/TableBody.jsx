import React from 'react';
import PropTypes from "prop-types";
import TableRow from "../TableRow";

import "./TableBody.css";

const TableBody = ({ columnNames, data }) => (
    <tbody className="table-body">
        {
            data.map(({key, ...dataRow}) => (
                <TableRow key={key} columnNames={columnNames} row={dataRow} />
            ))
        }
    </tbody>
);

TableBody.propTypes = {
    columnNames: PropTypes.array.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.any.isRequired,
        })
    ).isRequired,
};

export default TableBody;