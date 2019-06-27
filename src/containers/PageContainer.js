import React from 'react';
import SearchPage from "../components/SearchPage";
import CourseBarItem from "../components/CourseBarItem";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ActiveGameStat from "../components/ActiveGameStat";
import Login from "./Login";
import Register from "./Register";
import Homepage from "./Homepage";
import Loading from "./Loading";
import Profile from "./Profile";
import MatchHistory from "../components/MatchHistory";
import MatchDetails from "../components/MatchDetails";
import prof from "../components/prof";

class PageContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state =
            {searchText: [],
            currentUser: []}
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
                <Route
                    exact={true}
                    path="/Search/:userName"
                    component={SearchPage}/>
                    <Route
                    exact={true}
                    path={"/ActiveGameStat/:userId"}
                    component={ActiveGameStat}/>
                <Route
                    exact={true}
                    path={"/"}
                    component={Homepage}/>
                    <Route
                    exact={true}
                    path={"/"}
                    component={Login}/>
                    <Route
                    exact={true}
                    path={"/logging_in/:name/:password"}
                    component={Loading}/>
                <Route
                    exact={true}
                    path={"/Register"}
                    component={Register}/>
                <Route
                    exact={true}
                    path={"/Profile/:userId"}
                    component={Profile}/>
                <Route
                exact={true}
                path={"/Profile/:userId/:sumId/matches"}
                component={MatchHistory}/>
                <Route
                    exact={true}
                    path={"/Profile/:userId/:sumId/matches/:gameId"}
                    component={MatchDetails}/>
                <Route
                    exact={true}
                    path={"/ProfiIe/:userId"}
                    component={prof}/>
            </div>
            </Router>
        )
    }
}
export default PageContainer;
