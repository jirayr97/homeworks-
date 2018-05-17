import React, { Component } from "react";
import ListItem from "../ListItem/Listitem";
import listArray from "../../listArray";
import "./List.css";


class List extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            items: listArray,
        }
    }
    handleClick = (index) => {
        const { items } = this.state;
        
        if (index === 0 || items[index - 1].lineThrough) {
            items[index].lineThrough = true;
            this.setState({ items: items });
        }
    }   
    
    render() {
        const { items } = this.state;
        return (
            <ol className="list">
                {
                    items.map((item, index) => (
                    <ListItem 
                        text={item.text}
                        clickHandler={ () => this.handleClick(index)}
                        className={(item.lineThrough) ? "line-through" : ""}
                        key={index}
                    />))
                }
                
            </ol>
        )
    }
}


export default  List;
