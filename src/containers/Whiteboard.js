import React from 'react';
import SearchPage from "../components/SearchPage";
import CourseBarItem from "../components/CourseBarItem";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ActiveGameStat from "../components/ActiveGameStat";

class WhiteBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state =
            {searchText: []}
    }
    titleChanged = (event) => {
        console.log(event.target.value)
        this.setState({
            searchText:
                event.target.value
        })
    }
    render() {
        return (
            <Router>
            <div>
                <CourseBarItem
                titleChanged={this.titleChanged}
                searchText={this.state.searchText}/>
            <h1>Summoners Found:</h1>
                <Route
                    exact={true}
                    path="/Search/:userName"
                    component={SearchPage}/>
                    <Route
                    exact={true}
                    path={"/ActiveGameStat/:userId"}
                    component={ActiveGameStat}/>
            </div>
            </Router>
        )
    }
}
export default WhiteBoard;
