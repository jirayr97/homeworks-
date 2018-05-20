import React, { Component } from "react";
import  Button from "../Button/Button";
import images from "../../images/images";
import "./ImageContainer.css";


export default class ImageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
           index: 0,           
        };
        this.imgArray = images;
    }
    

    increaseIndex = () => {
        let i  = this.state.index;
        i === 2 ? 0 : i++;
        this.setState({index: i})
    }

    componentDidMount() {
        setInterval(()=> this.increaseIndex(), 2000)

    }
    
    render() {
        const { index } = this.state;
        const imageSrc = this.imgArray[index];
        const leftIndex = index === 0 ? 2 : index - 1;
        const rightIndex = index === 2 ? 0 : index + 1;

        return (
            <div className="container">
                <Button click={() => this.setState({index: leftIndex})} name="Left"/>
                <img src={imageSrc} alt="image" className="image"/>
                <Button click={() => this.setState({index: rightIndex})} name="Right"/>
            </div>    
        )
    }
}
