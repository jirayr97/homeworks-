import React , { Component } from "react";
import "./Container.css";
import Title from "../Title/Title";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Link from "../Link/Link";

export default class Container extends Component {
    render() {
        return (
            <div className="container">
                <div className="linear-gradient"></div>
                <Title children="Login" />
                <Input type="text" placeholder="Username" />
                <Input type="password" placeholder="Password" />
                <Button  text="Sign In"/>
                <Link text="Don't have an account? Register" />
            </div>
        )
    }
}