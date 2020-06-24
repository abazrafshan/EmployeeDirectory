import React, {Component} from "react";
// import "./style.css";

class Table extends Component {
    render(){
    return (
                // <li className="list-group-item">
                //     <img alt="employee" src={this.props.picture} className="img=fluid"/>
                //     <p>{this.props.firstName} {this.props.lastName}</p>
                //     <p>{this.props.phone}</p>
                //     <p>{this.props.email}</p>
                //     <p>{this.props.dob}</p>
                // </li>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>DOB</th>
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