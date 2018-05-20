import React  , { Component } from "react";
import "./App.css";
import Table from "../components/Table/Table";

export default  class App extends Component {
    render() {
        return (
            <div className="main-container">
             <Table/>
            </div>
        )
    }
}