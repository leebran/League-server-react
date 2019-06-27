import DatabaseService from "../services/DatabaseService";
import React from "react";
import LeagueNameService from "../services/LeagueNameService";

export default class MatchHistory extends React.Component {
    constructor(props) {
        super(props)
        this.userId = props.match.params.userId;
        this.sumId = props.match.params.sumId;
        this.gameId = props.match.params.gameId;
        this.DatabaseService = new DatabaseService();
        this.LeagueNameService = new LeagueNameService();
        this.state = {user: [],
            gameState: [],
            history: [],
            players: [],
            participants: []
            }
    }

    componentDidMount() {
        this.LeagueNameService.findOneGame(this.gameId)
            .then(user =>
                this.setState({user: user}))
            .then(this.getSummoner)
            .then(() => this.setState({history: this.state.gameState.matches}))
            .then(() => this.setState({participants: this.state.user.participants}))
            .then(() => this.setState({players: this.state.user.participantIdentities}))
    }

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
        let participants = this.state.participants || []
        let players = this.state.players || []

        return(
            <div>
                <h3>Match History:</h3>
                <h4>Game Mode:</h4>
                {
                    this.state.user.gameMode
                }
                <h4>Game Id:</h4>
                {
                    this.state.user.gameId
                }
                <h5>Players:</h5>
                {
                    players.map(player =>
                    <div>
                        Player Name:
                        <a href={`/Search/${player.player.summonerName}`}>{player.player.summonerName}</a>
                    </div>
                    )
                }
                <h4>Other Matches:</h4>
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
