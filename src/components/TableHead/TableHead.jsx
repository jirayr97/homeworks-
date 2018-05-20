import React , { Component } from "react";
import "./TableHead.css";

export default class TableHead extends Component {


    render() {
        return(
            <thead>
                <tr className="table-head">
                    {this.props.headData.map(headArrItem => <th key={headArrItem} onClick={e => {
                        this.props.handleClick(e, headArrItem)
                    }} className="head-item">{headArrItem}</th>)}
                </tr>
            </thead>
            
        )
    }
}