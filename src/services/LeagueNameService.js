export default class LeagueNameService {

    static myInstance = null;

    static getInstance() {
        if (LeagueNameService.myInstance == null) {
            LeagueNameService.myInstance =
                new LeagueNameService();
        }
        return this.myInstance;
    }
    findLeagueName = (summonerName) =>
        fetch("http://league-server-react.herokuapp.com/?summonerName=" + summonerName)
            .then(response => response.json())
    findUserChampions = (id) =>
        fetch("http://league-server-react.herokuapp.com/?summonerChamp=" + id)
            .then(response => response.json())
    findUserCurGame= (id) =>
        fetch("http://league-server-react.herokuapp.com/?summonerCurGame=" + id)
            .then(response => response.json())
}

