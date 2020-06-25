import React, {Component} from "react";
// import "./style.css";

class Table extends Component {
    render(){
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
            <tbody>
                <tr>
                    <td><img alt ="check" src={this.props.image}></img></td>
                    <td>{this.props.firstName} {this.props.lastName}</td>
                    <td>{this.props.phone}</td>
                    <td>{this.props.email}</td>
                    <td>{this.props.dob}</td></tr>
            </tbody>
        </table>
        )
    }
}


export default Table;