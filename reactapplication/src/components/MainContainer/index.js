import React, {Component} from "react";
import Heading from "../Heading";
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";
import API from "../../utils/API";

class MainContainer extends Component {
    state = {
        result: [],
        search: [],
        filteredResult: []        
    };

    start(){
        API.getRandomEmployee()
        .then(res =>{ 
            this.setState({ 
                result: res.data.results,
                filteredResult: this.state.result
            })
            // console.log(this.state.result.name[0].first)
        console.log(this.state.result)
    })       
    }

    componentDidMount(){
        this.start();
        // console.log(this.state.result[0].name.first)
    }

    handleInputChange = event => {
        const value = event.target.value;
        // const name = event.target.name;
        console.log(value)
        this.setState({
            filteredResult: this.state.result
        });
    };

    render(){
        return (
            <div>
            <Heading/>
            <SearchForm handleInputChange={this.handleInputChange}/>
                <SearchResults
                result={this.state.result}
                filteredResult={this.state.filteredResult}
                handleInputChange={this.handleInputChange}
                />
             {/* : (
                <h3>No employees to display</h3>
            )} */}
            </div>
        );
    }
}

export default MainContainer;