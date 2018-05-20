import React, { Component } from "react";
import "./TableRow.css";
import PropTypes from "prop-types";


export default class TableRow extends Component {
    render() {
        return(
            <tbody>
                {
                    this.props.data.map(data => (
                        <tr key={data.id} >
                            <td >{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.averageGrade}</td>
                            
                        </tr> ))
                }
            </tbody>
        );
    }
}

TableRow.propTypes = {
    data: PropTypes.array.isRequired
}