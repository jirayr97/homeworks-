import React from "react";
import "./TableRow.css";
import PropTypes from "prop-types";

const TableRow = ({ data }) => (
    <tbody>
        {
            data.map(rowObject => (
                <tr key={rowObject.id} >
                    <td>{rowObject.name}</td>
                    <td>{rowObject.age}</td>
                    <td>{rowObject.averageGrade}</td>
                </tr>))
        }
    </tbody>
)

TableRow.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number,
        age: PropTypes.number,
        averageGrade: PropTypes.number,
    }))
}
export default TableRow;