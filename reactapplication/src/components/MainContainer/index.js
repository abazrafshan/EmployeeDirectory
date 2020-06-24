import React, {Component} from "react";
import Heading from "../Heading";
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";
import API from "../../utils/API";

class MainContainer extends Component {
    state = {
        // numberofresults: 200,
        result: [],
        search: [],
        filteredResult: []
    };

    componentDidMount(){
        API.getRandomEmployee()
        .then(res =>{ 
            this.setState({ 
                result: res.data,
                filteredResult: res.data
            })
        // .catch(err => console.log(err));
        console.log(res.data)
    })       
    }

    // searchEmployees = query => {
    //     API.getSpecificEmployee(query)
    //     .then(res => {
    //         this.setState({
    //         result: res.data.results
    //     })
    //     // .catch(err => console.log(err));
    //     console.log(res.data.results)
    // })
    // }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        // console.log(name)
        console.log(value)
        console.log(this.state.result.results)
        this.setState({
            filteredResult: this.state.result
        });
    };

    render(){
        return (
            <div>
            <Heading/>
            <SearchForm handleInputChange={this.handleInputChange}/>
            {this.state.result.results.name ? (
                <SearchResults
                // image = {this.state.result.results.image}
                name = {this.state.result.results.name}
                // phone={this.state.result.results.phone}
                // email={this.state.result.results.email}
                // dob={this.state.result.results.dob}
                handleInputChange={this.handleInputChange}
                />
            ) : (
                <h3>No employees to display</h3>
            )}
            </div>
        );
    }
}

export default MainContainer;