let outs = 0;
let balls = 0;
let strikes = 0;
let visHits = 0;
let homeHits = 0;
let visRuns = 0;
let homeRuns = 0;
let runs = 0;
let hits = 0;
let errors = 0;
let pitchStrikes = 0;
let pitchBalls = 0;
let strikeouts = 0;
let pitchCount = 0;
let walks = 0;
let inning = 1;
let totInning = 1;
let inningScore = 0;


function visLineup () {

}

function editLineups () {
    var s = document.getElementById("1team1").value;
    document.getElementById("home1").innerHTML = s;
}

function ball () {
    balls += 1;
    pitchBalls += 1;
    pitchCount += 1;
    document.getElementById("pitchCount").innerHTML = pitchCount;
    document.getElementById("pitchBalls").innerHTML = pitchBalls;
    document.getElementById("balls").innerHTML = balls;
    if (balls == 4) {
        walks += 1;
        balls = 0;
        strikes = 0;
        document.getElementById("balls").innerHTML = 0;
        document.getElementById("strikes").innerHTML = 0;
        document.getElementById("walks").innerHTML = walks;
    }
}

function strike() {
    strikes += 1;
    pitchStrikes += 1;
    pitchCount += 1;
    document.getElementById("pitchCount").innerHTML = pitchCount;
    document.getElementById("pitchStrikes").innerHTML = pitchStrikes;
    document.getElementById("strikes").innerHTML = strikes;
    if (strikes == 3) {
        strikeouts += 1;
        balls = 0;
        strikes = 0;
        outs += 1;
        document.getElementById("strikes").innerHTML = 0;
        document.getElementById("balls").innerHTML = 0;
        document.getElementById("strikeouts").innerHTML = strikeouts;
        document.getElementById("outs").innerHTML = outs;
    }
}

function inPlay() {
    document.getElementById("result").style.display = 'block';
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
}
function runFirst() {
    if (document.getElementById("runnerFirst")) {
        document.getElementById("onFirst").style.display = 'block';
    }
}
function runSecond() {
    if (document.getElementById("runnerSecond")) {
        document.getElementById("onFirst").style.display = 'none';
        document.getElementById("onSecond").style.display = 'block';
    }
}
function runThird() {
    if (document.getElementById("runnerThird")) {
        document.getElementById("onFirst").style.display = 'none';
        document.getElementById("onSecond").style.display = 'none';
        document.getElementById("onThird").style.display = 'block';
    }
}
function runScored() {
    inningScore += 1;
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
function endAtBat() {
    document.getElementById("result").style.display = 'none';
}
function endInning() {
    if (inning == 2 || inning == 4 || inning == 6 || inning == 8 || inning == 10 
        || inning == 12 || inning == 14 || inning == 16 || inning == 18) {
            document.getElementById("topInning").style.display = 'block';
            document.getElementById("bottom").style.display = 'none';
    } else {
            document.getElementById("bottom").style.display = 'block';
            document.getElementById("topInning").style.display = 'none';
    }
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