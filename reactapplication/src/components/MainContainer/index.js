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
                filteredResult: res.data.results
            })
        console.log(this.state.result)
    })       
    }

    componentDidMount(){
        this.start(this.state.filteredResult);
    }

    handleInputChange = event => {
        const value = event.target.value.toLowerCase();
        console.log(value)
        this.setState({
            filteredResult: this.state.result.filter(a => {
                return a.name.first.toLowerCase().includes(value) || a.name.last.toLowerCase().includes(value)
            })
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
            </div>
        );
    }
}

export default MainContainer;