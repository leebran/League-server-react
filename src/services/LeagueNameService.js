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
        fetch("https://webdevleagueserver.herokuapp.com//?summonerName=" + summonerName)
            .then(response => response.json())
    findUserChampions = (id) =>
        fetch("https://webdevleagueserver.herokuapp.com//?summonerChamp=" + id)
            .then(response => response.json())
    findUserCurGame= (id) =>
        fetch("https://webdevleagueserver.herokuapp.com//?summonerCurGame=" + id)
            .then(response => response.json())
    findGames = (id) =>
        fetch("https://webdevleagueserver.herokuapp.com/?sumGame=" + id)
            .then(response => response.json())
    findOneGame = (id) =>
        fetch("https://webdevleagueserver.herokuapp.com/?oneGame=" + id)
            .then(response => response.json())
}

