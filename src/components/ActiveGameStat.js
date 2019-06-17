import React from 'react'
import LeagueNameService from '../services/LeagueNameService';

export default class ActiveGameStat extends React.Component {
    constructor(props) {
        super(props)
        this.userId = props.match.params.userId;
        this.LeagueNameService = new LeagueNameService();
        this.state = {gameState: [],
                        fullState: []}
    }
    componentDidMount() {
        this.LeagueNameService.findUserCurGame(this.userId)
            .then(gameState =>
                this.setState({gameState: gameState}))
    }
    inGame() {
        if(this.state.gameState.gameId == null) {
            return(
                <div>
                not in game.
                </div>
            )
        }else {
            return(
            <div>
                in game.
            </div>)
            }
        }


    render() {
        return(
            <div>
                <h3>Current Match:</h3>
                {
                    this.inGame()
                }
                {

                }

            </div>
        )
    }
}
