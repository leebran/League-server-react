const https = require('https');
const http = require('http');
const url = require('url');

const apiKey = 'RGAPI-fd22784b-d9b9-469b-b038-f90157e3e523';

const PORT = 8080;

const server = http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Request-Method', '*');
    response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const parts = url.parse(request.url, true);
    const query = parts.query;
    const summonerName = query.summonerName;
    const summonerChamp = query.summonerChamp;
    const summonerCurGame = query.summonerCurGame;
    const findGame = query.findGame;
    if(summonerName != null) {
        callAPI(summonerName, response);
    } else if(summonerChamp != null){
        callAPI2(summonerChamp, response);
    } else if(summonerCurGame != null) {
        callAPI3(summonerCurGame, response);
    } else if (findGame != null) {
        callAPI4(findGame, response);
    }
    else {
        callAPI("im getting old", response)
    }
});

server.listen(PORT, () => console.log("Server is listening on port %s", PORT));

function callAPI(summonerName, response) {
    const url = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + summonerName + '?api_key=' + apiKey;

    https.get(url, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            response.end(data);
            // console.log(JSON.parse(data));
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}
function callAPI2(summonerChamp, response) {
    const url = 'https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/'
        + summonerChamp + '?api_key=' + apiKey;

    https.get(url, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            response.end(data);
            // console.log(JSON.parse(data));
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

}
function callAPI3(summonerChamp, response) {
    const url = 'https://na1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/'
        + summonerChamp + '?api_key=' + apiKey;

    https.get(url, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            response.end(data);
            // console.log(JSON.parse(data));
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}
function callAPI4(summonerChamp, response) {
    const url = '/lol/match/v4/matches/'
        + summonerChamp + '?api_key=' + apiKey;

    https.get(url, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            response.end(data);
            // console.log(JSON.parse(data));
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}
