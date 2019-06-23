import React from 'react'
import DatabaseService from '../services/DatabaseService';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.userId = props.match.params.userId;
        this.DatabaseService = new DatabaseService();
        this.state = {users: [],
        user: [],
        username: [],
        password: []}
    }
    componentDidMount() {
        this.DatabaseService.findUsers()
            .then(users =>
                this.setState({users: users}))
    }
    userChanged = (event) => {
        console.log(event.target.value)
        this.setState({
            username:
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

    render() {
        return(
            <div>
                Username:
                <form>
                    <input
                           onChange={this.userChanged}
                           placeholder="Bob"/>
                </form>
                Password:
                <form>
                    <input
                           onChange={this.passChanged}
                           placeholder="hairy123"/>
                </form>
                <a href={`/logging_in/${this.state.username}/${this.state.password}`}
                   className="btn btn-outline-success my-2 my-sm-0">
                    Login
                </a>
                <a href={"/Register/"}>Dont have an account?</a>
            </div>
        )
    }
}
