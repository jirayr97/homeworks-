import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import TableContainer from "../TableContainer";

import "./MainRoute.css"; 

const MainRoute = ({ provinces, mainTableData }) => (
    <Fragment>
        <Header provinces={provinces} hideHomeBtn />
        <div className="table-title">Հայաստան</div>
        <TableContainer className="main-table" data={mainTableData} />
    </Fragment>
);

MainRoute.propTypes = {
    provinces: PropTypes.array.isRequired,
    mainTableData: PropTypes.array.isRequired,
};

export default MainRoute;