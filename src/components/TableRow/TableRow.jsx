import React, { Component } from "react";
import "./TableRow.css";

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