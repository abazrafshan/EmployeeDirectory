import React, {Component} from "react";
import Heading from "../Heading";
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";
import API from "../../utils/API";


class MainContainer extends Component {
    // Set initial state
    state = {
        result: [],
        search: [],
        filteredResult: []        
    };
    // Method makes API request for 200 random employees 
    start(){
        API.getRandomEmployee()
        .then(res =>{ 
            this.setState({ 
                result: res.data.results,
                filteredResult: res.data.results
            },()=> {
                // console.log(this.state.result)
            })
    })}

    handleClick = () => this.setState(this.state.filteredResult.sort((a, b) => {
        if (a.name.first < b.name.first) return -1;
        if (a.name.first > b.name.first) return 1;
        return 0;
    }));
    

    
    // start method called to fetch data from API after all elements on page rendered 
    componentDidMount(){
        this.start(this.state.filteredResult);
    }
    // Method to filter employees with first or last names containing value in search bar input
    handleInputChange = event => {
        const value = event.target.value.toLowerCase();
        this.setState({
            filteredResult: this.state.result.filter(a => {
                return a.name.first.toLowerCase().includes(value) || a.name.last.toLowerCase().includes(value)
            })
        });
    };
    // Heading component, then SearchForm, then SearchResults components rendered
    render(){
        return (
            <div>
            <Heading/>
            <SearchForm handleInputChange={this.handleInputChange}/>
                <SearchResults
                sort={this.handleClick}
                results={this.state.result}
                filteredResult={this.state.filteredResult}
                handleInputChange={this.handleInputChange}
                />
            </div>
        );
    }
}
export default MainContainer;