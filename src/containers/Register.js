import React from 'react'
import LeagueNameService from '../services/LeagueNameService';
import DatabaseService from "../services/DatabaseService";

export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.LeagueNameService = new LeagueNameService();
        this.DatabaseService = new DatabaseService();
        this.state = {gameState: [],
                username: [],
                leaguename: [],
                password: [],
                confirmed: []}
    }
    getSummoner= () => {
        this.LeagueNameService.findLeagueName(this.state.leaguename)
            .then(gameState =>
                this.setState({gameState: gameState}))
            .then(this.register)
    }
    userChanged = (event) => {
        console.log(event.target.value)
        this.setState({
            username:
            event.target.value
        })
    }
    leagueChanged = (event) => {
        console.log(event.target.value)
        this.setState({
            leaguename:
            event.target.value
        })
    }
    passChanged = (event) => {
        console.log(event.target.value)
        this.setState({
            password:
            event.target.value
        })
    }
    confirmedChanged = (event) => {
        console.log(event.target.value)
        this.setState({
            confirmed:
            event.target.value
        })
    }

    register = () => {
        this.DatabaseService.postUser(this.state.username, this.state.confirmed, this.state.gameState.name);
    }

    render() {
        return(
            <div>
                <h3>Register</h3>
                new Username:
                <form>
                    <input
                        onChange={this.userChanged}
                        placeholder="Bob"/>
                </form>
                League Name:
                <form>
                    <input
                        onChange={this.leagueChanged}
                        placeholder="Riot Bob"/>
                </form>
                new Password:
                <form>
                    <input
                        onChange={this.passChanged}
                        placeholder="Bob123"/>
                </form>
                confirm new Password:
                <form>
                    <input
                        onChange={this.confirmedChanged}
                        placeholder="Bob123"/>
                </form>
                <a onClick={this.getSummoner} className="btn btn-outline-success my-2 my-sm-0">
                    Register
                </a>
            </div>
        )
    }
}
