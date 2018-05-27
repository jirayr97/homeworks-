import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Map.css";

const Map = ({ className, provinces }) => (
    <div className={className}>
        <svg id="map-svg" data-name="yerevan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1913.06 1796.98">
            <g id="map-group">
                { 
                    provinces.map((province) => {
                        const { id, label, labelHy, paths } = province;
                        return (
                            <Link key={id} to={`/${label}`}>
                                <g className="group-province" >
                                    {
                                        paths.map(({ pathId, ...pathProps }) => (
                                            <path {...pathProps} key={pathId} />
                                        ))
                                    }                               
                                    <text className={`title ${label}`}>{labelHy}</text>
                                </g>
                            </Link>
                        );
                    })
                }
            </g>
        </svg>
    </div>
);

Map.propTypes = {
    provinces: PropTypes.array.isRequired,
    className: PropTypes.string,
};

Map.defaultProps = {
    className: "",
};

export default Map;