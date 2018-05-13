import React , { Component } from "react";
import "./Title.css"

export default class Title extends Component {
    render() {
        const {  children } = this.props;
        return (
            <div >
                <h1 className="title" >
                    { children }
                </h1>
            </div>
        )
    }
}