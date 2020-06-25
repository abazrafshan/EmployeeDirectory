import React, {Component} from "react";
import "./style.css";
import Table from "../Table"
// import TableHeader from "../TableHeader/index";

function SearchResults(props) {
  return (
        <ul className="list-group">
           <Table
            filteredResult = {this.props.result}  /> 
        </ul>
    );
}

export default SearchResults;