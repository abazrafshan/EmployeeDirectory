import React, {Component} from "react";
import "./style.css";

// Search bar for user to input first and/or last names to query
class SearchForm extends Component {
    render(){
        return (
        <form className="inputcenter">
            <div className="searchform">
                <input 
                onChange={this.props.handleInputChange}
                type="text"
                className="form-control"
                placeholder="Search"
                id="employeename"
                />
            </div>
        </form>
    );
}
}
    
export default SearchForm;