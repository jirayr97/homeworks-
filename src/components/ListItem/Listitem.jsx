import React, { Component } from "react";
import "./ListItem.css"
import PropTypes from "prop-types";

class ListItem extends Component {

    render() {
 
        const { text, clickHandler, className } =this.props;       
        return (
            <li 
                className={`listItem ${className}`}  
                onClick={clickHandler}>
                {text}
             </li>
    
        )
    }
}

ListItem.propTypes = {
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
    className: PropTypes.string,

}

export default ListItem;