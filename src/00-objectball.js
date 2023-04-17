function gameObject(){
    const gameObject = {
        "home": {
            "teamName": "Brooklyn Nets",
            "colors": ["Black", "White"],
            "players":{
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evens": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez":{
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }
    
            }
        },
        "away": {
            "teamName": "Charlotte Hornets",
            "colors": ["Turquoise", "Purple"],
            "players":{
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop":{
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }
    
            }
        }
    };
    return gameObject;
}

function numPointsScored(playerName){
    let game = gameObject();
    for (let gameKey in game){
        let teamObj = game[gameKey];
        for (let teamKey in teamObj){
            let data = teamObj['players']
            for (let key in data){
                if (key === playerName){
                    return data[key]['points']
                }
            }
        }
    }
}

function shoeSize(playerName){
    let game = gameObject();
    for (let gameKey in game){
        let teamObj = game[gameKey];
        for (let teamKey in teamObj){
            let data = teamObj['players']
            for (let key in data){
                if (key === playerName){
                    return data[key]['shoe']
                }
            }
        }
    }
}

function teamColors(teamName){
    let game = gameObject();
    for (let gameKey in game){
        let teamObj = game[gameKey];
        let data = teamObj['colors'];
        if (teamObj['teamName']===teamName){
            return data;
            }
        }
        
    }

function teamNames(){
    const allTeamNames = []
    let game = gameObject();
    for (let gameKey in game){
        let teamObj = game[gameKey];
        allTeamNames.push(teamObj['teamName'])
    }
    return allTeamNames;
}

function playerNumbers(teamName){
    const allPlayerNumbers = []
    let game = gameObject();
    for (let gameKey in game){
        let teamObj = game[gameKey];
        for (let teamKey in teamObj){
            let data = teamObj['players']
            if (teamObj['teamName']===teamName){
                for (let key in data){
                    allPlayerNumbers.push(data[key]['number'])
                }
                }
        }
    }
    return allPlayerNumbers;

}

function playerStats(playerName){
    let game = gameObject();
    for (let gameKey in game){
        let teamObj = game[gameKey];
        for (let teamKey in teamObj){
            let data = teamObj['players']
            for (let key in data){
                if (key === playerName){
                    return data[key]
                }
            }
        }
    }
}

function bigShoeRebounds(){
    let maxShoeSize = 0;
    let maxName = "";

    let game = gameObject();
    for (let gameKey in game){
        let teamObj = game[gameKey];
        for (let teamKey in teamObj){
            let data = teamObj['players']
            for (let key in data){
                let shoeSize = data[key]['shoe']
                if (shoeSize > maxShoeSize){
                    maxShoeSize = shoeSize;
                    maxName = key;
               }
               return data[maxName]['rebounds']
            }
        }   
    }
}

// console.log(numPointsScored('Alan Anderson'));
// console.log(numPointsScored('Brendan Haywood'));
//     // expect 22, 6

// console.log(shoeSize('Alan Anderson'));
// console.log(shoeSize('Brendan Haywood'));
    // expect 16, 15

// console.log(teamColors('Charlotte Hornets'));
// console.log(teamColors('Brooklyn Nets'));
    // expect ['Black', 'White'], ['Turquoise, Purple']

// console.log(teamNames());

// console.log(playerNumbers('Charlotte Hornets'));
// console.log(playerStats('Alan Anderson'));

// bigShoeRebounds expected -> Mason Plumlee --> shoe 19 --> rebounds 12

// console.log(bigShoeRebounds());

function mostPointsScored(){
    let maxPointsScored = 0;
    let maxName = "";

    let game = gameObject();
    for (let gameKey in game){
        let teamObj = game[gameKey];
        for (let teamKey in teamObj){
            let data = teamObj['players']
            for (let key in data){
                let points = data[key]['points']
                if (points > maxPointsScored){
                    maxPointsScored = points;
                    maxName = key;
               }
            }
        }  
    }
   return maxName;
}

function winningTeam(){
    let winningScore = 0;
    let winningTeam = "";
    let game = gameObject();
    for (let gameKey in game){
        let teamObj = game[gameKey];
        for (let teamKey in teamObj){
            let data = teamObj['players']
            let teamScore = {teamName: teamObj['teamName'], points: 0}
            for (let key in data){
                let points = data[key]['points']
                teamScore['points'] += points
              } 
            if (teamScore['points'] > winningScore){
              winningScore = teamScore['points']
              winningTeam = teamScore['teamName']
            }
             }
           }
      return winningTeam;
           }  

function longestName(){
    let maxNameLength = 0;
    let maxName = "";

    let game = gameObject();
    for (let gameKey in game){
        let teamObj = game[gameKey];
        for (let teamKey in teamObj){
            let data = teamObj['players']
            for (let key in data){
                let charCount = key.length
                if (key.length > maxNameLength){
                  maxNameLength = key.length;
                  maxName = key;
                }
               }
            }
        }   
    return maxName;
    }

function doesLongNameStealATon(){
    const LongName = longestName()
    
    let maxSteals = 0;
    let maxName = "";
    
        let game = gameObject();
        for (let gameKey in game){
            let teamObj = game[gameKey];
            for (let teamKey in teamObj){
                let data = teamObj['players']
                for (let key in data){
                    let steals = data[key]['steals']
                    if (steals > maxSteals){
                        maxSteals = steals;
                        maxName = key;
                    }
                }
            } 
        }
    return (LongName === maxName) ? true : false
    }
    

// get all the player's points per team 
// sum the points per team
// compare each team's points --> return the highest 