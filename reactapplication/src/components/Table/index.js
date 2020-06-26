import React, {Component} from "react";
// import "./style.css";
function Table(props){
    console.log(props)
    return (
            <tr key={props.email}>
                    <td key={1}><img alt ="check" src={props.image} /></td>
                    <td key={2}>{props.name}</td>
                     <td key={3}>{props.phone}</td>
                     <td key={4}>{props.email}</td>
                    <td key={5}>{props.dob.date}</td>   
            </tr>
        )
}
export default Table;