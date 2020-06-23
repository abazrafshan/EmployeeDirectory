import React, { Component } from "react";
import "./style.css";

function SearchForm(props) {
    return (
        <form className="inputcenter">
            <div className="searchform">
                <input 
                value = {props.search}
                onChange={props.handleInputChange}
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