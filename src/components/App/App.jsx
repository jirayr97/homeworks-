import React, { Component } from "react";
import Section from "../Section/Section";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import Pin from "../Pin/Pin";
import SectionTail from "../SectionTail/Sectiontail";
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
                            <Pin iconName="fas fa-cog" /> 
                            <Pin iconName="fas fa-edit" /> 
                            <Pin iconName="fas fa-address-book" /> 
                            <Pin iconName="fas fa-map-marker-alt" /> 
                        </div>
                </Section>
                <Section className="footer-section">
                    <Title className="footer-title" label="What I Do"/>
                    <SubTitle className="footer-subTitle"> 
                        <span className="footer-subTitle-tail">I specalize in  creating inspirational websites, logos, brochures and app UX/UI for great individuals and small</span> 
                        <span className="footer-subTitle-tail">to large sized companies across the world helping them 
                        to market their business succesfully.</span>
                    </SubTitle>
                    <SectionTail 
                        className="footer-title-tail" 
                        TitleLabel="Websites" 
                        iconClass="fas fa-laptop sub-pins "
                        SubTitleChildren="Starts from 350$"
                        SecondSubTitleChildren="I develop responsive websites,meaning your website
                            will look good on any device whether it is a computer, mobile or a tablet"

                     /> 
                    <SectionTail 
                        className="footer-title-tail" 
                        TitleLabel="Identity" 
                        iconClass="fas fa-bookmark sub-pins"
                        SubTitleChildren="Starts from 140$" 
                        SecondSubTitleChildren="Creating a great brand image requires a full understanding of 
                            ypur business, target market and existing clientele."
                    /> 
                    <SectionTail 
                        className="footer-title-tail" 
                        TitleLabel="Print" 
                        iconClass="fas fa-print sub-pins" 
                        SubTitleChildren="Starts from 140$"
                        SecondSubTitleChildren="I love print. I believe the selection of quality material is 
                            just as important as the design. It adds value to your brand"
                    /> 
                    <SectionTail 
                        className="footer-title-tail" 
                        TitleLabel="User Interface" 
                        iconClass="fas fa-bars sub-pins" 
                        SubTitleChildren="Starts from 190$"
                        SecondSubTitleChildren="I love to create minimalist and clean UX/UI. I am a strong
                            believer that minimalism is the key to a great user interface"
                    /> 
                </Section >
            </div>
        )
    }
}
