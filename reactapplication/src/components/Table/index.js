import React, {Component} from "react";
// import "./style.css";

class Table extends Component {
    render(){
    return (
                <li className="list-group-item">
                    <img alt="employee" src={this.props.picture} className="img=fluid"/>
                    <p>{this.props.firstName} {this.props.lastName}</p>
                    <p>{this.props.phone}</p>
                    <p>{this.props.email}</p>
                    <p>{this.props.dob}</p>
                </li>
            )}
    }


export default Table;