import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import TableContainer from "../TableContainer";

import "./ProvinceRoute.css"; 

const ProvinceRoute = ({ provinces, province, data }) => (
    <Fragment>
        <Header provinces={provinces}/>
        <div className="table-title">{province.labelHy}</div>
        <TableContainer className="province-table" data={data} />
    </Fragment>
);

ProvinceRoute.propTypes = {
    provinces: PropTypes.array.isRequired,
    province: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
};

export default ProvinceRoute;