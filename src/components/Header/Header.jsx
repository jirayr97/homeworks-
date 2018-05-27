import React from "react";
import PropTypes from "prop-types";
import HomeButton from "../HomeButton";
import Map from "../Map";

import "./Header.css";

const Header = ({ provinces, hideHomeBtn }) => (
    <div className="header-container">
        { hideHomeBtn ? null : <HomeButton className="home"/> }
        <Map provinces={provinces}/>
    </div>
);

Header.propTypes = {
    provinces: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
            labelHy: PropTypes.string.isRequired,
            paths: PropTypes.arrayOf(
                PropTypes.shape({
                    pathId: PropTypes.number.isRequired,
                    className: PropTypes.string.isRequired,
                    d: PropTypes.string.isRequired,
                    transform: PropTypes.string.isRequired,
                })
            ),
        })
    ).isRequired,
    hideHomeBtn: PropTypes.bool,
};

Header.defaultProps = {
    hideHomeBtn: false,
};

export default Header;