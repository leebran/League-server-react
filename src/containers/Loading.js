import React from 'react'
import LoggingPage from "./LoggingPage";
import DatabaseService from "../services/DatabaseService";
import {Redirect} from "react-router-dom";

export default class Loading extends React.Component {
    constructor(props) {
        super(props)
        this.state={users: []}
        this.DatabaseService = new DatabaseService();
    }
    componentDidMount() {
        this.DatabaseService.findUsers()
            .then(users =>
                this.setState({users: users}))
    }
    checkAuthentication(){
        this.state.users.map(user =>
        {
            switch(user.username) {
                case this.props.match.params.name:
                    if(user.password == this.props.match.params.password) {
                        this.props.history.push(`/Profile/${user.id}`)
                    }
                default:
                    return (<div>fail</div>)
            }
        })
    }
    render() {
        return(
        <div>
            <h1 id="loader"></h1>
            <a className="btn btn-outline-success" onClick={this.checkAuthentication()}>
                Loading Has failed Please try again
            </a>
            </div>

        )
    }
}
