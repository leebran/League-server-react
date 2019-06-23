export default class DatabaseService {

    static myInstance = null;

    static getInstance() {
        if (DatabaseService.myInstance == null) {
            DatabaseService =
                new DatabaseService();
        }
        return this.myInstance;
    }
    findUsers = () =>
        fetch("https://leaguewebsitedata.herokuapp.com/api/users")
            .then(response => response.json())
    findUserById = (id) =>
        fetch("https://leaguewebsitedata.herokuapp.com/api/users/" + id)
            .then(response => response.json())
    postUser = (name, password, leagueId) =>
        fetch("https://leaguewebsitedata.herokuapp.com/api/users/" + leagueId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: "{\"username\": \"" + name + "\", \"password\": \"" + password + "\"}"
        }).then(response => response.json())

}

