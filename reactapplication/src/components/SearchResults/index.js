import React, {Component} from "react";
import "./style.css";
import Table from "../Table"
// import TableHeader from "../TableHeader/index";
function SearchResults(props) {
 console.log(props)
  return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Date of Birth</th>
            </tr>
          </thead>
          {props.filteredResult.map((item,i)=>{
            return (
               <Table key={i}
                image={item.picture.thumbnail}
                name={item.name.first+" "+item.name.last}
                phone={item.phone}
                email={item.email}
                dob={item.dob} /> 
            )
            }   
          )}
        </table>
      </div>
    );
}
export default SearchResults;