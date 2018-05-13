import React , { Component } from "react";
import "./Link.css"

export default class Link extends  Component {
    render() {
        const { text } = this.props;
        return (
            <div className="link"> 
                <a href="#">{text}</a>
            </div>
        );
    }
}