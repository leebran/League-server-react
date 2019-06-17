import React from 'react'
import LeagueNameService from '../services/LeagueNameService';


export default class SearchPage extends React.Component {
    constructor(props) {
        super(props)
        this.LeagueNameService = new LeagueNameService();
        this.state = {names: []};
    }
    componentDidMount() {
        this.LeagueNameService.findLeagueName(this.props.match.params.userName)
            .then(names =>
                this.setState({names: names}));
    }
    isThereGame() {

    }
    render() {
        return(
            <div>
                <img src={"http://opgg-static.akamaized.net/images/profile_icons/profileIcon" +
                this.state.names.profileIconId + ".jpg"}></img>
            <h3>Summoner Name</h3>
                {
                    this.state.names.name
                }
                <h3>Summoner Level</h3>
                {
                    this.state.names.summonerLevel
                }
                <h3>Summoner Id:</h3>
                {
                    this.state.names.id
                }
                    <h3>Active Game:</h3>
                <a href={`/ActiveGameStat/${this.state.names.id}`}>Check on Game</a>

            </div>
        )
    }
}
