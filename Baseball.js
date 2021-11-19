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

function visLineup () {

}

function homeLineup () {
    var home1 = document.getElementById("1team1").value;
    var home2 = document.getElementById("2team1").value;
    var home3 = document.getElementById("3team1").value;
    var home4 = document.getElementById("4team1").value;
    var home5 = document.getElementById("5team1").value;
    var home6 = document.getElementById("6team1").value;
    var home7 = document.getElementById("7team1").value;
    var home8 = document.getElementById("8team1").value;
    var home9 = document.getElementById("9team1").value;
    localStorage.setItem("data1", home1);
    localStorage.setItem("data2", home2);
    localStorage.setItem("data3", home3);
    localStorage.setItem("data4", home4);
    localStorage.setItem("data5", home5);
    localStorage.setItem("data6", home6);
    localStorage.setItem("data7", home7);
    localStorage.setItem("data8", home8);
    localStorage.setItem("data9", home9);
    document.getElementById("home1").innerHTML=localStorage.getItem("data1");
    document.getElementById("home2").innerHTML=localStorage.getItem("data2");
    document.getElementById("home3").innerHTML=localStorage.getItem("data3");
    document.getElementById("home4").innerHTML=localStorage.getItem("data4");
    document.getElementById("home5").innerHTML=localStorage.getItem("data5");
    document.getElementById("home6").innerHTML=localStorage.getItem("data6");
    document.getElementById("home7").innerHTML=localStorage.getItem("data7");
    document.getElementById("home8").innerHTML=localStorage.getItem("data8");
    document.getElementById("home9").innerHTML=localStorage.getItem("data9");
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
    visHits += 1;
    document.getElementById("visHits").innerHTML = visHits;
    document.getElementById("result").style.display = 'none';
}
function double() {
    visHits += 1;
    document.getElementById("visHits").innerHTML = visHits;
    document.getElementById("result").style.display = 'none';
}
function triple() {
    visHits += 1;
    document.getElementById("visHits").innerHTML = visHits;
    document.getElementById("result").style.display = 'none';
}
function homerun() {
    visHits += 1;
    document.getElementById("visHits").innerHTML = visHits;
    document.getElementById("result").style.display = 'none';
}