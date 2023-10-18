function gameObject() {
    return {
            home: {
            teamName: "Brooklyn Nets",
            colors: [
                {
                color1: "Black",
                color2: "White",
            }],
            players:{
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,   
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,   

                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
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
            teamName: "Charlotte Hornets",
            colors:[
                {
                    color1:"Turquoise",
                    color2:"Purple",
            }],
            
            players:{
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,   
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 3,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,   
    
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
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

// takes in an argument of a player's name and returns the number of points scored for that player
function numPointsScored(playerName) {
    let object = gameObject();
    // Accessing the 'points' for player "Alan Anderson"
    if(object.home.players[playerName]) {
        return object.home.players[playerName].points;
    } else if (object.away.players[playerName]) {
        return object.away.players[playerName].points;
    } else {
        return `${playerName} is not on either roster.`
    }
} 

  console.log(numPointsScored("Alan Anderson"));

//   takes in an argument of a player's name and returns the shoe size for that player
function shoeSize(playerName) {
    let object = gameObject();
    // Accessing the 'points' for player "Alan Anderson"
    if(object.home.players[playerName]) {
        return object.home.players[playerName].shoe;
    } else if (object.away.players[playerName]) {
        return object.away.players[playerName].shoe;
    } else {
        return `${playerName} is not on either roster.`
    }
} 

    console.log(shoeSize("Alan Anderson"));


    // takes in an argument of the team name and returns an array of that teams colors. 
function teamColors(teamName) {
    let object = gameObject();
    let homeColorArray = object.home.colors;
    let awayColorArray = object.away.colors;
    if (teamName === "Brooklyn Nets") {
        return homeColorArray;
        //RETURN THE COLORS
        // for(let i = 0; i < object.home.colors.length; i++) {
        //     console.log("color1: ", object.home.colors[0]["color1"]);
        //     console.log("color2: ", object.home.colors[0]["color2"]);
        // }
    } else if (teamName === "Charlotte Hornets") {
        return awayColorArray;
        //RETURN THE COLORS
        // for(let i = 0; i < object.away.colors.length; i++) {
        //     console.log("color1: ", object.away.colors[0]["color1"]);
        //     console.log("color2: ", object.away.colors[0]["color2"]);
        // }
    } else {
        return `The ${teamName} are not part of this exercise`;
    }
}

teamColors("Brooklyn Nets");

// that operates on the game object to return an array of the team names
function teamNames() {
    let object = gameObject();
    let homeName = object.home.teamName;
    let awayName = object.away.teamName;
    const nameArray = [homeName,awayName];
    return nameArray;
}

teamNames();

// that takes in an argument of a team name and returns an array of the jersey numbers for that team.
//used map() to complete - had to ask Ada
function playerNumbers(teamName) {
    let object = gameObject();
    let numArray = [];
    if (teamName === "Brooklyn Nets") {
      let players = object.home.players;
      numArray = Object.values(players).map(player => player.number);
    } else if (teamName === "Charlote Hornets") {
        let players = object.away.players;
        numArray = Object.values(players).map(player => player.number);
        } else {
            return `${teamName} is not part of this exercise!`
        }
        return numArray;
    }
    
  playerNumbers("Brooklyn Nets");


//   that takes in an argument of a player's name and returns an object of that player's stats
function playerStats(playerName) {
    let object = gameObject();
    if(object.home.players[playerName]) {
        return object.home.players[playerName];
    } else if (object.away.players[playerName]) {
        return object.away.players[playerName];
    }
}

playerStats("Alan Anderson");


// return the number of rebounds associated with the player that has the largest shoe size
//Had to use Ada again
function bigShoeRebounds() {
    let object = gameObject();
    let largestShoeSize = 0;
    let reboundsForLargestShoeSize = 0;

    //Iterate through home players
    for (const player in object.home.players) {
        const currentPlayer = object.home.players[player];

        if (currentPlayer.shoe > largestShoeSize) {
            reboundsForLargestShoeSize = currentPlayer.rebounds;
        }
    }

    //Iterate through visitor players
    for (const player in object.away.players) {
        const currentPlayer = object.away.players[player];

        if (currentPlayer.shoe > largestShoeSize) {
            reboundsForLargestShoeSize = currentPlayer.rebounds;
        }
    }

    return reboundsForLargestShoeSize;
}


// Which player has the most points?
function mostPointsScored() {
    let object = gameObject();
    let maxPoints = 0;

    //Iterate over home players
    for (const player in object.home.players){
        const currentPlayer = object.home.players[player];

        if (currentPlayer.points > maxPoints) {
            maxPoints = currentPlayer.points;
            
        }
    }

    //Iterate over away players
    for (const player in object.away.players) {
        const currentPlayer = object.away.players[player];

        if (currentPlayer.points > maxPoints) {
            maxPoints = currentPlayer.points;
        }
    }
    return maxPoints;
}

mostPointsScored();

//Which team has the most points
function winningTeam() {
    let object = gameObject();
    let homePointsArray = [];
    let awayPointsArray = [];

    //Iterate over home players points and add to homePointsArray[]
    homePointsArray = Object.values(object.home.players).map(player => player.points);
    //Iterate over away players points and add to awayPointsArray[]
    awayPointsArray = Object.values(object.away.players).map(player => player.points);

    //Sum points in homePointsArray using for loop
    function sumHomePointsArray(homePointsArray) {
        let sum = 0;
        for(let i = 0; i < homePointsArray.length; i ++) {
            sum += homePointsArray[i];
        }
        return sum;
    }
    //Set total home points to variable
    const homePointsTtl = sumHomePointsArray(homePointsArray);

    //Sum points in awayPointsArray using for loop
    function sumAwayPointsArray(awayPointsArray){
        let sum = 0;
        for(let i = 0; i < awayPointsArray.length; i++) {
            sum += awayPointsArray[i];
        }
        return sum;
    }
    //Store total away points to variable
    const awayPointsTtl = sumAwayPointsArray(awayPointsArray);

    if(homePointsTtl > awayPointsTtl) {
        return `The home team wins by a score of ${homePointsTtl} to ${awayPointsTtl}!`
    } else {
        return `The away team wins by a score of ${awayPointsTtl} to ${homePointsTtl}!`
    }
}

winningTeam()
//End of winning team


//Return player who has the longest name
let homeTeamNames = Object.keys(object.home.players); //set variable with home team names
let awayTeamNames = Object.keys(object.away.players); //set variable with away team names
const allNames = [].concat(homeTeamNames, awayTeamNames); //set variable with all names in concatenated array


function playerWithLongestName(playerNames) {
    let object = gameObject();
    let longestName = '';

    for (let i = 0; i < playerNames.length; i++) {
      if (playerNames[i].length > longestName.length) {
        longestName = playerNames[i];
      }
    }
    
    return longestName;
  }

  const longNameBro = playerWithLongestName(allNames);
//End Longest Name

//Does Long Name steal a ton
function doesLongNameStealATon() {
    let object = gameObject();
    let maxSteals = 0;
    let topThief = '';

    //Iterate over Home players
    for (const player in object.home.players) {
        const currentPlayer = object.home.players[player];

        if (currentPlayer.steals > maxSteals) {
            maxSteals = currentPlayer.steals;
            topThief = player;
        }
    }

    //Iterate over Away Players
    for (const player in object.away.players) {
        const currentPlayer = object.away.players[player];

        if (currentPlayer.steals > maxSteals) {
            maxSteals = currentPlayer.steals;
            topThief = player;            
        }
    }
    
    if (longNameBro === topThief) {
        return true;
    } else {
        return false;
    }

}

doesLongNameStealATon();
