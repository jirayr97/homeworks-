import React from "react";
import PropTypes from "prop-types";

import "./SearchForm.css";

const SearchForm = ({ handleInputChange, handleBtnClick }) => (
    <div className="form-container">
        <form className="form" onSubmit={handleBtnClick}>
            <label htmlFor="input">Search Books</label>
            <input type="text" onChange={(event) => handleInputChange(event.target.value)} id="input"/>
            <button  type="submit">Search</button>
        </form>
    </div>
);

SearchForm.propTypes = {
    handleBtnClick: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
};

export default SearchForm;