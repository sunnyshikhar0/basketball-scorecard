let homeScore = 0;
let guestScore = 0;

function homeByOne() {
    homeScore += 1;
    document.getElementById("home-score").textContent = homeScore;
}
function homeByTwo() {
    homeScore += 2;
    document.getElementById("home-score").textContent = homeScore;
}
function homeByThree() {
    homeScore += 3;
    document.getElementById("home-score").textContent = homeScore
}

function guestByOne() {
    guestScore += 1;
    document.getElementById("guest-score").textContent = guestScore;
}
function guestByTwo() {
    guestScore += 2;
    document.getElementById("guest-score").textContent = guestScore;
}
function guestByThree() {
    guestScore += 3;
    document.getElementById("guest-score").textContent = guestScore;
}

function reset() {
    homeScore = 0;
    guestScore = 0;
    
    document.getElementById("home-score").textContent = homeScore;
    document.getElementById("guest-score").textContent = guestScore;
}