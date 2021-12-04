let outs = 0;
let balls = 0;
let strikes = 0;
let visHits = 0;
let homeHits = 0;
let visRuns = 0;
let homeRuns = 0;
let visError = 0;
let homError = 0;
let visStrikes = 0;
let visBalls = 0;
let visStrikeouts = 0;
let visPitchCount = 0;
let visWalks = 0;
let homeStrikes = 0;
let homeBalls = 0;
let homeStrikeouts = 0;
let homePitchCount = 0;
let homeWalks = 0;
let inning = 1;
let totInning = 1;
let inningScore = 0;
let atBat = "";
let home_lineup = [];
let visitor_lineup = [];
let home_team = [];
let visitor_team = [];
let vis1AB = 0; let vis2AB = 0; let vis3AB = 0; let vis4AB = 0; let vis5AB = 0; let vis6AB = 0; let vis7AB = 0; let vis8AB = 0; let vis9AB = 0;
let home1AB = 0; let home2AB = 0; let home3AB = 0; let home4AB = 0; let home5AB = 0; let home6AB = 0; let home7AB = 0; let home8AB = 0; let home9AB = 0;
let vis1Hits = 0; let vis2Hits = 0; let vis3Hits = 0; let vis4Hits = 0; let vis5Hits = 0; let vis6Hits = 0; let vis7Hits = 0; let vis8Hits = 0; let vis9Hits = 0;
let home1Hits = 0; let home2Hits = 0; let home3Hits = 0; let home4Hits = 0; let home5Hits = 0; let home6Hits = 0; let home7Hits = 0; let home8Hits = 0; let home9Hits = 0;
let vis1Singles = 0; let vis2Singles = 0; let vis3Singles = 0; let vis4Singles = 0; let vis5Singles = 0; let vis6Singles = 0; let vis7Singles = 0; let vis8Singles = 0; let vis9Singles = 0;
let home1Singles = 0; let home2Singles = 0; let home3Singles = 0; let home4Singles = 0; let home5Singles = 0; let home6Singles = 0; let home7Singles = 0; let home8Singles = 0; let home9Singles = 0;
let vis1Doubles = 0; let vis2Doubles = 0; let vis3Doubles = 0; let vis4Doubles = 0; let vis5Doubles = 0; let vis6Doubles = 0; let vis7Doubles = 0; let vis8Doubles = 0; let vis9Doubles = 0;
let home1Doubles = 0; let home2Doubles = 0; let home3Doubles = 0; let home4Doubles = 0; let home5Doubles = 0; let home6Doubles = 0; let home7Doubles = 0; let home8Doubles = 0; let home9Doubles = 0;
let vis1Triples = 0; let vis2Triples = 0; let vis3Triples = 0; let vis4Triples = 0; let vis5Triples = 0; let vis6Triples = 0; let vis7Triples = 0; let vis8Triples = 0; let vis9Triples = 0;
let home1Triples = 0; let home2Triples = 0; let home3Triples = 0; let home4Triples = 0; let home5Triples = 0; let home6Triples = 0; let home7Triples = 0; let home8Triples = 0; let home9Triples = 0;
let vis1HR = 0; let vis2HR = 0; let vis3HR = 0; let vis4HR = 0; let vis5HR = 0; let vis6HR = 0; let vis7HR = 0; let vis8HR = 0; let vis9HR = 0;
let home1HR = 0; let home2HR = 0; let home3HR = 0; let home4HR = 0; let home5HR = 0; let home6HR = 0; let home7HR = 0; let home8HR = 0; let home9HR = 0;
let vis1RBI = 0; let vis2RBI = 0; let vis3RBI = 0; let vis4RBI = 0; let vis5RBI = 0; let vis6RBI = 0; let vis7RBI = 0; let vis8RBI = 0; let vis9RBI = 0;
let home1RBI = 0; let home2RBI = 0; let home3RBI = 0, home4RBI = 0, home5RBI = 0, home6RBI = 0, home7RBI = 0, home8RBI = 0, home9RBI = 0;
let vis1Walks = 0; let vis2Walks = 0; let vis3Walks = 0; let vis4Walks = 0; let vis5Walks = 0; let vis6Walks = 0; let vis7Walks = 0; let vis8Walks = 0; let vis9Walks = 0;
let home1Walks = 0; let home2Walks = 0; let home3Walks = 0; let home4Walks = 0; let home5Walks = 0; let home6Walks = 0; let home7Walks = 0; let home8Walks = 0; let home9Walks = 0;
let vis1HBP = 0; let vis2HBP = 0; let vis3HBP = 0; let vis4HBP = 0; let vis5HBP = 0; let vis6HBP = 0; let vis7HBP = 0; let vis8HBP = 0; let vis9HBP = 0;
let home1HBP = 0; let home2HBP = 0; let home3HBP = 0; let home4HBP = 0; let home5HBP = 0; let home6HBP = 0; let home7HBP = 0; let home8HBP = 0; let home9HBP = 0;
let vis1SO = 0; let vis2SO = 0; let vis3SO = 0; let vis4SO = 0; let vis5SO = 0; let vis6SO = 0; let vis7SO = 0; let vis8SO = 0; let vis9SO = 0;
let home1SO = 0; let home2SO = 0; let home3SO = 0; let home4SO = 0; let home5SO = 0; let home6SO = 0; let home7SO = 0; let home8SO = 0; let home9SO = 0;
let vis1SB = 0; let vis2SB = 0; let vis3SB = 0; let vis4SB = 0; let vis5SB = 0; let vis6SB = 0; let vis7SB = 0; let vis8SB = 0; let vis9SB = 0;
let home1SB = 0; let home2SB = 0; let home3SB = 0; let home4SB = 0; let home5SB = 0; let home6SB = 0; let home7SB = 0; let home8SB = 0; let home9SB = 0;

//let v1 = [vis1AB,vis1Hits, vis1Singles, vis1Doubles, vis1Triples, vis1HR, vis1RBI, vis1Walks, vis1HBP, vis1SO, vis1SB];

function Player(name, team, abs=0, hits=0, singles=0, doubles=0, triples=0, hr=0, rbi=0, walks=0, hbp=0, so=0, sb=0) {
    this.name = name;
    this.abs = abs;
    this.hits = hits;
    this.singles = singles;
    this.doubles = doubles;
    this.triples = triples;
    this.hr = hr;
    this.rbi = rbi;
    this.walks = walks;
    this.hbp = hbp;
    this.so = so;
    this.sb = sb;
    this.team = team;
    this._id = Math.floor(Math.random() * 100000000000000);
    this.createPlayer = function() {
        let xhr = new XMLHttpRequest();
        xhr.responseType = "json";        
        xhr.open("POST", "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/baseballstats-ovlbt/service/players/incoming_webhook/player-new-object?");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(this));
    };
}


function visLineup () {
    
    document.getElementById("visName").innerHTML = document.getElementById("team2").value;
    document.getElementById("visName1").innerHTML = document.getElementById("team2").value;
    document.getElementById("1vis1").innerHTML = document.getElementById("1team2").value;
    let vis1 = document.getElementById("1team2").value;
    document.getElementById("2vis2").innerHTML = document.getElementById("2team2").value;
    let vis2 = document.getElementById("2team2").value;
    document.getElementById("3vis3").innerHTML = document.getElementById("3team2").value;
    let vis3 = document.getElementById("3team2").value;
    document.getElementById("4vis4").innerHTML = document.getElementById("4team2").value;
    let vis4 = document.getElementById("4team2").value;
    document.getElementById("5vis5").innerHTML = document.getElementById("5team2").value;
    let vis5 = document.getElementById("5team2").value;
    document.getElementById("6vis6").innerHTML = document.getElementById("6team2").value;
    let vis6 = document.getElementById("6team2").value;
    document.getElementById("7vis7").innerHTML = document.getElementById("7team2").value;
    let vis7 = document.getElementById("7team2").value;
    document.getElementById("8vis8").innerHTML = document.getElementById("8team2").value;
    let vis8 = document.getElementById("8team2").value;
    document.getElementById("9vis9").innerHTML = document.getElementById("9team2").value;
    let vis9 = document.getElementById("9team2").value;
    document.getElementById("10vis10").innerHTML = document.getElementById("10team2").value;
    let vis10 = document.getElementById("10team2").value;
    document.getElementById("visTeam").style.display = 'none';
    visitor_lineup = [vis1,vis2,vis3,vis4,vis5,vis6,vis7,vis8,vis9,vis10];

   
    for (var i = 0; i < visitor_lineup.length; i++) {
        if(visitor_lineup[i] != ""){
            let player = new Player(visitor_lineup[i], document.getElementById("team2").value)
            player.createPlayer();
            visitor_team.push([player, (i+1)]);
            // ----create document in db with name only-----
            // let xhr = new XMLHttpRequest();
            // xhr.responseType = "json";        
            // let queryString = "name=" + visitor_lineup[i];
            // xhr.open("POST", "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/baseballstats-ovlbt/service/players/incoming_webhook/player-new?" + queryString);
            // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            // xhr.send(queryString);
                    
        }
      }
   
}
function homeLineup() {
    document.getElementById("homeName").innerHTML = document.getElementById("team1").value;
    document.getElementById("homeName1").innerHTML = document.getElementById("team1").value;
    document.getElementById("home1").innerHTML = document.getElementById("1team1").value;
    let hom1 = document.getElementById("1team1").value;
    document.getElementById("home2").innerHTML = document.getElementById("2team1").value;
    let hom2 = document.getElementById("2team1").value;
    document.getElementById("home3").innerHTML = document.getElementById("3team1").value;
    let hom3 = document.getElementById("3team1").value;
    document.getElementById("home4").innerHTML = document.getElementById("4team1").value;
    let hom4 = document.getElementById("4team1").value;
    document.getElementById("home5").innerHTML = document.getElementById("5team1").value;
    let hom5 = document.getElementById("5team1").value;
    document.getElementById("home6").innerHTML = document.getElementById("6team1").value;
    let hom6 = document.getElementById("6team1").value;
    document.getElementById("home7").innerHTML = document.getElementById("7team1").value;
    let hom7 = document.getElementById("7team1").value;
    document.getElementById("home8").innerHTML = document.getElementById("8team1").value;
    let hom8 = document.getElementById("8team1").value;
    document.getElementById("home9").innerHTML = document.getElementById("9team1").value;
    let hom9 = document.getElementById("9team1").value;
    document.getElementById("home10").innerHTML = document.getElementById("10team1").value;
    let hom10 = document.getElementById("10team1").value;
    document.getElementById("homeTeam").style.display = 'none';
    home_lineup = [hom1,hom2,hom3,hom4,hom5,hom6,hom7,hom8,hom9,hom10];
   
    for (var i = 0; i < home_lineup.length; i++) {
        if(home_lineup[i] != ""){
            let player = new Player(home_lineup[i], document.getElementById("team1").value)
            player.createPlayer();   
            home_team.push(player);
        }
      }

}
function home1() {
    atBat = document.getElementById("1team1").value;
    document.getElementById("currentHitter").innerHTML = atBat;
    document.getElementById("hitter").innerHTML = atBat;
    document.getElementById("atBats").innerHTML = home1AB;
    document.getElementById("hits").innerHTML = home1Hits;
    document.getElementById("singles").innerHTML = home1Singles;
    document.getElementById("doubles").innerHTML = home1Doubles;
    document.getElementById("triples").innerHTML = home1Triples;
    document.getElementById("homeRunsHit").innerHTML = home1HR;
    document.getElementById("rbis").innerHTML = home1RBI;
    document.getElementById("hitterWalks").innerHTML = home1Walks;
    document.getElementById("hitterHitByPitch").innerHTML = home1HBP;
    document.getElementById("hitterStrikeouts").innerHTML = home1SO;
    document.getElementById("stolenBases").innerHTML = home1SB;
}
function home2() {
    atBat = document.getElementById("2team1").value;
    document.getElementById("currentHitter").innerHTML = atBat;
    document.getElementById("hitter").innerHTML = atBat;
    document.getElementById("atBats").innerHTML = home2AB;
    document.getElementById("hits").innerHTML = home2Hits;
    document.getElementById("singles").innerHTML = home2Singles;
    document.getElementById("doubles").innerHTML = home2Doubles;
    document.getElementById("triples").innerHTML = home2Triples;
    document.getElementById("homeRunsHit").innerHTML = home2HR;
    document.getElementById("rbis").innerHTML = home2RBI;
    document.getElementById("hitterWalks").innerHTML = home2Walks;
    document.getElementById("hitterHitByPitch").innerHTML = home2HBP;
    document.getElementById("hitterStrikeouts").innerHTML = home2SO;
    document.getElementById("stolenBases").innerHTML = home2SB;
}
function home3() {
    atBat = document.getElementById("3team1").value;
    document.getElementById("currentHitter").innerHTML = atBat;
    document.getElementById("hitter").innerHTML = atBat;
    document.getElementById("atBats").innerHTML = home3AB;
    document.getElementById("hits").innerHTML = home3Hits;
    document.getElementById("singles").innerHTML = home3Singles;
    document.getElementById("doubles").innerHTML = home3Doubles;
    document.getElementById("triples").innerHTML = home3Triples;
    document.getElementById("homeRunsHit").innerHTML = home3HR;
    document.getElementById("rbis").innerHTML = home3RBI;
    document.getElementById("hitterWalks").innerHTML = home3Walks;
    document.getElementById("hitterHitByPitch").innerHTML = home3HBP;
    document.getElementById("hitterStrikeouts").innerHTML = home3SO;
    document.getElementById("stolenBases").innerHTML = home3SB;
}
function home4() {
    atBat = document.getElementById("4team1").value;
    document.getElementById("currentHitter").innerHTML = atBat;
    document.getElementById("hitter").innerHTML = atBat;
    document.getElementById("atBats").innerHTML = home4AB;
    document.getElementById("hits").innerHTML = home4Hits;
    document.getElementById("singles").innerHTML = home4Singles;
    document.getElementById("doubles").innerHTML = home4Doubles;
    document.getElementById("triples").innerHTML = home4Triples;
    document.getElementById("homeRunsHit").innerHTML = home4HR;
    document.getElementById("rbis").innerHTML = home4RBI;
    document.getElementById("hitterWalks").innerHTML = home4Walks;
    document.getElementById("hitterHitByPitch").innerHTML = home4HBP;
    document.getElementById("hitterStrikeouts").innerHTML = home4SO;
    document.getElementById("stolenBases").innerHTML = home4SB;
}
function home5() {
    atBat = document.getElementById("5team1").value;
    document.getElementById("currentHitter").innerHTML = atBat;
    document.getElementById("hitter").innerHTML = atBat;
    document.getElementById("atBats").innerHTML = home5AB;
    document.getElementById("hits").innerHTML = home5Hits;
    document.getElementById("singles").innerHTML = home5Singles;
    document.getElementById("doubles").innerHTML = home5Doubles;
    document.getElementById("triples").innerHTML = home5Triples;
    document.getElementById("homeRunsHit").innerHTML = home5HR;
    document.getElementById("rbis").innerHTML = home5RBI;
    document.getElementById("hitterWalks").innerHTML = home5Walks;
    document.getElementById("hitterHitByPitch").innerHTML = home5HBP;
    document.getElementById("hitterStrikeouts").innerHTML = home5SO;
    document.getElementById("stolenBases").innerHTML = home5SB;
}
function home6() {
    atBat = document.getElementById("6team1").value;
    document.getElementById("currentHitter").innerHTML = atBat;
    document.getElementById("hitter").innerHTML = atBat;
    document.getElementById("atBats").innerHTML = home6AB;
    document.getElementById("hits").innerHTML = home6Hits;
    document.getElementById("singles").innerHTML = home6Singles;
    document.getElementById("doubles").innerHTML = home6Doubles;
    document.getElementById("triples").innerHTML = home6Triples;
    document.getElementById("homeRunsHit").innerHTML = home6HR;
    document.getElementById("rbis").innerHTML = home6RBI;
    document.getElementById("hitterWalks").innerHTML = home6Walks;
    document.getElementById("hitterHitByPitch").innerHTML = home6HBP;
    document.getElementById("hitterStrikeouts").innerHTML = home6SO;
    document.getElementById("stolenBases").innerHTML = home6SB;
}
function home7() {
    atBat = document.getElementById("7team1").value;
    document.getElementById("currentHitter").innerHTML = atBat;
    document.getElementById("hitter").innerHTML = atBat;
    document.getElementById("atBats").innerHTML = home7AB;
    document.getElementById("hits").innerHTML = home7Hits;
    document.getElementById("singles").innerHTML = home7Singles;
    document.getElementById("doubles").innerHTML = home7Doubles;
    document.getElementById("triples").innerHTML = home7Triples;
    document.getElementById("homeRunsHit").innerHTML = home7HR;
    document.getElementById("rbis").innerHTML = home7RBI;
    document.getElementById("hitterWalks").innerHTML = home7Walks;
    document.getElementById("hitterHitByPitch").innerHTML = home7HBP;
    document.getElementById("hitterStrikeouts").innerHTML = home7SO;
    document.getElementById("stolenBases").innerHTML = home7SB;
}
function home8() {
    atBat = document.getElementById("8team1").value;
    document.getElementById("currentHitter").innerHTML = atBat;
    document.getElementById("hitter").innerHTML = atBat;
    document.getElementById("atBats").innerHTML = home8AB;
    document.getElementById("hits").innerHTML = home8Hits;
    document.getElementById("singles").innerHTML = home8Singles;
    document.getElementById("doubles").innerHTML = home8Doubles;
    document.getElementById("triples").innerHTML = home8Triples;
    document.getElementById("homeRunsHit").innerHTML = home8HR;
    document.getElementById("rbis").innerHTML = home8RBI;
    document.getElementById("hitterWalks").innerHTML = home8Walks;
    document.getElementById("hitterHitByPitch").innerHTML = home8HBP;
    document.getElementById("hitterStrikeouts").innerHTML = home8SO;
    document.getElementById("stolenBases").innerHTML = home8SB;
}
function home9() {
    atBat = document.getElementById("9team1").value;
    document.getElementById("currentHitter").innerHTML = atBat;
    document.getElementById("hitter").innerHTML = atBat;
    document.getElementById("atBats").innerHTML = home9AB;
    document.getElementById("hits").innerHTML = home9Hits;
    document.getElementById("singles").innerHTML = home9Singles;
    document.getElementById("doubles").innerHTML = home9Doubles;
    document.getElementById("triples").innerHTML = home9Triples;
    document.getElementById("homeRunsHit").innerHTML = home9HR;
    document.getElementById("rbis").innerHTML = home9RBI;
    document.getElementById("hitterWalks").innerHTML = home9Walks;
    document.getElementById("hitterHitByPitch").innerHTML = home9HBP;
    document.getElementById("hitterStrikeouts").innerHTML = home9SO;
    document.getElementById("stolenBases").innerHTML = home9SB;
}
function visitor1() {
    atBat = document.getElementById("1team2").value;
    document.getElementById("currentHitter").innerHTML = atBat;
    document.getElementById("hitter").innerHTML = atBat;
    document.getElementById("atBats").innerHTML = vis1AB;
    document.getElementById("hits").innerHTML = vis1Hits;
    document.getElementById("singles").innerHTML = vis1Singles;
    document.getElementById("doubles").innerHTML = vis1Doubles;
    document.getElementById("triples").innerHTML = vis1Triples;
    document.getElementById("homeRunsHit").innerHTML = vis1HR;
    document.getElementById("rbis").innerHTML = vis1RBI;
    document.getElementById("hitterWalks").innerHTML = vis1Walks;
    document.getElementById("hitterHitByPitch").innerHTML = vis1HBP;
    document.getElementById("hitterStrikeouts").innerHTML = vis1SO;
    document.getElementById("stolenBases").innerHTML = vis1SB;
}
function visitor2() {
    atBat = document.getElementById("2team2").value;
    document.getElementById("currentHitter").innerHTML = atBat;
    document.getElementById("hitter").innerHTML = atBat;
    document.getElementById("atBats").innerHTML = vis2AB;
    document.getElementById("hits").innerHTML = vis2Hits;
    document.getElementById("singles").innerHTML = vis2Singles;
    document.getElementById("doubles").innerHTML = vis2Doubles;
    document.getElementById("triples").innerHTML = vis2Triples;
    document.getElementById("homeRunsHit").innerHTML = vis2HR;
    document.getElementById("rbis").innerHTML = vis2RBI;
    document.getElementById("hitterWalks").innerHTML = vis2Walks;
    document.getElementById("hitterHitByPitch").innerHTML = vis2HBP;
    document.getElementById("hitterStrikeouts").innerHTML = vis2SO;
    document.getElementById("stolenBases").innerHTML = vis2SB;
}
function visitor3() {
    atBat = document.getElementById("3team2").value;
    document.getElementById("currentHitter").innerHTML = atBat;
    document.getElementById("hitter").innerHTML = atBat;
    document.getElementById("atBats").innerHTML = vis3AB;
    document.getElementById("hits").innerHTML = vis3Hits;
    document.getElementById("singles").innerHTML = vis3Singles;
    document.getElementById("doubles").innerHTML = vis3Doubles;
    document.getElementById("triples").innerHTML = vis3Triples;
    document.getElementById("homeRunsHit").innerHTML = vis3HR;
    document.getElementById("rbis").innerHTML = vis3RBI;
    document.getElementById("hitterWalks").innerHTML = vis3Walks;
    document.getElementById("hitterHitByPitch").innerHTML = vis3HBP;
    document.getElementById("hitterStrikeouts").innerHTML = vis3SO;
    document.getElementById("stolenBases").innerHTML = vis3SB;
}
function visitor4() {
    atBat = document.getElementById("4team2").value;
    document.getElementById("currentHitter").innerHTML = atBat;
    document.getElementById("hitter").innerHTML = atBat;
    document.getElementById("atBats").innerHTML = vis4AB;
    document.getElementById("hits").innerHTML = vis4Hits;
    document.getElementById("singles").innerHTML = vis4Singles;
    document.getElementById("doubles").innerHTML = vis4Doubles;
    document.getElementById("triples").innerHTML = vis4Triples;
    document.getElementById("homeRunsHit").innerHTML = vis4HR;
    document.getElementById("rbis").innerHTML = vis4RBI;
    document.getElementById("hitterWalks").innerHTML = vis4Walks;
    document.getElementById("hitterHitByPitch").innerHTML = vis4HBP;
    document.getElementById("hitterStrikeouts").innerHTML = vis4SO;
    document.getElementById("stolenBases").innerHTML = vis4SB;
}
function visitor5() {
    atBat = document.getElementById("5team2").value;
    document.getElementById("currentHitter").innerHTML = atBat;
    document.getElementById("hitter").innerHTML = atBat;
    document.getElementById("atBats").innerHTML = vis5AB;
    document.getElementById("hits").innerHTML = vis5Hits;
    document.getElementById("singles").innerHTML = vis5Singles;
    document.getElementById("doubles").innerHTML = vis5Doubles;
    document.getElementById("triples").innerHTML = vis5Triples;
    document.getElementById("homeRunsHit").innerHTML = vis5HR;
    document.getElementById("rbis").innerHTML = vis5RBI;
    document.getElementById("hitterWalks").innerHTML = vis5Walks;
    document.getElementById("hitterHitByPitch").innerHTML = vis5HBP;
    document.getElementById("hitterStrikeouts").innerHTML = vis5SO;
    document.getElementById("stolenBases").innerHTML = vis5SB;
}
function visitor6() {
    atBat = document.getElementById("6team2").value;
    document.getElementById("currentHitter").innerHTML = atBat;
    document.getElementById("hitter").innerHTML = atBat;
    document.getElementById("atBats").innerHTML = vis6AB;
    document.getElementById("hits").innerHTML = vis6Hits;
    document.getElementById("singles").innerHTML = vis6Singles;
    document.getElementById("doubles").innerHTML = vis6Doubles;
    document.getElementById("triples").innerHTML = vis6Triples;
    document.getElementById("homeRunsHit").innerHTML = vis6HR;
    document.getElementById("rbis").innerHTML = vis6RBI;
    document.getElementById("hitterWalks").innerHTML = vis6Walks;
    document.getElementById("hitterHitByPitch").innerHTML = vis6HBP;
    document.getElementById("hitterStrikeouts").innerHTML = vis6SO;
    document.getElementById("stolenBases").innerHTML = vis6SB;
}
function visitor7() {
    atBat = document.getElementById("7team2").value;
    document.getElementById("currentHitter").innerHTML = atBat;
    document.getElementById("hitter").innerHTML = atBat;
    document.getElementById("atBats").innerHTML = vis7AB;
    document.getElementById("hits").innerHTML = vis7Hits;
    document.getElementById("singles").innerHTML = vis7Singles;
    document.getElementById("doubles").innerHTML = vis7Doubles;
    document.getElementById("triples").innerHTML = vis7Triples;
    document.getElementById("homeRunsHit").innerHTML = vis7HR;
    document.getElementById("rbis").innerHTML = vis7RBI;
    document.getElementById("hitterWalks").innerHTML = vis7Walks;
    document.getElementById("hitterHitByPitch").innerHTML = vis7HBP;
    document.getElementById("hitterStrikeouts").innerHTML = vis7SO;
    document.getElementById("stolenBases").innerHTML = vis7SB;
}
function visitor8() {
    atBat = document.getElementById("8team2").value;
    document.getElementById("currentHitter").innerHTML = atBat;
    document.getElementById("hitter").innerHTML = atBat;
    document.getElementById("atBats").innerHTML = vis8AB;
    document.getElementById("hits").innerHTML = vis8Hits;
    document.getElementById("singles").innerHTML = vis8Singles;
    document.getElementById("doubles").innerHTML = vis8Doubles;
    document.getElementById("triples").innerHTML = vis8Triples;
    document.getElementById("homeRunsHit").innerHTML = vis8HR;
    document.getElementById("rbis").innerHTML = vis8RBI;
    document.getElementById("hitterWalks").innerHTML = vis8Walks;
    document.getElementById("hitterHitByPitch").innerHTML = vis8HBP;
    document.getElementById("hitterStrikeouts").innerHTML = vis8SO;
    document.getElementById("stolenBases").innerHTML = vis8SB;
}
function visitor9() {
    atBat = document.getElementById("9team2").value;
    document.getElementById("currentHitter").innerHTML = atBat;
    document.getElementById("hitter").innerHTML = atBat;
    document.getElementById("atBats").innerHTML = vis9AB;
    document.getElementById("hits").innerHTML = vis9Hits;
    document.getElementById("singles").innerHTML = vis9Singles;
    document.getElementById("doubles").innerHTML = vis9Doubles;
    document.getElementById("triples").innerHTML = vis9Triples;
    document.getElementById("homeRunsHit").innerHTML = vis9HR;
    document.getElementById("rbis").innerHTML = vis9RBI;
    document.getElementById("hitterWalks").innerHTML = vis9Walks;
    document.getElementById("hitterHitByPitch").innerHTML = vis9HBP;
    document.getElementById("hitterStrikeouts").innerHTML = vis9SO;
    document.getElementById("stolenBases").innerHTML = vis9SB;
}
function editLineups () {
    document.getElementById("homeTeam").style.display = 'block';
    document.getElementById("visTeam").style.display = 'block';
}

function ball () {
    balls += 1;
    if (inning == 1 || inning == 3 || inning == 5 || inning == 7 || inning == 9 
        || inning == 11 || inning == 13 || inning == 15 || inning == 17) {
        homeBalls += 1;
        homePitchCount += 1;
        document.getElementById("pitchCount").innerHTML = homePitchCount;
        document.getElementById("pitchBalls").innerHTML = homeBalls;
        document.getElementById("balls").innerHTML = balls;
        document.getElementById("recent").innerHTML = "Ball";
        if (balls == 4) {
            homeWalks += 1;
            balls = 0;
            strikes = 0;
            document.getElementById("balls").innerHTML = 0;
            document.getElementById("strikes").innerHTML = 0;
            document.getElementById("walks").innerHTML = homeWalks;
            document.getElementById("recent").innerHTML = atBat + " Walked";
            if (atBat == document.getElementById("1team2").value) {
                vis1Walks += 1;
                document.getElementById("hitterWalks").innerHTML = vis1Walks;
            }
            if (atBat == document.getElementById("2team2").value) {
                vis2Walks += 1;
                document.getElementById("hitterWalks").innerHTML = vis2Walks;
            }
            if (atBat == document.getElementById("3team2").value) {
                vis3Walks += 1;
                document.getElementById("hitterWalks").innerHTML = vis3Walks;
            }
            if (atBat == document.getElementById("4team2").value) {
                vis4Walks += 1;
                document.getElementById("hitterWalks").innerHTML = vis4Walks;
            }
            if (atBat == document.getElementById("5team2").value) {
                vis5Walks += 1;
                document.getElementById("hitterWalks").innerHTML = vis5Walks;
            }
            if (atBat == document.getElementById("6team2").value) {
                vis6Walks += 1;
                document.getElementById("hitterWalks").innerHTML = vis6Walks;
            }
            if (atBat == document.getElementById("7team2").value) {
                vis7Walks += 1;
                document.getElementById("hitterWalks").innerHTML = vis7Walks;
            }
            if (atBat == document.getElementById("8team2").value) {
                vis8Walks += 1;
                document.getElementById("hitterWalks").innerHTML = vis8Walks;
            }
            if (atBat == document.getElementById("9team2").value) {
                vis9Walks += 1;
                document.getElementById("hitterWalks").innerHTML = vis9Walks;
            }
        }
    } else {
        visBalls += 1;
        visPitchCount += 1;
        document.getElementById("pitchCount").innerHTML = visPitchCount;
        document.getElementById("pitchBalls").innerHTML = visBalls;
        document.getElementById("balls").innerHTML = balls;
        document.getElementById("recent").innerHTML = "Ball";
        if (balls == 4) {
            visWalks += 1;
            balls = 0;
            strikes = 0;
            document.getElementById("balls").innerHTML = 0;
            document.getElementById("strikes").innerHTML = 0;
            document.getElementById("walks").innerHTML = visWalks;
            document.getElementById("recent").innerHTML = atBat + " Walked";
            if (atBat == document.getElementById("1team1").value) {
                home1Walks += 1;
                document.getElementById("hitterWalks").innerHTML = home1Walks;
            }
            if (atBat == document.getElementById("2team1").value) {
                home2Walks += 1;
                document.getElementById("hitterWalks").innerHTML = home2Walks;
            }
            if (atBat == document.getElementById("3team1").value) {
                home3Walks += 1;
                document.getElementById("hitterWalks").innerHTML = home3Walks;
            }
            if (atBat == document.getElementById("4team1").value) {
                home4Walks += 1;
                document.getElementById("hitterWalks").innerHTML = home4Walks;
            }
            if (atBat == document.getElementById("5team1").value) {
                home5Walks += 1;
                document.getElementById("hitterWalks").innerHTML = home5Walks;
            }
            if (atBat == document.getElementById("6team1").value) {
                home6Walks += 1;
                document.getElementById("hitterWalks").innerHTML = home6Walks;
            }
            if (atBat == document.getElementById("7team1").value) {
                home7Walks += 1;
                document.getElementById("hitterWalks").innerHTML = home7Walks;
            }
            if (atBat == document.getElementById("8team1").value) {
                home8Walks += 1;
                document.getElementById("hitterWalks").innerHTML = home8Walks;
            }
            if (atBat == document.getElementById("9team1").value) {
                home9Walks += 1;
                document.getElementById("hitterWalks").innerHTML = home9Walks;
            }
        }
    }
}

function strike() {
    strikes += 1;
    if (inning == 1 || inning == 3 || inning == 5 || inning == 7 || inning == 9 
        || inning == 11 || inning == 13 || inning == 15 || inning == 17) {
        homeStrikes += 1;
        homePitchCount += 1;
        document.getElementById("pitchCount").innerHTML = homePitchCount;
        document.getElementById("pitchStrikes").innerHTML = homeStrikes;
        document.getElementById("strikes").innerHTML = strikes;
        document.getElementById("recent").innerHTML = "Strike";
        if (strikes == 3) {
            homeStrikeouts += 1;
            outs += 1;
            balls = 0;
            strikes = 0;
            document.getElementById("outs").innerHTML = outs;
            document.getElementById("balls").innerHTML = 0;
            document.getElementById("strikes").innerHTML = 0;
            document.getElementById("strikeouts").innerHTML = homeStrikeouts;
            document.getElementById("recent").innerHTML = atBat + " Struck Out";
            if (atBat == document.getElementById("1team2").value) {
                vis1SO += 1;
                document.getElementById("hitterStrikeouts").innerHTML = vis1SO;
                vis1AB += 1;
                document.getElementById("atBats").innerHTML = vis1AB;
            }
            if (atBat == document.getElementById("2team2").value) {
                vis2SO += 1;
                document.getElementById("hitterStrikeouts").innerHTML = vis2SO;
                vis2AB += 1;
                document.getElementById("atBats").innerHTML = vis2AB;
            }
            if (atBat == document.getElementById("3team2").value) {
                vis3SO += 1;
                document.getElementById("hitterStrikeouts").innerHTML = vis3SO;
                vis3AB += 1;
                document.getElementById("atBats").innerHTML = vis3AB;
            }
            if (atBat == document.getElementById("4team2").value) {
                vis4SO += 1;
                document.getElementById("hitterStrikeouts").innerHTML = vis4SO;
                vis4AB += 1;
                document.getElementById("atBats").innerHTML = vis4AB;
            }
            if (atBat == document.getElementById("5team2").value) {
                vis5SO += 1;
                document.getElementById("hitterStrikeouts").innerHTML = vis5SO;
                vis5AB += 1;
                document.getElementById("atBats").innerHTML = vis5AB;
            }
            if (atBat == document.getElementById("6team2").value) {
                vis6SO += 1;
                document.getElementById("hitterStrikeouts").innerHTML = vis6SO;
                vis6AB += 1;
                document.getElementById("atBats").innerHTML = vis6AB;
            }
            if (atBat == document.getElementById("7team2").value) {
                vis7SO += 1;
                document.getElementById("hitterStrikeouts").innerHTML = vis7SO;
                vis7AB += 1;
                document.getElementById("atBats").innerHTML = vis7AB;
            }
            if (atBat == document.getElementById("8team2").value) {
                vis8SO += 1;
                document.getElementById("hitterStrikeouts").innerHTML = vis8SO;
                vis8AB += 1;
                document.getElementById("atBats").innerHTML = vis8AB;
            }
            if (atBat == document.getElementById("9team2").value) {
                vis9SO += 1;
                document.getElementById("hitterStrikeouts").innerHTML = vis9SO;
                vis9AB += 1;
                document.getElementById("atBats").innerHTML = vis9AB;
            }
            if (outs == 3) {
                endInning();
                outs = 0;
            }
        }
    } else {
        visStrikes += 1;
        visPitchCount += 1;
        document.getElementById("pitchCount").innerHTML = visPitchCount;
        document.getElementById("pitchStrikes").innerHTML = visStrikes;
        document.getElementById("strikes").innerHTML = strikes;
        document.getElementById("recent").innerHTML = "Strike";
        if (strikes == 3) {
            visStrikeouts += 1;
            balls = 0;
            strikes = 0;
            outs += 1;
            document.getElementById("outs").innerHTML = outs;
            document.getElementById("balls").innerHTML = 0;
            document.getElementById("strikes").innerHTML = 0;
            document.getElementById("strikeouts").innerHTML = visStrikeouts;
            document.getElementById("recent").innerHTML = atBat + " Struck Out";
            if (atBat == document.getElementById("1team1").value) {
                home1SO += 1;
                document.getElementById("hitterStrikeouts").innerHTML = home1SO;
                home1AB += 1;
                document.getElementById("atBats").innerHTML = home1AB;
            }
            if (atBat == document.getElementById("2team1").value) {
                home2SO += 1;
                document.getElementById("hitterStrikeouts").innerHTML = home2SO;
                home2AB += 1;
                document.getElementById("atBats").innerHTML = home2AB;
            }
            if (atBat == document.getElementById("3team1").value) {
                home3SO += 1;
                document.getElementById("hitterStrikeouts").innerHTML = home3SO;
                home3AB += 1;
                document.getElementById("atBats").innerHTML = home3AB;
            }
            if (atBat == document.getElementById("4team1").value) {
                home4SO += 1;
                document.getElementById("hitterStrikeouts").innerHTML = home4SO;
                home4AB += 1;
                document.getElementById("atBats").innerHTML = home4AB;
            }
            if (atBat == document.getElementById("5team1").value) {
                home5SO += 1;
                document.getElementById("hitterStrikeouts").innerHTML = home5SO;
                home5AB += 1;
                document.getElementById("atBats").innerHTML = home5AB;
            }
            if (atBat == document.getElementById("6team1").value) {
                home6SO += 1;
                document.getElementById("hitterStrikeouts").innerHTML = home6SO;
                home6AB += 1;
                document.getElementById("atBats").innerHTML = home6AB;
            }
            if (atBat == document.getElementById("7team1").value) {
                home7SO += 1;
                document.getElementById("hitterStrikeouts").innerHTML = home7SO;
                home7AB += 1;
                document.getElementById("atBats").innerHTML = home7AB;
            }
            if (atBat == document.getElementById("8team1").value) {
                home8SO += 1;
                document.getElementById("hitterStrikeouts").innerHTML = home8SO;
                home8AB += 1;
                document.getElementById("atBats").innerHTML = home8AB;
            }
            if (atBat == document.getElementById("9team1").value) {
                home9SO += 1;
                document.getElementById("hitterStrikeouts").innerHTML = home9SO;
                home9AB += 1;
                document.getElementById("atBats").innerHTML = home9AB;
            }
            if (outs == 3) {
                endInning();
                outs = 0;
            }
        }
    }
}

function inPlay() {
    document.getElementById("result").style.display = 'block';
    document.getElementById("count").style.display = 'none';
    document.getElementById("prePitch").style.display = 'none';
}

function single() {
    if (inning == 1 || inning == 3 || inning == 5 || inning == 7 || inning == 9 
        || inning == 11 || inning == 13 || inning == 15 || inning == 17) {
        visHits += 1;
        document.getElementById("visHits").innerHTML = visHits;
        if (atBat == document.getElementById("1team2").value) {
            vis1Singles += 1;
            document.getElementById("singles").innerHTML = vis1Singles;
            vis1Hits += 1;
            document.getElementById("hits").innerHTML = vis1Hits;
            vis1AB += 1;
            document.getElementById("atBats").innerHTML = vis1AB;
        }
        if (atBat == document.getElementById("2team2").value) {
            vis2Singles += 1;
            document.getElementById("singles").innerHTML = vis2Singles;
            vis2Hits += 1;
            document.getElementById("hits").innerHTML = vis2Hits;
            vis2AB += 1;
            document.getElementById("atBats").innerHTML = vis2AB;
        }
        if (atBat == document.getElementById("3team2").value) {
            vis3Singles += 1;
            document.getElementById("singles").innerHTML = vis3Singles;
            vis3Hits += 1;
            document.getElementById("hits").innerHTML = vis3Hits;
            vis3AB += 1;
            document.getElementById("atBats").innerHTML = vis3AB;
        }
        if (atBat == document.getElementById("4team2").value) {
            vis4Singles += 1;
            document.getElementById("singles").innerHTML = vis4Singles;
            vis4Hits += 1;
            document.getElementById("hits").innerHTML = vis4Hits;
            vis4AB += 1;
            document.getElementById("atBats").innerHTML = vis4AB;
        }
        if (atBat == document.getElementById("5team2").value) {
            vis5Singles += 1;
            document.getElementById("singles").innerHTML = vis5Singles;
            vis5Hits += 1;
            document.getElementById("hits").innerHTML = vis5Hits;
            vis5AB += 1;
            document.getElementById("atBats").innerHTML = vis5AB;
        }
        if (atBat == document.getElementById("6team2").value) {
            vis6Singles += 1;
            document.getElementById("singles").innerHTML = vis6Singles;
            vis6Hits += 1;
            document.getElementById("hits").innerHTML = vis6Hits;
            vis6AB += 1;
            document.getElementById("atBats").innerHTML = vis6AB;
        }
        if (atBat == document.getElementById("7team2").value) {
            vis7Singles += 1;
            document.getElementById("singles").innerHTML = vis7Singles;
            vis7Hits += 1;
            document.getElementById("hits").innerHTML = vis7Hits;
            vis7AB += 1;
            document.getElementById("atBats").innerHTML = vis7AB;
        }
        if (atBat == document.getElementById("8team2").value) {
            vis8Singles += 1;
            document.getElementById("singles").innerHTML = vis8Singles;
            vis8Hits += 1;
            document.getElementById("hits").innerHTML = vis8Hits;
            vis8AB += 1;
            document.getElementById("atBats").innerHTML = vis8AB;
        }
        if (atBat == document.getElementById("9team2").value) {
            vis9Singles += 1;
            document.getElementById("singles").innerHTML = vis9Singles;
            vis9Hits += 1;
            document.getElementById("hits").innerHTML = vis9Hits;
            vis9AB += 1;
            document.getElementById("atBats").innerHTML = vis9AB;
        }
    } else {
        homeHits += 1;
        document.getElementById("homeHits").innerHTML = homeHits;
        if (atBat == document.getElementById("1team1").value) {
            home1Singles += 1;
            document.getElementById("singles").innerHTML = home1Singles;
            home1Hits += 1;
            document.getElementById("hits").innerHTML = home1Hits;
            home1AB += 1;
            document.getElementById("atBats").innerHTML = home1AB;
        }
        if (atBat == document.getElementById("2team1").value) {
            home2Singles += 1;
            document.getElementById("singles").innerHTML = home2Singles;
            home2Hits += 1;
            document.getElementById("hits").innerHTML = home2Hits;
            home2AB += 1;
            document.getElementById("atBats").innerHTML = home2AB;
        }
        if (atBat == document.getElementById("3team1").value) {
            home3Singles += 1;
            document.getElementById("singles").innerHTML = home3Singles;
            home3Hits += 1;
            document.getElementById("hits").innerHTML = home3Hits;
            home3AB += 1;
            document.getElementById("atBats").innerHTML = home3AB;
        }
        if (atBat == document.getElementById("4team1").value) {
            home4Singles += 1;
            document.getElementById("singles").innerHTML = home4Singles;
            home4Hits += 1;
            document.getElementById("hits").innerHTML = home4Hits;
            home4AB += 1;
            document.getElementById("atBats").innerHTML = home4AB;
        }
        if (atBat == document.getElementById("5team1").value) {
            home5Singles += 1;
            document.getElementById("singles").innerHTML = home5Singles;
            home5Hits += 1;
            document.getElementById("hits").innerHTML = home5Hits;
            home5AB += 1;
            document.getElementById("atBats").innerHTML = home5AB;
        }
        if (atBat == document.getElementById("6team1").value) {
            home6Singles += 1;
            document.getElementById("singles").innerHTML = home6Singles;
            home6Hits += 1;
            document.getElementById("hits").innerHTML = home6Hits;
            home6AB += 1;
            document.getElementById("atBats").innerHTML = home6AB;
        }
        if (atBat == document.getElementById("7team1").value) {
            home7Singles += 1;
            document.getElementById("singles").innerHTML = home7Singles;
            home7Hits += 1;
            document.getElementById("hits").innerHTML = home7Hits;
            home7AB += 1;
            document.getElementById("atBats").innerHTML = home7AB;
        }
        if (atBat == document.getElementById("8team1").value) {
            home8Singles += 1;
            document.getElementById("singles").innerHTML = home8Singles;
            home8Hits += 1;
            document.getElementById("hits").innerHTML = home8Hits;
            home8AB += 1;
            document.getElementById("atBats").innerHTML = home8AB;
        }
        if (atBat == document.getElementById("9team1").value) {
            home9Singles += 1;
            document.getElementById("singles").innerHTML = home9Singles;
            home9Hits += 1;
            document.getElementById("hits").innerHTML = home9Hits;
            home9AB += 1;
            document.getElementById("atBats").innerHTML = home9AB;
        }
    }
    document.getElementById("recent").innerHTML = atBat + " Singled";
    let xhr = new XMLHttpRequest();
    // xhr.addEventListener("load", responseReceivedHandler);    
    xhr.responseType = "json";        
    let queryString = "name=" + atBat
    xhr.open("PUT", "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/baseballstats-ovlbt/service/players/incoming_webhook/player-update?" + queryString);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(queryString);
}
function double() {
    if (inning == 1 || inning == 3 || inning == 5 || inning == 7 || inning == 9 
        || inning == 11 || inning == 13 || inning == 15 || inning == 17) {
        visHits += 1;
        document.getElementById("visHits").innerHTML = visHits;
        if (atBat == document.getElementById("1team2").value) {
            vis1Doubles += 1;
            document.getElementById("doubles").innerHTML = vis1Doubles;
            vis1Hits += 1;
            document.getElementById("hits").innerHTML = vis1Hits;
            vis1AB += 1;
            document.getElementById("atBats").innerHTML = vis1AB;
        }
        if (atBat == document.getElementById("2team2").value) {
            vis2Doubles += 1;
            document.getElementById("doubles").innerHTML = vis2Doubles;
            vis2Hits += 1;
            document.getElementById("hits").innerHTML = vis2Hits;
            vis2AB += 1;
            document.getElementById("atBats").innerHTML = vis2AB;
        }
        if (atBat == document.getElementById("3team2").value) {
            vis3Doubles += 1;
            document.getElementById("doubles").innerHTML = vis3Doubles;
            vis3Hits += 1;
            document.getElementById("hits").innerHTML = vis3Hits;
            vis3AB += 1;
            document.getElementById("atBats").innerHTML = vis3AB;
        }
        if (atBat == document.getElementById("4team2").value) {
            vis4Doubles += 1;
            document.getElementById("doubles").innerHTML = vis4Doubles;
            vis4Hits += 1;
            document.getElementById("hits").innerHTML = vis4Hits;
            vis4AB += 1;
            document.getElementById("atBats").innerHTML = vis4AB;
        }
        if (atBat == document.getElementById("5team2").value) {
            vis5Doubles += 1;
            document.getElementById("doubles").innerHTML = vis5Doubles;
            vis5Hits += 1;
            document.getElementById("hits").innerHTML = vis5Hits;
            vis5AB += 1;
            document.getElementById("atBats").innerHTML = vis5AB;
        }
        if (atBat == document.getElementById("6team2").value) {
            vis6Doubles += 1;
            document.getElementById("doubles").innerHTML = vis6Doubles;
            vis6Hits += 1;
            document.getElementById("hits").innerHTML = vis6Hits;
            vis6AB += 1;
            document.getElementById("atBats").innerHTML = vis6AB;
        }
        if (atBat == document.getElementById("7team2").value) {
            vis7Doubles += 1;
            document.getElementById("doubles").innerHTML = vis7Doubles;
            vis7Hits += 1;
            document.getElementById("hits").innerHTML = vis7Hits;
            vis7AB += 1;
            document.getElementById("atBats").innerHTML = vis7AB;
        }
        if (atBat == document.getElementById("8team2").value) {
            vis8Doubles += 1;
            document.getElementById("doubles").innerHTML = vis8Doubles;
            vis8Hits += 1;
            document.getElementById("hits").innerHTML = vis8Hits;
            vis8AB += 1;
            document.getElementById("atBats").innerHTML = vis8AB;
        }
        if (atBat == document.getElementById("9team2").value) {
            vis9Doubles += 1;
            document.getElementById("doubles").innerHTML = vis9Doubles;
            vis9Hits += 1;
            document.getElementById("hits").innerHTML = vis9Hits;
            vis9AB += 1;
            document.getElementById("atBats").innerHTML = vis9AB;
        }
    } else {
        homeHits += 1;
        document.getElementById("homeHits").innerHTML = homeHits;
        if (atBat == document.getElementById("1team1").value) {
            home1Doubles += 1;
            document.getElementById("doubles").innerHTML = home1Doubles;
            home1Hits += 1;
            document.getElementById("hits").innerHTML = home1Hits;
            home1AB += 1;
            document.getElementById("atBats").innerHTML = home1AB;
        }
        if (atBat == document.getElementById("2team1").value) {
            home2Doubles += 1;
            document.getElementById("doubles").innerHTML = home2Doubles;
            home2Hits += 1;
            document.getElementById("hits").innerHTML = home2Hits;
            home2AB += 1;
            document.getElementById("atBats").innerHTML = home2AB;
        }
        if (atBat == document.getElementById("3team1").value) {
            home3Doubles += 1;
            document.getElementById("doubles").innerHTML = home3Doubles;
            home3Hits += 1;
            document.getElementById("hits").innerHTML = home3Hits;
            home3AB += 1;
            document.getElementById("atBats").innerHTML = home3AB;
        }
        if (atBat == document.getElementById("4team1").value) {
            home4Doubles += 1;
            document.getElementById("doubles").innerHTML = home4Doubles;
            home4Hits += 1;
            document.getElementById("hits").innerHTML = home4Hits;
            home4AB += 1;
            document.getElementById("atBats").innerHTML = home4AB;
        }
        if (atBat == document.getElementById("5team1").value) {
            home5Doubles += 1;
            document.getElementById("doubles").innerHTML = home5Doubles;
            home5Hits += 1;
            document.getElementById("hits").innerHTML = home5Hits;
            home5AB += 1;
            document.getElementById("atBats").innerHTML = home5AB;
        }
        if (atBat == document.getElementById("6team1").value) {
            home6Doubles += 1;
            document.getElementById("doubles").innerHTML = home6Doubles;
            home6Hits += 1;
            document.getElementById("hits").innerHTML = home6Hits;
            home6AB += 1;
            document.getElementById("atBats").innerHTML = home6AB;
        }
        if (atBat == document.getElementById("7team1").value) {
            home7Doubles += 1;
            document.getElementById("doubles").innerHTML = home7Doubles;
            home7Hits += 1;
            document.getElementById("hits").innerHTML = home7Hits;
            home7AB += 1;
            document.getElementById("atBats").innerHTML = home7AB;
        }
        if (atBat == document.getElementById("8team1").value) {
            home8Doubles += 1;
            document.getElementById("doubles").innerHTML = home8Doubles;
            home8Hits += 1;
            document.getElementById("hits").innerHTML = home8Hits;
            home8AB += 1;
            document.getElementById("atBats").innerHTML = home8AB;
        }
        if (atBat == document.getElementById("9team1").value) {
            home9Doubles += 1;
            document.getElementById("doubles").innerHTML = home9Doubles;
            home9Hits += 1;
            document.getElementById("hits").innerHTML = home9Hits;
            home9AB += 1;
            document.getElementById("atBats").innerHTML = home9AB;
        }
    }
    document.getElementById("recent").innerHTML = atBat + " Doubled";
}
function triple() {
    if (inning == 1 || inning == 3 || inning == 5 || inning == 7 || inning == 9 
        || inning == 11 || inning == 13 || inning == 15 || inning == 17) {
        visHits += 1;
        document.getElementById("visHits").innerHTML = visHits;
        if (atBat == document.getElementById("1team2").value) {
            vis1Triples += 1;
            document.getElementById("triples").innerHTML = vis1Triples;
            vis1Hits += 1;
            document.getElementById("hits").innerHTML = vis1Hits;
            vis1AB += 1;
            document.getElementById("atBats").innerHTML = vis1AB;
        }
        if (atBat == document.getElementById("2team2").value) {
            vis2Triples += 1;
            document.getElementById("triples").innerHTML = vis2Triples;
            vis2Hits += 1;
            document.getElementById("hits").innerHTML = vis2Hits;
            vis2AB += 1;
            document.getElementById("atBats").innerHTML = vis2AB;
        }
        if (atBat == document.getElementById("3team2").value) {
            vis3Triples += 1;
            document.getElementById("triples").innerHTML = vis3Triples;
            vis3Hits += 1;
            document.getElementById("hits").innerHTML = vis3Hits;
            vis3AB += 1;
            document.getElementById("atBats").innerHTML = vis3AB;
        }
        if (atBat == document.getElementById("4team2").value) {
            vis4Triples += 1;
            document.getElementById("triples").innerHTML = vis4Triples;
            vis4Hits += 1;
            document.getElementById("hits").innerHTML = vis4Hits;
            vis4AB += 1;
            document.getElementById("atBats").innerHTML = vis4AB;
        }
        if (atBat == document.getElementById("5team2").value) {
            vis5Triples += 1;
            document.getElementById("triples").innerHTML = vis5Triples;
            vis5Hits += 1;
            document.getElementById("hits").innerHTML = vis5Hits;
            vis5AB += 1;
            document.getElementById("atBats").innerHTML = vis5AB;
        }
        if (atBat == document.getElementById("6team2").value) {
            vis6Triples += 1;
            document.getElementById("triples").innerHTML = vis6Triples;
            vis6Hits += 1;
            document.getElementById("hits").innerHTML = vis6Hits;
            vis6AB += 1;
            document.getElementById("atBats").innerHTML = vis6AB;
        }
        if (atBat == document.getElementById("7team2").value) {
            vis7Triples += 1;
            document.getElementById("triples").innerHTML = vis7Triples;
            vis7Hits += 1;
            document.getElementById("hits").innerHTML = vis7Hits;
            vis7AB += 1;
            document.getElementById("atBats").innerHTML = vis7AB;
        }
        if (atBat == document.getElementById("8team2").value) {
            vis8Triples += 1;
            document.getElementById("triples").innerHTML = vis8Triples;
            vis8Hits += 1;
            document.getElementById("hits").innerHTML = vis8Hits;
            vis8AB += 1;
            document.getElementById("atBats").innerHTML = vis8AB;
        }
        if (atBat == document.getElementById("9team2").value) {
            vis9Triples += 1;
            document.getElementById("triples").innerHTML = vis9Triples;
            vis9Hits += 1;
            document.getElementById("hits").innerHTML = vis9Hits;
            vis9AB += 1;
            document.getElementById("atBats").innerHTML = vis9AB;
        }
    } else {
        homeHits += 1;
        document.getElementById("homeHits").innerHTML = homeHits;
        if (atBat == document.getElementById("1team1").value) {
            home1Triples += 1;
            document.getElementById("triples").innerHTML = home1Triples;
            home1Hits += 1;
            document.getElementById("hits").innerHTML = home1Hits;
            home1AB += 1;
            document.getElementById("atBats").innerHTML = home1AB;
        }
        if (atBat == document.getElementById("2team1").value) {
            home2Triples += 1;
            document.getElementById("triples").innerHTML = home2Triples;
            home2Hits += 1;
            document.getElementById("hits").innerHTML = home2Hits;
            home2AB += 1;
            document.getElementById("atBats").innerHTML = home2AB;
        }
        if (atBat == document.getElementById("3team1").value) {
            home3Triples += 1;
            document.getElementById("triples").innerHTML = home3Triples;
            home3Hits += 1;
            document.getElementById("hits").innerHTML = home3Hits;
            home3AB += 1;
            document.getElementById("atBats").innerHTML = home3AB;
        }
        if (atBat == document.getElementById("4team1").value) {
            home4Triples += 1;
            document.getElementById("triples").innerHTML = home4Triples;
            home4Hits += 1;
            document.getElementById("hits").innerHTML = home4Hits;
            home4AB += 1;
            document.getElementById("atBats").innerHTML = home4AB;
        }
        if (atBat == document.getElementById("5team1").value) {
            home5Triples += 1;
            document.getElementById("triples").innerHTML = home5Triples;
            home5Hits += 1;
            document.getElementById("hits").innerHTML = home5Hits;
            home5AB += 1;
            document.getElementById("atBats").innerHTML = home5AB;
        }
        if (atBat == document.getElementById("6team1").value) {
            home6Triples += 1;
            document.getElementById("triples").innerHTML = home6Triples;
            home6Hits += 1;
            document.getElementById("hits").innerHTML = home6Hits;
            home6AB += 1;
            document.getElementById("atBats").innerHTML = home6AB;
        }
        if (atBat == document.getElementById("7team1").value) {
            home7Triples += 1;
            document.getElementById("triples").innerHTML = home7Triples;
            home7Hits += 1;
            document.getElementById("hits").innerHTML = home7Hits;
            home7AB += 1;
            document.getElementById("atBats").innerHTML = home7AB;
        }
        if (atBat == document.getElementById("8team1").value) {
            home8Triples += 1;
            document.getElementById("triples").innerHTML = home8Triples;
            home8Hits += 1;
            document.getElementById("hits").innerHTML = home8Hits;
            home8AB += 1;
            document.getElementById("atBats").innerHTML = home8AB;
        }
        if (atBat == document.getElementById("9team1").value) {
            home9Triples += 1;
            document.getElementById("triples").innerHTML = home9Triples;
            home9Hits += 1;
            document.getElementById("hits").innerHTML = home9Hits;
            home9AB += 1;
            document.getElementById("atBats").innerHTML = home9AB;
        }
    }
    document.getElementById("recent").innerHTML = atBat + " Tripled";
}
function homerun() {
    if (inning == 1 || inning == 3 || inning == 5 || inning == 7 || inning == 9 
        || inning == 11 || inning == 13 || inning == 15 || inning == 17) {
        visHits += 1;
        document.getElementById("visHits").innerHTML = visHits;
        if (atBat == document.getElementById("1team2").value) {
            vis1HR += 1;
            document.getElementById("homeRunsHit").innerHTML = vis1HR;
            vis1Hits += 1;
            document.getElementById("hits").innerHTML = vis1Hits;
            vis1AB += 1;
            document.getElementById("atBats").innerHTML = vis1AB;
        }
        if (atBat == document.getElementById("2team2").value) {
            vis2HR += 1;
            document.getElementById("homeRunsHit").innerHTML = vis2HR;
            vis2Hits += 1;
            document.getElementById("hits").innerHTML = vis2Hits;
            vis2AB += 1;
            document.getElementById("atBats").innerHTML = vis2AB;
        }
        if (atBat == document.getElementById("3team2").value) {
            vis3HR += 1;
            document.getElementById("homeRunsHit").innerHTML = vis3HR;
            vis3Hits += 1;
            document.getElementById("hits").innerHTML = vis3Hits;
            vis3AB += 1;
            document.getElementById("atBats").innerHTML = vis3AB;
        }
        if (atBat == document.getElementById("4team2").value) {
            vis4HR += 1;
            document.getElementById("homeRunsHit").innerHTML = vis4HR;
            vis4Hits += 1;
            document.getElementById("hits").innerHTML = vis4Hits;
            vis4AB += 1;
            document.getElementById("atBats").innerHTML = vis4AB;
        }
        if (atBat == document.getElementById("5team2").value) {
            vis5HR += 1;
            document.getElementById("homeRunsHit").innerHTML = vis5HR;
            vis5Hits += 1;
            document.getElementById("hits").innerHTML = vis5Hits;
            vis5AB += 1;
            document.getElementById("atBats").innerHTML = vis5AB;
        }
        if (atBat == document.getElementById("6team2").value) {
            vis6HR += 1;
            document.getElementById("homeRunsHit").innerHTML = vis6HR;
            vis6Hits += 1;
            document.getElementById("hits").innerHTML = vis6Hits;
            vis6AB += 1;
            document.getElementById("atBats").innerHTML = vis6AB;
        }
        if (atBat == document.getElementById("7team2").value) {
            vis7HR += 1;
            document.getElementById("homeRunsHit").innerHTML = vis7HR;
            vis7Hits += 1;
            document.getElementById("hits").innerHTML = vis7Hits;
            vis7AB += 1;
            document.getElementById("atBats").innerHTML = vis7AB;
        }
        if (atBat == document.getElementById("8team2").value) {
            vis8HR += 1;
            document.getElementById("homeRunsHit").innerHTML = vis8HR;
            vis8Hits += 1;
            document.getElementById("hits").innerHTML = vis8Hits;
            vis8AB += 1;
            document.getElementById("atBats").innerHTML = vis8AB;
        }
        if (atBat == document.getElementById("9team2").value) {
            vis9HR += 1;
            document.getElementById("homeRunsHit").innerHTML = vis9HR;
            vis9Hits += 1;
            document.getElementById("hits").innerHTML = vis9Hits;
            vis9AB += 1;
            document.getElementById("atBats").innerHTML = vis9AB;
        }
    } else {
        homeHits += 1;
        document.getElementById("homeHits").innerHTML = homeHits;
        if (atBat == document.getElementById("1team1").value) {
            home1HR += 1;
            document.getElementById("homeRunsHit").innerHTML = home1HR;
            home1Hits += 1;
            document.getElementById("hits").innerHTML = home1Hits;
            home1AB += 1;
            document.getElementById("atBats").innerHTML = home1AB;
        }
        if (atBat == document.getElementById("2team1").value) {
            home2HR += 1;
            document.getElementById("homeRunsHit").innerHTML = home2HR;
            home2Hits += 1;
            document.getElementById("hits").innerHTML = home2Hits;
            home2AB += 1;
            document.getElementById("atBats").innerHTML = home2AB;
        }
        if (atBat == document.getElementById("3team1").value) {
            home3HR += 1;
            document.getElementById("homeRunsHit").innerHTML = home3HR;
            home3Hits += 1;
            document.getElementById("hits").innerHTML = home3Hits;
            home3AB += 1;
            document.getElementById("atBats").innerHTML = home3AB;
        }
        if (atBat == document.getElementById("4team1").value) {
            home4HR += 1;
            document.getElementById("homeRunsHit").innerHTML = home4HR;
            home4Hits += 1;
            document.getElementById("hits").innerHTML = home4Hits;
            home4AB += 1;
            document.getElementById("atBats").innerHTML = home4AB;
        }
        if (atBat == document.getElementById("5team1").value) {
            home5HR += 1;
            document.getElementById("homeRunsHit").innerHTML = home5HR;
            home5Hits += 1;
            document.getElementById("hits").innerHTML = home5Hits;
            home5AB += 1;
            document.getElementById("atBats").innerHTML = home5AB;
        }
        if (atBat == document.getElementById("6team1").value) {
            home6HR += 1;
            document.getElementById("homeRunsHit").innerHTML = home6HR;
            home6Hits += 1;
            document.getElementById("hits").innerHTML = home6Hits;
            home6AB += 1;
            document.getElementById("atBats").innerHTML = home6AB;
        }
        if (atBat == document.getElementById("7team1").value) {
            home7HR += 1;
            document.getElementById("homeRunsHit").innerHTML = home7HR;
            home7Hits += 1;
            document.getElementById("hits").innerHTML = home7Hits;
            home7AB += 1;
            document.getElementById("atBats").innerHTML = home7AB;
        }
        if (atBat == document.getElementById("8team1").value) {
            home9HR += 1;
            document.getElementById("homeRunsHit").innerHTML = home9HR;
            home8Hits += 1;
            document.getElementById("hits").innerHTML = home8Hits;
            home8AB += 1;
            document.getElementById("atBats").innerHTML = home8AB;
        }
        if (atBat == document.getElementById("9team1").value) {
            home9HR += 1;
            document.getElementById("homeRunsHit").innerHTML = home9HR;
            home9Hits += 1;
            document.getElementById("hits").innerHTML = home9Hits;
            home9AB += 1;
            document.getElementById("atBats").innerHTML = home9AB;
        }
    }
    document.getElementById("recent").innerHTML = atBat + " Hit A Home Run"
}

function groundout() {
    outs += 1;
    document.getElementById("outs").innerHTML = outs;
    document.getElementById("recent").innerHTML = atBat + " Grounded Out";
    if (outs == 3) {
        endInning();
    }    
    if (inning == 1 || inning == 3 || inning == 5 || inning == 7 || inning == 9 
        || inning == 11 || inning == 13 || inning == 15 || inning == 17) {
        if (atBat == document.getElementById("1team2").value) {
            vis1AB += 1;
            document.getElementById("atBats").innerHTML = vis1AB;
        }
        if (atBat == document.getElementById("2team2").value) {
            vis2AB += 1;
            document.getElementById("atBats").innerHTML = vis2AB;
        }
        if (atBat == document.getElementById("3team2").value) {
            vis3AB += 1;
            document.getElementById("atBats").innerHTML = vis3AB;
        }
        if (atBat == document.getElementById("4team2").value) {
            vis4AB += 1;
            document.getElementById("atBats").innerHTML = vis4AB;
        }
        if (atBat == document.getElementById("5team2").value) {
            vis5AB += 1;
            document.getElementById("atBats").innerHTML = vis5AB;
        }
        if (atBat == document.getElementById("6team2").value) {
            vis6AB += 1;
             document.getElementById("atBats").innerHTML = vis6AB;
        }
        if (atBat == document.getElementById("7team2").value) {
            vis7AB += 1;
            document.getElementById("atBats").innerHTML = vis7AB;
        }
        if (atBat == document.getElementById("8team2").value) {
            vis8AB += 1;
            document.getElementById("atBats").innerHTML = vis8AB;
        }
        if (atBat == document.getElementById("9team2").value) {
            vis9AB += 1;
            document.getElementById("atBats").innerHTML = vis9AB;
        }
    } else {
        if (atBat == document.getElementById("1team1").value) {
            home1AB += 1;
            document.getElementById("atBats").innerHTML = home1AB;
        }
        if (atBat == document.getElementById("2team1").value) {
            home2AB += 1;
            document.getElementById("atBats").innerHTML = home2AB;
        }
        if (atBat == document.getElementById("3team1").value) {
            home3AB += 1;
            document.getElementById("atBats").innerHTML = home3AB;
        }
        if (atBat == document.getElementById("4team1").value) {
            home4AB += 1;
            document.getElementById("atBats").innerHTML = home4AB;
        }
        if (atBat == document.getElementById("5team1").value) {
            home5AB += 1;
            document.getElementById("atBats").innerHTML = home5AB;
        }
        if (atBat == document.getElementById("6team1").value) {
            home6AB += 1;
            document.getElementById("atBats").innerHTML = home6AB;
        }
        if (atBat == document.getElementById("7team1").value) {
            home7AB += 1;
            document.getElementById("atBats").innerHTML = home7AB;
        }
        if (atBat == document.getElementById("8team1").value) {
            home8AB += 1;
            document.getElementById("atBats").innerHTML = home8AB;
        }
        if (atBat == document.getElementById("9team1").value) {
            home9AB += 1;
            document.getElementById("atBats").innerHTML = home9AB;
        }
    }
}
function flyout() {
    outs += 1;
    document.getElementById("outs").innerHTML = outs;
    document.getElementById("recent").innerHTML = atBat + " Flew Out";
    if (outs == 3) {
        endInning();
    }
    if (inning == 1 || inning == 3 || inning == 5 || inning == 7 || inning == 9 
        || inning == 11 || inning == 13 || inning == 15 || inning == 17) {
        if (atBat == document.getElementById("1team2").value) {
            vis1AB += 1;
            document.getElementById("atBats").innerHTML = vis1AB;
        }
        if (atBat == document.getElementById("2team2").value) {
            vis2AB += 1;
            document.getElementById("atBats").innerHTML = vis2AB;
        }
        if (atBat == document.getElementById("3team2").value) {
            vis3AB += 1;
            document.getElementById("atBats").innerHTML = vis3AB;
        }
        if (atBat == document.getElementById("4team2").value) {
            vis4AB += 1;
            document.getElementById("atBats").innerHTML = vis4AB;
        }
        if (atBat == document.getElementById("5team2").value) {
            vis5AB += 1;
            document.getElementById("atBats").innerHTML = vis5AB;
        }
        if (atBat == document.getElementById("6team2").value) {
            vis6AB += 1;
             document.getElementById("atBats").innerHTML = vis6AB;
        }
        if (atBat == document.getElementById("7team2").value) {
            vis7AB += 1;
            document.getElementById("atBats").innerHTML = vis7AB;
        }
        if (atBat == document.getElementById("8team2").value) {
            vis8AB += 1;
            document.getElementById("atBats").innerHTML = vis8AB;
        }
        if (atBat == document.getElementById("9team2").value) {
            vis9AB += 1;
            document.getElementById("atBats").innerHTML = vis9AB;
        }
    } else {
        if (atBat == document.getElementById("1team1").value) {
            home1AB += 1;
            document.getElementById("atBats").innerHTML = home1AB;
        }
        if (atBat == document.getElementById("2team1").value) {
            home2AB += 1;
            document.getElementById("atBats").innerHTML = home2AB;
        }
        if (atBat == document.getElementById("3team1").value) {
            home3AB += 1;
            document.getElementById("atBats").innerHTML = home3AB;
        }
        if (atBat == document.getElementById("4team1").value) {
            home4AB += 1;
            document.getElementById("atBats").innerHTML = home4AB;
        }
        if (atBat == document.getElementById("5team1").value) {
            home5AB += 1;
            document.getElementById("atBats").innerHTML = home5AB;
        }
        if (atBat == document.getElementById("6team1").value) {
            home6AB += 1;
            document.getElementById("atBats").innerHTML = home6AB;
        }
        if (atBat == document.getElementById("7team1").value) {
            home7AB += 1;
            document.getElementById("atBats").innerHTML = home7AB;
        }
        if (atBat == document.getElementById("8team1").value) {
            home8AB += 1;
            document.getElementById("atBats").innerHTML = home8AB;
        }
        if (atBat == document.getElementById("9team1").value) {
            home9AB += 1;
            document.getElementById("atBats").innerHTML = home9AB;
        }
    }    
}
function lineout() {
    outs += 1;
    document.getElementById("outs").innerHTML = outs;
    document.getElementById("recent").innerHTML = atBat + " Lined Out";
    if (outs == 3) {
        endInning();
    }
    if (inning == 1 || inning == 3 || inning == 5 || inning == 7 || inning == 9 
        || inning == 11 || inning == 13 || inning == 15 || inning == 17) {
        if (atBat == document.getElementById("1team2").value) {
            vis1AB += 1;
            document.getElementById("atBats").innerHTML = vis1AB;
        }
        if (atBat == document.getElementById("2team2").value) {
            vis2AB += 1;
            document.getElementById("atBats").innerHTML = vis2AB;
        }
        if (atBat == document.getElementById("3team2").value) {
            vis3AB += 1;
            document.getElementById("atBats").innerHTML = vis3AB;
        }
        if (atBat == document.getElementById("4team2").value) {
            vis4AB += 1;
            document.getElementById("atBats").innerHTML = vis4AB;
        }
        if (atBat == document.getElementById("5team2").value) {
            vis5AB += 1;
            document.getElementById("atBats").innerHTML = vis5AB;
        }
        if (atBat == document.getElementById("6team2").value) {
            vis6AB += 1;
             document.getElementById("atBats").innerHTML = vis6AB;
        }
        if (atBat == document.getElementById("7team2").value) {
            vis7AB += 1;
            document.getElementById("atBats").innerHTML = vis7AB;
        }
        if (atBat == document.getElementById("8team2").value) {
            vis8AB += 1;
            document.getElementById("atBats").innerHTML = vis8AB;
        }
        if (atBat == document.getElementById("9team2").value) {
            vis9AB += 1;
            document.getElementById("atBats").innerHTML = vis9AB;
        }
    } else {
        if (atBat == document.getElementById("1team1").value) {
            home1AB += 1;
            document.getElementById("atBats").innerHTML = home1AB;
        }
        if (atBat == document.getElementById("2team1").value) {
            home2AB += 1;
            document.getElementById("atBats").innerHTML = home2AB;
        }
        if (atBat == document.getElementById("3team1").value) {
            home3AB += 1;
            document.getElementById("atBats").innerHTML = home3AB;
        }
        if (atBat == document.getElementById("4team1").value) {
            home4AB += 1;
            document.getElementById("atBats").innerHTML = home4AB;
        }
        if (atBat == document.getElementById("5team1").value) {
            home5AB += 1;
            document.getElementById("atBats").innerHTML = home5AB;
        }
        if (atBat == document.getElementById("6team1").value) {
            home6AB += 1;
            document.getElementById("atBats").innerHTML = home6AB;
        }
        if (atBat == document.getElementById("7team1").value) {
            home7AB += 1;
            document.getElementById("atBats").innerHTML = home7AB;
        }
        if (atBat == document.getElementById("8team1").value) {
            home8AB += 1;
            document.getElementById("atBats").innerHTML = home8AB;
        }
        if (atBat == document.getElementById("9team1").value) {
            home9AB += 1;
            document.getElementById("atBats").innerHTML = home9AB;
        }
    }    
}
function error() {
    document.getElementById("recent").innerHTML = "Error";
    if (inning == 1 || inning == 3 || inning == 5 || inning == 7 || inning == 9 
        || inning == 11 || inning == 13 || inning == 15 || inning == 17) {
            visError += 1;
            document.getElementById("visErrors").innerHTML = visError;
        } else {
            homError += 1;
            document.getElementById("visErrors").innerHTML = homError;
        }
}
function hitByPitch() {
    document.getElementById("recent").innerHTML = atBat + " Hit By A Pitch";
    if (inning == 1 || inning == 3 || inning == 5 || inning == 7 || inning == 9 
        || inning == 11 || inning == 13 || inning == 15 || inning == 17) {
        if (atBat == document.getElementById("1team2").value) {
            vis1HBP += 1;
            document.getElementById("hitterHitByPitch").innerHTML = vis1HBP;
        }
        if (atBat == document.getElementById("2team2").value) {
            vis2HBP += 1;
            document.getElementById("hitterHitByPitch").innerHTML = vis2HBP;
        }
        if (atBat == document.getElementById("3team2").value) {
            vis3HBP += 1;
            document.getElementById("hitterHitByPitch").innerHTML = vis3HBP;
        }
        if (atBat == document.getElementById("4team2").value) {
            vis4HBP += 1;
            document.getElementById("hitterHitByPitch").innerHTML = vis4HBP;
        }
        if (atBat == document.getElementById("5team2").value) {
            vis5HBP += 1;
            document.getElementById("hitterHitByPitch").innerHTML = vis5HBP;
        }
        if (atBat == document.getElementById("6team2").value) {
            vis6HBP += 1;
            document.getElementById("hitterHitByPitch").innerHTML = vis6HBP;
        }
        if (atBat == document.getElementById("7team2").value) {
            vis7HBP += 1;
            document.getElementById("hitterHitByPitch").innerHTML = vis7HBP;
        }
        if (atBat == document.getElementById("8team2").value) {
            vis8HBP += 1;
            document.getElementById("hitterHitByPitch").innerHTML = vis8HBP;
        }
        if (atBat == document.getElementById("9team2").value) {
            vis9HBP += 1;
            document.getElementById("hitterHitByPitch").innerHTML = vis9HBP;
        }
    } else {
        if (atBat == document.getElementById("1team1").value) {
            home1HBP += 1;
            document.getElementById("hitterHitByPitch").innerHTML = home1HBP;
        }
        if (atBat == document.getElementById("2team1").value) {
            home2HBP += 1;
            document.getElementById("hitterHitByPitch").innerHTML = home2HBP;
        }
        if (atBat == document.getElementById("3team1").value) {
            home3HBP += 1;
            document.getElementById("hitterHitByPitch").innerHTML = home3HBP;
        }
        if (atBat == document.getElementById("4team1").value) {
            home4HBP += 1;
            document.getElementById("hitterHitByPitch").innerHTML = home4HBP;
        }
        if (atBat == document.getElementById("5team1").value) {
            home5HBP += 1;
            document.getElementById("hitterHitByPitch").innerHTML = home5HBP;
        }
        if (atBat == document.getElementById("6team1").value) {
            home6HBP += 1;
            document.getElementById("hitterHitByPitch").innerHTML = home6HBP;
        }
        if (atBat == document.getElementById("7team1").value) {
            home7HBP += 1;
            document.getElementById("hitterHitByPitch").innerHTML = home7HBP;
        }
        if (atBat == document.getElementById("8team1").value) {
            home8HBP += 1;
            document.getElementById("hitterHitByPitch").innerHTML = home8HBP;
        }
        if (atBat == document.getElementById("9team1").value) {
            home9HBP += 1;
            document.getElementById("hitterHitByPitch").innerHTML = home9HBP;
        }
    }
}
function stoleSecond() {
    document.getElementById("recent").innerHTML = atBat + " Stole Second";
    if (inning == 1 || inning == 3 || inning == 5 || inning == 7 || inning == 9 
        || inning == 11 || inning == 13 || inning == 15 || inning == 17) {
        if (atBat == document.getElementById("1team2").value) {
            vis1SB += 1;
            document.getElementById("stolenBases").innerHTML = vis1SB;
        }
        if (atBat == document.getElementById("2team2").value) {
            vis2SB += 1;
            document.getElementById("stolenBases").innerHTML = vis2SB;
        }
        if (atBat == document.getElementById("3team2").value) {
            vis3SB += 1;
            document.getElementById("stolenBases").innerHTML = vis3SB;
        }
        if (atBat == document.getElementById("4team2").value) {
            vis4SB += 1;
            document.getElementById("stolenBases").innerHTML = vis4SB;
        }
        if (atBat == document.getElementById("5team2").value) {
            vis5SB += 1;
            document.getElementById("stolenBases").innerHTML = vis5SB;
        }
        if (atBat == document.getElementById("6team2").value) {
            vis6SB += 1;
            document.getElementById("stolenBases").innerHTML = vis6SB;
        }
        if (atBat == document.getElementById("7team2").value) {
            vis7SB += 1;
            document.getElementById("stolenBases").innerHTML = vis7SB;
        }
        if (atBat == document.getElementById("8team2").value) {
            vis8SB += 1;
            document.getElementById("stolenBases").innerHTML = vis8SB;
        }
        if (atBat == document.getElementById("9team2").value) {
            vis9SB += 1;
            document.getElementById("stolenBases").innerHTML = vis9SB;
        }
    } else {
        if (atBat == document.getElementById("1team1").value) {
            home1SB += 1;
            document.getElementById("stolenBases").innerHTML = home1SB;
        }
        if (atBat == document.getElementById("2team1").value) {
            home2SB += 1;
            document.getElementById("stolenBases").innerHTML = home2SB;
        }
        if (atBat == document.getElementById("3team1").value) {
            home3SB += 1;
            document.getElementById("stolenBases").innerHTML = home3SB;
        }
        if (atBat == document.getElementById("4team1").value) {
            home4SB += 1;
            document.getElementById("stolenBases").innerHTML = home4SB;
        }
        if (atBat == document.getElementById("5team1").value) {
            home5SB += 1;
            document.getElementById("stolenBases").innerHTML = home5SB;
        }
        if (atBat == document.getElementById("6team1").value) {
            home6SB += 1;
            document.getElementById("stolenBases").innerHTML = home6SB;
        }
        if (atBat == document.getElementById("7team1").value) {
            home7SB += 1;
            document.getElementById("stolenBases").innerHTML = home7SB;
        }
        if (atBat == document.getElementById("8team1").value) {
            home8SB += 1;
            document.getElementById("stolenBases").innerHTML = home8SB;
        }
        if (atBat == document.getElementById("9team1").value) {
            home9SB += 1;
            document.getElementById("stolenBases").innerHTML = home9SB;
        }
    }   
}
function stoleThird() {
    document.getElementById("recent").innerHTML = atBat + " Stole Third";
    if (inning == 1 || inning == 3 || inning == 5 || inning == 7 || inning == 9 
        || inning == 11 || inning == 13 || inning == 15 || inning == 17) {
        if (atBat == document.getElementById("1team2").value) {
            vis1SB += 1;
            document.getElementById("stolenBases").innerHTML = vis1SB;
        }
        if (atBat == document.getElementById("2team2").value) {
            vis2SB += 1;
            document.getElementById("stolenBases").innerHTML = vis2SB;
        }
        if (atBat == document.getElementById("3team2").value) {
            vis3SB += 1;
            document.getElementById("stolenBases").innerHTML = vis3SB;
        }
        if (atBat == document.getElementById("4team2").value) {
            vis4SB += 1;
            document.getElementById("stolenBases").innerHTML = vis4SB;
        }
        if (atBat == document.getElementById("5team2").value) {
            vis5SB += 1;
            document.getElementById("stolenBases").innerHTML = vis5SB;
        }
        if (atBat == document.getElementById("6team2").value) {
            vis6SB += 1;
            document.getElementById("stolenBases").innerHTML = vis6SB;
        }
        if (atBat == document.getElementById("7team2").value) {
            vis7SB += 1;
            document.getElementById("stolenBases").innerHTML = vis7SB;
        }
        if (atBat == document.getElementById("8team2").value) {
            vis8SB += 1;
            document.getElementById("stolenBases").innerHTML = vis8SB;
        }
        if (atBat == document.getElementById("9team2").value) {
            vis9SB += 1;
            document.getElementById("stolenBases").innerHTML = vis9SB;
        }
    } else {
        if (atBat == document.getElementById("1team1").value) {
            home1SB += 1;
            document.getElementById("stolenBases").innerHTML = home1SB;
        }
        if (atBat == document.getElementById("2team1").value) {
            home2SB += 1;
            document.getElementById("stolenBases").innerHTML = home2SB;
        }
        if (atBat == document.getElementById("3team1").value) {
            home3SB += 1;
            document.getElementById("stolenBases").innerHTML = home3SB;
        }
        if (atBat == document.getElementById("4team1").value) {
            home4SB += 1;
            document.getElementById("stolenBases").innerHTML = home4SB;
        }
        if (atBat == document.getElementById("5team1").value) {
            home5SB += 1;
            document.getElementById("stolenBases").innerHTML = home5SB;
        }
        if (atBat == document.getElementById("6team1").value) {
            home6SB += 1;
            document.getElementById("stolenBases").innerHTML = home6SB;
        }
        if (atBat == document.getElementById("7team1").value) {
            home7SB += 1;
            document.getElementById("stolenBases").innerHTML = home7SB;
        }
        if (atBat == document.getElementById("8team1").value) {
            home8SB += 1;
            document.getElementById("stolenBases").innerHTML = home8SB;
        }
        if (atBat == document.getElementById("9team1").value) {
            home9SB += 1;
            document.getElementById("stolenBases").innerHTML = home9SB;
        }
    }
}
function stoleHome() {
    document.getElementById("recent").innerHTML = atBat + " Stole Home";
    if (inning == 1 || inning == 3 || inning == 5 || inning == 7 || inning == 9 
        || inning == 11 || inning == 13 || inning == 15 || inning == 17) {
        if (atBat == document.getElementById("1team2").value) {
            vis1SB += 1;
            document.getElementById("stolenBases").innerHTML = vis1SB;
        }
        if (atBat == document.getElementById("2team2").value) {
            vis2SB += 1;
            document.getElementById("stolenBases").innerHTML = vis2SB;
        }
        if (atBat == document.getElementById("3team2").value) {
            vis3SB += 1;
            document.getElementById("stolenBases").innerHTML = vis3SB;
        }
        if (atBat == document.getElementById("4team2").value) {
            vis4SB += 1;
            document.getElementById("stolenBases").innerHTML = vis4SB;
        }
        if (atBat == document.getElementById("5team2").value) {
            vis5SB += 1;
            document.getElementById("stolenBases").innerHTML = vis5SB;
        }
        if (atBat == document.getElementById("6team2").value) {
            vis6SB += 1;
            document.getElementById("stolenBases").innerHTML = vis6SB;
        }
        if (atBat == document.getElementById("7team2").value) {
            vis7SB += 1;
            document.getElementById("stolenBases").innerHTML = vis7SB;
        }
        if (atBat == document.getElementById("8team2").value) {
            vis8SB += 1;
            document.getElementById("stolenBases").innerHTML = vis8SB;
        }
        if (atBat == document.getElementById("9team2").value) {
            vis9SB += 1;
            document.getElementById("stolenBases").innerHTML = vis9SB;
        }
    } else {
        if (atBat == document.getElementById("1team1").value) {
            home1SB += 1;
            document.getElementById("stolenBases").innerHTML = home1SB;
        }
        if (atBat == document.getElementById("2team1").value) {
            home2SB += 1;
            document.getElementById("stolenBases").innerHTML = home2SB;
        }
        if (atBat == document.getElementById("3team1").value) {
            home3SB += 1;
            document.getElementById("stolenBases").innerHTML = home3SB;
        }
        if (atBat == document.getElementById("4team1").value) {
            home4SB += 1;
            document.getElementById("stolenBases").innerHTML = home4SB;
        }
        if (atBat == document.getElementById("5team1").value) {
            home5SB += 1;
            document.getElementById("stolenBases").innerHTML = home5SB;
        }
        if (atBat == document.getElementById("6team1").value) {
            home6SB += 1;
            document.getElementById("stolenBases").innerHTML = home6SB;
        }
        if (atBat == document.getElementById("7team1").value) {
            home7SB += 1;
            document.getElementById("stolenBases").innerHTML = home7SB;
        }
        if (atBat == document.getElementById("8team1").value) {
            home8SB += 1;
            document.getElementById("stolenBases").innerHTML = home8SB;
        }
        if (atBat == document.getElementById("9team1").value) {
            home9SB += 1;
            document.getElementById("stolenBases").innerHTML = home9SB;
        }
    }
}
function runFirst() {
    if (document.getElementById("runnerFirst")) {
        document.getElementById("onFirst").style.display = 'block';
    }
    document.getElementById("recent").innerHTML = "Runner To First";
}
function runSecond() {
    if (document.getElementById("runnerSecond")) {
        document.getElementById("onFirst").style.display = 'none';
        document.getElementById("onSecond").style.display = 'block';
    }
    document.getElementById("recent").innerHTML = "Runner To Second";
}
function runThird() {
    if (document.getElementById("runnerThird")) {
        document.getElementById("onFirst").style.display = 'none';
        document.getElementById("onSecond").style.display = 'none';
        document.getElementById("onThird").style.display = 'block';
    }
    document.getElementById("recent").innerHTML = "Runner To Third";
}
function runScored() {
    inningScore += 1;
    document.getElementById("recent").innerHTML = "Run Scored";
    if (inning == 1 || inning == 3 || inning == 5 || inning == 7 || inning == 9 
        || inning == 11 || inning == 13 || inning == 15 || inning == 17) {
        visRuns += 1;
        document.getElementById("visRuns").innerHTML = visRuns;
        if (inning == 1) {
            document.getElementById("vis1").innerHTML = inningScore;
        }
        if (inning == 3) {
            document.getElementById("vis2").innerHTML = inningScore;
        }
        if (inning == 5) {
            document.getElementById("vis3").innerHTML = inningScore;
        }
        if (inning == 7) {
            document.getElementById("vis4").innerHTML = inningScore;
        }
        if (inning == 9) {
            document.getElementById("vis5").innerHTML = inningScore;
        }
        if (inning == 11) {
            document.getElementById("vis6").innerHTML = inningScore;
        }
        if (inning == 13) {
            document.getElementById("vis7").innerHTML = inningScore;
        }
        if (inning == 15) {
            document.getElementById("vis8").innerHTML = inningScore;
        }
        if (inning == 17) {
            document.getElementById("vis9").innerHTML = inningScore;
        }
        if (atBat == document.getElementById("1team2").value) {
            vis1RBI += 1;
            document.getElementById("rbis").innerHTML = vis1RBI;
        }
        if (atBat == document.getElementById("2team2").value) {
            vis2RBI += 1;
            document.getElementById("rbis").innerHTML = vis2RBI;
        }
        if (atBat == document.getElementById("3team2").value) {
            vis3RBI += 1;
            document.getElementById("rbis").innerHTML = vis3RBI;
        }
        if (atBat == document.getElementById("4team2").value) {
            vis4RBI += 1;
            document.getElementById("rbis").innerHTML = vis4RBI;
        }
        if (atBat == document.getElementById("5team2").value) {
            vis5RBI += 1;
            document.getElementById("rbis").innerHTML = vis5RBI;
        }
        if (atBat == document.getElementById("6team2").value) {
            vis6RBI += 1;
            document.getElementById("rbis").innerHTML = vis6RBI;
        }
        if (atBat == document.getElementById("7team2").value) {
            vis7RBI += 1;
            document.getElementById("rbis").innerHTML = vis7RBI;
        }
        if (atBat == document.getElementById("8team2").value) {
            vis8RBI += 1;
            document.getElementById("rbis").innerHTML = vis8RBI;
        }
        if (atBat == document.getElementById("9team2").value) {
            vis9RBI += 1;
            document.getElementById("rbis").innerHTML = vis9RBI;
        }
    } else {
        homeRuns += 1;
        document.getElementById("homeRuns").innerHTML = homeRuns;
        if (inning == 2) {
            document.getElementById("hom1").innerHTML = inningScore;
        }
        if (inning == 4) {
            document.getElementById("hom2").innerHTML = inningScore;
        }
        if (inning == 6) {
            document.getElementById("hom3").innerHTML = inningScore;
        }
        if (inning == 8) {
            document.getElementById("hom4").innerHTML = inningScore;
        }
        if (inning == 10) {
            document.getElementById("hom5").innerHTML = inningScore;
        }
        if (inning == 12) {
            document.getElementById("hom6").innerHTML = inningScore;
        }
        if (inning == 14) {
            document.getElementById("hom7").innerHTML = inningScore;
        }
        if (inning == 16) {
            document.getElementById("hom8").innerHTML = inningScore;
        }
        if (inning == 18) {
            document.getElementById("hom9").innerHTML = inningScore;
        }
        if (atBat == document.getElementById("1team1").value) {
            home1RBI += 1;
            document.getElementById("rbis").innerHTML = home1RBI;
        }
        if (atBat == document.getElementById("2team1").value) {
            home2RBI += 1;
            document.getElementById("rbis").innerHTML = home2RBI;
        }
        if (atBat == document.getElementById("3team1").value) {
            home3RBI += 1;
            document.getElementById("rbis").innerHTML = home3RBI;
        }
        if (atBat == document.getElementById("4team1").value) {
            home4RBI += 1;
            document.getElementById("rbis").innerHTML = home4RBI;
        }
        if (atBat == document.getElementById("5team1").value) {
            home5RBI += 1;
            document.getElementById("rbis").innerHTML = home5RBI;
        }
        if (atBat == document.getElementById("6team1").value) {
            home6RBI += 1;
            document.getElementById("rbis").innerHTML = home6RBI;
        }
        if (atBat == document.getElementById("7team1").value) {
            home7RBI += 1;
            document.getElementById("rbis").innerHTML = home7RBI;
        }
        if (atBat == document.getElementById("8team1").value) {
            home9RBI += 1;
            document.getElementById("rbis").innerHTML = home8RBI;
        }
        if (atBat == document.getElementById("9team1").value) {
            home9RBI += 1;
            document.getElementById("rbis").innerHTML = home9RBI;
        }
    }
}
function clearFirst() {
    document.getElementById("onFirst").style.display = 'none';
}
function clearSecond() {
    document.getElementById("onSecond").style.display = 'none';
}
function clearThird() {
    document.getElementById("onThird").style.display = 'none';
}
function endAtBat() {
      
    let xhr = new XMLHttpRequest();
    // xhr.addEventListener("load", responseReceivedHandler);    
    xhr.responseType = "json";        
    let queryString = "name=" + atBat;
    xhr.open("POST", "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/baseballstats-ovlbt/service/players/incoming_webhook/player-findbyname?" + queryString);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(queryString);
    document.getElementById("result").style.display = 'none';
    document.getElementById("count").style.display = 'block';
    document.getElementById("prePitch").style.display = 'block';

}
function responseReceivedHandler() {
    if (this.status === 200) {
       let matched_player = this.response;
       updateStats(matched_player)
    } 
 }
 
function endInning() {
    if (inning == 2 || inning == 4 || inning == 6 || inning == 8 || inning == 10 
        || inning == 12 || inning == 14 || inning == 16 || inning == 18) {
            document.getElementById("topInning").style.display = 'block';
            document.getElementById("bottom").style.display = 'none';
            document.getElementById("currentPitcher").innerHTML = document.getElementById("10team1").value;
            document.getElementById("pitchCount").innerHTML = homePitchCount;
            document.getElementById("pitchStrikes").innerHTML = homeStrikes;
            document.getElementById("pitchBalls").innerHTML = homeBalls;
            document.getElementById("strikeouts").innerHTML = homeStrikeouts;
            document.getElementById("walks").innerHTML = homeWalks;
            document.getElementById("visLineup").style.display = 'block';
            document.getElementById("homeLineup").style.display = 'none';
    } else {
            document.getElementById("bottom").style.display = 'block';
            document.getElementById("topInning").style.display = 'none';
            document.getElementById("currentPitcher").innerHTML = document.getElementById("10team2").value;
            document.getElementById("pitchCount").innerHTML = visPitchCount;
            document.getElementById("pitchStrikes").innerHTML = visStrikes;
            document.getElementById("pitchBalls").innerHTML = visBalls;
            document.getElementById("strikeouts").innerHTML = visStrikeouts;
            document.getElementById("walks").innerHTML = visWalks;
            document.getElementById("visLineup").style.display = 'none';
            document.getElementById("homeLineup").style.display = 'block';
    }
    document.getElementById("recent").innerHTML = "End Of Half Inning";
    if (inning == 2 || inning == 4 || inning == 6 || inning == 8 || inning == 10 
        || inning == 12 || inning == 14 || inning == 16 || inning == 18) {
    totInning += 1;
        }
    document.getElementById("inningNum").innerHTML = totInning;
    document.getElementById("onFirst").style.display = 'none';
    document.getElementById("onSecond").style.display = 'none';
    document.getElementById("onThird").style.display = 'none';
    document.getElementById("balls").innerHTML = 0;
    document.getElementById("strikes").innerHTML = 0;
    document.getElementById("outs").innerHTML = 0;
    inning+= 1;
    inningScore = 0;
}