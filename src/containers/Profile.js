import DatabaseService from "../services/DatabaseService";
import React from "react";
import SearchPage from "../components/SearchPage";
import {Route} from "react-router-dom";
import LeagueNameService from "../services/LeagueNameService";

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.userId = props.match.params.userId;
        this.DatabaseService = new DatabaseService();
        this.LeagueNameService = new LeagueNameService();
        this.state = {user: [],
                        gameState: []}
    }

    componentDidMount() {
        this.DatabaseService.findUserById(this.userId)
            .then(user =>
                this.setState({user: user}))
            .then(this.getSummoner)
    }

    getSummoner = () => {
        this.LeagueNameService.findLeagueName(this.state.user.leagueId)
            .then(gameState =>
                this.setState({gameState: gameState}))
    }

    getAdmin = (admin) => {
        if(admin) {
            return "Admin"
        } else {
            return "User"
        }
    }

    render() {
        return(
            <div>
                <h3>Welcome:</h3>
                {
                this.getAdmin(this.state.user.admin)
                }
                <img src={"http://opgg-static.akamaized.net/images/profile_icons/profileIcon" +
                this.state.gameState .profileIconId + ".jpg"}></img>
                <h3>Summoner Name</h3>
                {
                    this.state.gameState.name
                }
                <h3>Summoner Level</h3>
                {
                    this.state.gameState.summonerLevel
                }
                <h3>Summoner Id:</h3>
                {
                    this.state.gameState.id
                }
                <h3>Active Game:</h3>
                <a href={`/ActiveGameStat/${this.state.gameState.id}`}>Check on Game</a>

            </div>
        )
    }
}
