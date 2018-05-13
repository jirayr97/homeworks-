import React from 'react';
import Pin from "../Pin/Pin";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import "./Sectiontail.css"

class LandingPageBox extends React.Component {
    render() {
        const {className, TitleLabel, iconClass, SubTitleChildren,SecondSubTitleChildren} = this.props;
        return (
            <div className="sectionTail">    
                <Pin iconName={iconClass } />                
                <Title className={"tailClass " + className} label={TitleLabel}/>
                <SubTitle children={SubTitleChildren}  className="tailClass firstSub"/>
                <SubTitle children={SecondSubTitleChildren}  className="tailClass secondSub footer-sub-class "/>
            </div>
        );
        }
    }

export default LandingPageBox;