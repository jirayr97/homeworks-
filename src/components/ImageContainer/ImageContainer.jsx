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
        let { index } = this.state;
        let i  = index === 2 ? 0 : ++index;
        this.setState({index: i});
    }

    startSlider =() => {
        this.interval = setInterval(()=> this.increaseIndex(), 2000);
    }

    componentDidMount() {
       this.startSlider();
    }

    hover = () => {
        clearInterval(this.interval);
    }

    leave = () => {
        this.startSlider();
    }
     
    render() {
        const { index } = this.state;
        const imageSrc = this.imgArray[index];
        const leftIndex = index === 0 ? 2 : index - 1;
        const rightIndex = index === 2 ? 0 : index + 1;

        return (
            <div className="container">
                <Button  leave={this.leave} hover={this.hover} click={() => this.setState({index: leftIndex})} name="Left"/>
                <img src={imageSrc} alt="image" className="image"/>
                <Button leave={this.leave} hover={this.hover} click={() => this.setState({index: rightIndex})} name="Right"/>
            </div>    
        )
    }
}


