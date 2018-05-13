import React, { Component } from "react";
import Section from "../Section/Section";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import Pin from "../Pin/Pin";
import SectionTail from "../SectionTail/Sectiontail";
import iconData from "../../data";
import sectionTailData from "../../sectionTailData";
import "./App.css";


export default class App  extends Component {
    render() {
        return (
            <div>
                <Section className="head-section">
                    <Title className="head-title" label="I am just another creative guy" />
                    <SubTitle className="head-subtitle"> 
                        <span>Who can build memorable creative </span> 
                        <span className="head-subtitle-tail">experience for you...</span>
                        </SubTitle>
                        <div className="pin-section">
                            {iconData.map((iconName)=> (
                                <Pin iconName={`fas ${iconName}`}/>))
                            }
                        </div>
                </Section>
                <Section className="footer-section">
                    <Title className="footer-title" label="What I Do"/>
                    <SubTitle className="footer-subTitle"> 
                        <span className="footer-subTitle-tail">I specalize in  creating inspirational websites, logos, brochures and app UX/UI for great individuals and small</span> 
                        <span className="footer-subTitle-tail">to large sized companies across the world helping them 
                        to market their business succesfully.</span>
                    </SubTitle>
                    {
                        sectionTailData.map((sectionTailObj) =>(
                             <SectionTail
                                className={sectionTailObj.className}
                                titleLabel={sectionTailObj.titleLabel}
                                iconClass={sectionTailObj.iconClass}
                                subTitleChildren={sectionTailObj.subTitleChildren}
                                secondSubTitleChildren={sectionTailObj.secondSubTitleChildren}
                             /> 
                            ))
                    }
                </Section >
            </div>
        )
    }
}
