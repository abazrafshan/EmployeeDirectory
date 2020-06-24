import React, {Component} from "react";
import "./style.css";
import Table from "../Table"

class SearchResults extends Component {
    Map() {
        return this.props.filteredResult.map(results => (
            <Table                 
            key={results.login.uuid}
            image={results.picture.thumbnail}
            firstName = {results.name.first}
            lastName = {results.name.last}
            phone = {results.phone}
            dob = {results.dob.date}
            />
        ))
        }
        
    render(){
        console.log(this.Map())
  return (
        <ul className="list-group">
           {this.Map()}
        </ul>
    );
    }

}

export default SearchResults;