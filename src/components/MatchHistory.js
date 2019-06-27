import DatabaseService from "../services/DatabaseService";
import React from "react";
import LeagueNameService from "../services/LeagueNameService";

export default class MatchHistory extends React.Component {
    constructor(props) {
        super(props)
        this.userId = props.match.params.userId;
        this.sumId = props.match.params.sumId;
        this.DatabaseService = new DatabaseService();
        this.LeagueNameService = new LeagueNameService();
        this.state = {user: [],
            gameState: [],
            history: []}
    }

    componentDidMount() {
        this.DatabaseService.findUserById(this.userId)
            .then(user =>
                this.setState({user: user}))
            .then(this.getSummoner)
            .then(() => this.setState({history: this.state.gameState.matches}))    }

    getSummoner = () => {
        this.LeagueNameService.findGames(this.sumId)
            .then(gameState =>
                this.setState({gameState: gameState, history: gameState.matches}))
    }
    getAdmin = (admin) => {
        if(admin) {
            return "Admin"
        } else {
            return "User"
        }
    }

    render() {
        let history = this.state.history || []
        return(
            <div>
                <h3>Match History:</h3>
                <h4>Total Games:</h4>
                {
                    this.state.gameState.totalGames
                }
                <h4>Matches:</h4>
                {
                    history.map(history =>
                        <div>
                            <ul>
                                Game:
                                <li>
                                    <a href={`/Profile/${this.userId}/${this.sumId}/matches/${history.gameId}`}>
                                        Match Details
                                    </a>
                                </li>
                                <li>
                                    role: {history.lane}
                                </li>
                                <li>
                                    championId: {history.champion}
                                </li>
                            </ul>
                        </div>)
                }

            </div>
        )}
}
