import React from "react";
import PropTypes from "prop-types";
import TableHeader from "../TableHeader";
import TableBody from "../TableBody";

import "./Table.css";

const Table = ({ className, data }) => {
    const tableMainData = Object.keys(data[0]).filter(name => name !== "key");
    return (
        <table id="table" className={`table ${className}`}>
            <TableHeader headers={tableMainData} />
            <TableBody columnNames={tableMainData} data={data} />
        </table>
    );
};

Table.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.any.isRequired,
        })
    ).isRequired,
    className: PropTypes.string,
};

Table.defaultProps = {
    className: "",
};

export default Table;