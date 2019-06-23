import React from 'react';
import CourseBarItem from "../components/CourseBarItem";
import SearchPage from "../components/SearchPage";
import ActiveGameStat from "../components/ActiveGameStat";
import {BrowserRouter as Router, Route} from "react-router-dom";
import LeagueNameService from "../services/LeagueNameService";
import DatabaseService from "../services/DatabaseService";

export default class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.LeagueNameService = new LeagueNameService();
        this.DatabaseService = new DatabaseService();
        this.state = {gameState: []}
    }

    componentDidMount() {
        this.LeagueNameService.findLeagueName("imaqtpie")
            .then(gameState =>
                this.setState({gameState: gameState}));
    }

    render() {
        return (
            <Router>
            <div>
                <h1> Welcome, Summoner </h1>
                    <h3> Summoner of the Day: </h3>
                <div>
                    <img src={"http://opgg-static.akamaized.net/images/profile_icons/profileIcon" +
                    this.state.gameState.profileIconId + ".jpg"}></img>
                        <h4> {this.state.gameState.name } </h4>
                </div>
            </div>
        </Router>)
    }
}
