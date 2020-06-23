import Reach, {Component} from "react";
import Heading from "../Heading";
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";
import API from "../../utils/API";

class MainContainer extends Component {
    state = {
        results: 200,
        result: [],
        search: []
    };

    componentDidMount(){
        this.searchEmployees(this.state.results);
    }

    searchEmployees = query => {
        API.search(query).then(res => this.setState({result: res.data.results}))
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    render(){
        return (
            <Heading>
            <SearchForm>
            {this.state.results.name ? (
                <SearchResults
                image = {this.state.result.image}
                name = {this.state.result.name}
                phone={this.state.result.phone}
                email={this.state.result.email}
                dob={this.state.result.dob}/>
            ) : (
                <h3>No employees to display</h3>
            )}</SearchForm> 
            </Heading>
        );
    }
}

export default MainContainer;