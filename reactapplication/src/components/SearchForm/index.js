import React from "react";
import "./style.css";

function SearchForm({handleInputChange}) {
    return (
        <form className="inputcenter">
            <div className="searchform">
                <input 
                onChange={e => handleInputChange(e)}
                name="employeename"
                type="text"
                className="form-control"
                placeholder="Search"
                id="employeename"
                />
            </div>
        </form>
    );
}

export default SearchForm;