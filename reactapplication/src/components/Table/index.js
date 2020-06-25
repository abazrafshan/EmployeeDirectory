import React, {Component} from "react";
// import "./style.css";
import TableHeader from "../TableHeader/index";

function Table(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Picture</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
{/* <TableHeader/> */}
            <tbody>
            {this.props.filteredResult.map(result => (
                <tr>
                    <td><img alt ="check" src={result.image}></img></td>
                    <td>{result.firstName} {result.lastName}</td>
                    <td>{result.phone}</td>
                    <td>{result.email}</td>
                    <td>{result.dob}</td></tr>
            ))}
            </tbody>
        </table>
        )
    
}


export default Table;