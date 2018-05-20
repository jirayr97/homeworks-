import React  , { Component } from "react";
import "./App.css";
import ImageContainer from "../components/ImageContainer/ImageContainer";

export default  class App extends Component {
    render() {
        return (
            <div className="main-container">
             <ImageContainer/>
            </div>
        )
    }
}