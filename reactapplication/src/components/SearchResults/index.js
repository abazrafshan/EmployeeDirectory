import React, {Component} from "react";
import "./style.css";
import Table from "../Table"

// Render list of employee search results in table format
function SearchResults(props) {
 console.log(props)
  return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th onClick={props.sort}>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Date of Birth</th>
            </tr>
          </thead>
          {/* Map through results to render different elements of employee info */}
          {props.filteredResult.map((item,i)=>{
            return (
                // Pass props to Table component
               <Table key={i}
                image={item.picture.thumbnail}
                name={item.name.first+" "+item.name.last}
                phone={item.phone}
                email={item.email}
                dob={item.dob} /> 
            )}   
          )}
        </table>
      </div>
    );
}
export default SearchResults;