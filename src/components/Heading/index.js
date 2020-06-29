import React from "react";
import "./style.css";

// Component for jumbotron heading
function Heading(){
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="heading container-fluid">
                <h1>Employee Directory</h1><br></br>
                <p>Click on carrots to filter by heading or use the search box to narrow your results</p>
            </div>
        </div>
    );
}

export default Heading;