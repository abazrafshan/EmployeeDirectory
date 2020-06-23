import React, { Component } from "react";
import "./style.css";

function SearchResults(props) {
    return (
        <ul className="list-group">
            {props.results.map(results => (
                <li key={results} className="list-group-item">
                    <img alt="employee" src={results.picture.thumbnail} className="img=fluid"/>
                    <p>{results.name.first + " "} {results.name.last}</p>
                    <p>{results.phone}</p>
                    <p>{results.email}</p>
                    <p>{results.dob.date}</p>
                </li>
            ))}
        </ul>
    );
}

export default SearchResults;