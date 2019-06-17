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
        fetch("http://localhost:8080/?summonerName=" + summonerName)
            .then(response => response.json())
    findUserChampions = (id) =>
        fetch("http://localhost:8080/?summonerChamp=" + id)
            .then(response => response.json())
    findUserCurGame= (id) =>
        fetch("http://localhost:8080/?summonerCurGame=" + id)
            .then(response => response.json())
}

