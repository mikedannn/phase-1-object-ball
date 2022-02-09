console.log('hello!')

function gameObject(){
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turqoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    locks: 7,
                    slamDunks: 2,
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                        },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,       
                        },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                        },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                }            
            }
        }
    }
}
 

//numPointsScored function

function numPointsScored(playerName) {
    const game = gameObject()
    for (const team in game) {   // iterate through game keys (home, away)
        for (let player in game[team]['players']) {  // iterate through players
            if (player === playerName) { //check to see if player input matches argument 
                return game[team]['players'][playerName]['points']; // return the players points
            }
        }
    }
}

//shoeSize function

function shoeSize(playerName) {
    const game = gameObject();
    for (const team in game) {
        for (let player in game [team]['players']) {
            if (player === playerName) {
                return game[team]['players'][playerName]['shoe'];
            }
        }
    }
}


function homePlayers() {
    return gameObject().home.players
}

function awayPlayers() {
    return gameObject().away.players
}

function allPlayers() {
    return Object.assign({}, homePlayers(), awayPlayers())
}

//teamColors function

function teamColors(name) {
    if (gameObject().home.teamName === name) {
        return gameObject().home.colors;
    } else {
        return gameObject().away.colors;
    }
}

//teamNames function

function teamNames() {
    let teamNames = [];
    return [gameObject()['home'].teamName, gameObject()['away'].teamName];
}

//playerNumbers function

const playerNumber = (player) => {
    return player.number
}

const teamObj = (teamName) => {
    if (teamNames()[0] === teamName) {
        return gameObject().home;
    } else {
        return gameObject().away;
    }
}

const playerNumbers = (teamName) => {
    let playerNumbers = []
    const players = teamObj(teamName).players;
    for (let player in players) {
        let playerNumber = players[player].number;
        playerNumbers.push(playerNumber);
    }
    return playerNumbers;
}

//playerStats function

const playerStats = (player) => {
    return allPlayers()[player];
}

//bigShoeRebounds function

const playerShoe = (player) => {
    playerStats(player).shoe;
}

const playerRebound = (player) => {
    playerStats(player).rebounds;
}

const bigShoeRebounds = () => {
    const players = allPlayers()
    let largestShoe = 0 
    let largestShoePlayer = ' '
    for (let player in players) {
        if (playerShoe(player) > largestShoe || largestShoe === 0) {
            largestShoe = playerShoe(player);
            largestShoePlayer = player;
        }
    return playerRebound(largestShoePlayer);
    }
}
console.log(bigShoeRebounds());

// mostPointsScored function

const mostPointsScored = () => {
    const players = allPlayers()
    let mostPoints = 0
    let highestScorePlayer = ' ' 
    for (let player in players) {
        if (playerStats(player).points > mostPoints || mostPoints === 0) {
            highestScorePlayer = player;
            mostPoints = playerStats(player).points;
        }
    }
    return highestScorePlayer;
}

console.log(mostPointsScored());