import React from 'react'
import LeagueNameService from '../services/LeagueNameService';

export default class TheWidgetList extends React.Component {
    constructor(props) {
        super(props)
        this.LeagueNameService = new LeagueNameService();
        this.state = {names: []};
    }
    componentDidMount() {
        this.LeagueNameService.findAllLeagueName()
            .then(names =>
                this.setState({names: names}));
    }
    render() {
        return(
            this.state.names.map(name =>
                <h5>hi</h5>)
        )
    }}
