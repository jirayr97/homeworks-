import React from "react";
import "./TableHead.css";
import PropTypes from "prop-types";

const TableHead = ({ headData, handleClick}) => (
    <thead>
        <tr className="table-head">
            {
                headData.map(headArrItem => <th key={headArrItem} onClick={handleClick}
            className="head-item">{headArrItem}</th>)
            }
        </tr>
    </thead> 
);

TableHead.propTypes = {
    handleClick: PropTypes.func.isRequired,
    headData: PropTypes.array.isRequired
}
export default TableHead;