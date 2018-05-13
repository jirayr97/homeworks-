import React from 'react';
import Pin from "../Pin/Pin";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import PropTypes from "prop-types";
import "./Sectiontail.css"

class SectionTail extends React.Component {
    render() {
        const {className, titleLabel, iconClass, subTitleChildren,secondSubTitleChildren} = this.props;
        return (
            <div className="sectionTail">    
                <Pin iconName={iconClass } />                
                <Title className={`tailClass ${className}`} label={titleLabel}/>
                <SubTitle children={subTitleChildren}  className="tailClass firstSub"/>
                <SubTitle children={secondSubTitleChildren}  className="tailClass secondSub footer-sub-class "/>
            </div>
        );
        }
    }

    
SectionTail.propTypes = {
    className: PropTypes.string,
    iconClass: PropTypes.string.isRequired,
    titleLabel: PropTypes.string.isRequired,
    subTitleChildren: PropTypes.node.isRequired,
    secondSubTitleChildren: PropTypes.node.isRequired,
 
} 
export default SectionTail;