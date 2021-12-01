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
let atBat = "i";

function visLineup () {
    document.getElementById("visName").innerHTML = document.getElementById("team2").value;
    document.getElementById("visName1").innerHTML = document.getElementById("team2").value;
    document.getElementById("1vis1").innerHTML = document.getElementById("1team2").value;
    document.getElementById("2vis2").innerHTML = document.getElementById("2team2").value;
    document.getElementById("3vis3").innerHTML = document.getElementById("3team2").value;
    document.getElementById("4vis4").innerHTML = document.getElementById("4team2").value;
    document.getElementById("5vis5").innerHTML = document.getElementById("5team2").value;
    document.getElementById("6vis6").innerHTML = document.getElementById("6team2").value;
    document.getElementById("7vis7").innerHTML = document.getElementById("7team2").value;
    document.getElementById("8vis8").innerHTML = document.getElementById("8team2").value;
    document.getElementById("9vis9").innerHTML = document.getElementById("9team2").value;
    document.getElementById("10vis10").innerHTML = document.getElementById("10team2").value;
    document.getElementById("visTeam").style.display = 'none';
}
function homeLineup() {
    document.getElementById("homeName").innerHTML = document.getElementById("team1").value;
    document.getElementById("homeName1").innerHTML = document.getElementById("team1").value;
    document.getElementById("home1").innerHTML = document.getElementById("1team1").value;
    document.getElementById("home2").innerHTML = document.getElementById("2team1").value;
    document.getElementById("home3").innerHTML = document.getElementById("3team1").value;
    document.getElementById("home4").innerHTML = document.getElementById("4team1").value;
    document.getElementById("home5").innerHTML = document.getElementById("5team1").value;
    document.getElementById("home6").innerHTML = document.getElementById("6team1").value;
    document.getElementById("home7").innerHTML = document.getElementById("7team1").value;
    document.getElementById("home8").innerHTML = document.getElementById("8team1").value;
    document.getElementById("home9").innerHTML = document.getElementById("9team1").value;
    document.getElementById("home10").innerHTML = document.getElementById("10team1").value;
    document.getElementById("homeTeam").style.display = 'none';

}
function home1() {
    atBat = document.getElementById("1team1").value;
    document.getElementById("currentHitter").innerHTML = atBat;
}
function home2() {
    atBat = document.getElementById("2team1").value;
    document.getElementById("currentHitter").innerHTML = atBat;
}
function home3() {
    atBat = document.getElementById("3team1").value;
    document.getElementById("currentHitter").innerHTML = atBat;
}
function home4() {
    atBat = document.getElementById("4team1").value;
    document.getElementById("currentHitter").innerHTML = atBat;
}
function home5() {
    atBat = document.getElementById("5team1").value;
    document.getElementById("currentHitter").innerHTML = atBat;
}
function home6() {
    atBat = document.getElementById("6team1").value;
    document.getElementById("currentHitter").innerHTML = atBat;
}
function home7() {
    atBat = document.getElementById("7team1").value;
    document.getElementById("currentHitter").innerHTML = atBat;
}
function home8() {
    atBat = document.getElementById("8team1").value;
    document.getElementById("currentHitter").innerHTML = atBat;
}
function home9() {
    atBat = document.getElementById("9team1").value;
    document.getElementById("currentHitter").innerHTML = atBat;
}
function visitor1() {
    atBat = document.getElementById("1team2").value;
    document.getElementById("currentHitter").innerHTML = atBat;
}
function visitor2() {
    atBat = document.getElementById("2team2").value;
    document.getElementById("currentHitter").innerHTML = atBat;
}
function visitor3() {
    atBat = document.getElementById("3team2").value;
    document.getElementById("currentHitter").innerHTML = atBat;
}
function visitor4() {
    atBat = document.getElementById("4team2").value;
    document.getElementById("currentHitter").innerHTML = atBat;
}
function visitor5() {
    atBat = document.getElementById("5team2").value;
    document.getElementById("currentHitter").innerHTML = atBat;
}
function visitor6() {
    atBat = document.getElementById("6team2").value;
    document.getElementById("currentHitter").innerHTML = atBat;
}
function visitor7() {
    atBat = document.getElementById("7team2").value;
    document.getElementById("currentHitter").innerHTML = atBat;
}
function visitor8() {
    atBat = document.getElementById("8team2").value;
    document.getElementById("currentHitter").innerHTML = atBat;
}
function visitor9() {
    atBat = document.getElementById("9team2").value;
    document.getElementById("currentHitter").innerHTML = atBat;
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
        document.getElementById("pitchBalls").innerHTML = homeStrikes;
        document.getElementById("balls").innerHTML = strikes;
        document.getElementById("recent").innerHTML = "Strike";
        if (strikes == 3) {
            homeStrikeouts += 1;
            balls = 0;
            strikes = 0;
            document.getElementById("balls").innerHTML = 0;
            document.getElementById("strikes").innerHTML = 0;
            document.getElementById("walks").innerHTML = homeStrikeouts;
            document.getElementById("recent").innerHTML = atBat + " Struck Out";
            if (outs == 3) {
                endInning();
            }
        }
    } else {
        visStrikes += 1;
        visPitchCount += 1;
        document.getElementById("pitchCount").innerHTML = visPitchCount;
        document.getElementById("pitchBalls").innerHTML = visStrikes;
        document.getElementById("balls").innerHTML = strikes;
        document.getElementById("recent").innerHTML = "Strike";
        if (strikes == 3) {
            visStrikeouts += 1;
            balls = 0;
            strikes = 0;
            document.getElementById("balls").innerHTML = 0;
            document.getElementById("strikes").innerHTML = 0;
            document.getElementById("walks").innerHTML = visStrikeouts;
            document.getElementById("recent").innerHTML = atBat + " Struck Out";
            if (outs == 3) {
                endInning();
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
    } else {
        homeHits += 1;
        document.getElementById("homeHits").innerHTML = homeHits;
    }
    document.getElementById("recent").innerHTML = atBat + " Singled";
}
function double() {
    if (inning == 1 || inning == 3 || inning == 5 || inning == 7 || inning == 9 
        || inning == 11 || inning == 13 || inning == 15 || inning == 17) {
        visHits += 1;
        document.getElementById("visHits").innerHTML = visHits;
    } else {
        homeHits += 1;
        document.getElementById("homeHits").innerHTML = homeHits;
    }
    document.getElementById("recent").innerHTML = atBat + " Doubled";
}
function triple() {
    if (inning == 1 || inning == 3 || inning == 5 || inning == 7 || inning == 9 
        || inning == 11 || inning == 13 || inning == 15 || inning == 17) {
        visHits += 1;
        document.getElementById("visHits").innerHTML = visHits;
    } else {
        homeHits += 1;
        document.getElementById("homeHits").innerHTML = homeHits;
    }
    document.getElementById("recent").innerHTML = atBat + " Tripled";
}
function homerun() {
    if (inning == 1 || inning == 3 || inning == 5 || inning == 7 || inning == 9 
        || inning == 11 || inning == 13 || inning == 15 || inning == 17) {
        visHits += 1;
        document.getElementById("visHits").innerHTML = visHits;
    } else {
        homeHits += 1;
        document.getElementById("homeHits").innerHTML = homeHits;
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
}
function flyout() {
    outs += 1;
    document.getElementById("outs").innerHTML = outs;
    document.getElementById("recent").innerHTML = atBat + " Flew Out";
    if (outs == 3) {
        endInning();
    }    
}
function lineout() {
    outs += 1;
    document.getElementById("outs").innerHTML = outs;
    document.getElementById("recent").innerHTML = atBat + " Lined Out";
    if (outs == 3) {
        endInning();
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
}
function stoleSecond() {
    document.getElementById("recent").innerHTML = atBat + " Stole Second";
}
function stoleThird() {
    document.getElementById("recent").innerHTML = atBat + " Stole Third";
}
function stoleHome() {
    document.getElementById("recent").innerHTML = atBat + " Stole Home";
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
    document.getElementById("result").style.display = 'none';
    document.getElementById("count").style.display = 'block';
    document.getElementById("prePitch").style.display = 'block';
}
function endInning() {
    if (inning == 2 || inning == 4 || inning == 6 || inning == 8 || inning == 10 
        || inning == 12 || inning == 14 || inning == 16 || inning == 18) {
            document.getElementById("topInning").style.display = 'block';
            document.getElementById("bottom").style.display = 'none';
            document.getElementById("currentPitcher").innerHTML = document.getElementById("10team1").value;
    } else {
            document.getElementById("bottom").style.display = 'block';
            document.getElementById("topInning").style.display = 'none';
            document.getElementById("currentPitcher").innerHTML = document.getElementById("10team2").value;
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