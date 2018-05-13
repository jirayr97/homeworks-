import React ,  {Component} from "react";
import "./Input.css";

export default class Input extends Component {
    render() {
        const { type , placeholder } = this.props;
        return (
            <div className="input-div">
                <input
                    className="input" 
                    type={type}
                    placeholder={placeholder} 
                />
            </div>
            
        )
    }
}