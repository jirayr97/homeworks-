import React from 'react';
import PropTypes from 'prop-types';
import './Pin.css';

const Pin = ({ iconName }) => (
    <div className="pin">
     <i className={iconName}></i>
    </div>
);

Pin.propTypes = {
    iconName: PropTypes.string.isRequired,
};

export default Pin;