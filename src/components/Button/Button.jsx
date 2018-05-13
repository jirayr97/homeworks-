import React , { Component } from "react";
import "./Button.css";

export default class Button extends Component {
    render() {
        const { text } = this.props;
        return (
            <div className="btn-div">
                <button className="btn">{ text }</button>
            </div>
        )
    }
}