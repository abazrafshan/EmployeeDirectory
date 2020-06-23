import React, { Component } from "react";
import "./style.css";

function Heading(){
    return (
        <div className="container-fluid">
            <div className="heading">
                <h1>Employee Directory</h1><br></br>
                <p>Click on carrots to filter by heading or use the search box to narrow your results</p>
            </div>
        </div>
    );
}

export default Heading;