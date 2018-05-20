import React from "react";
import "./Button.css"

const Button =(props) => (
    <button onClick={props.click} className="btn">{props.name}</button>
)

export default Button;