export default class LeagueNameService {

    static myInstance = null;

    static getInstance() {
        if (LeagueNameService.myInstance == null) {
            LeagueNameService.myInstance =
                new LeagueNameService();
        }
        return this.myInstance;
    }

    findAllLeagueName = () =>
        fetch("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/im%20getting%20old?api_key=RGAPI-94c96afc-4455-4076-ba34-49266f1867aa")
            .then(response => response.json())

}

