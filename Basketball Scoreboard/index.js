let homeScore = 0
let guestScore = 0
document.getElementById("home-score").textContent = homeScore
document.getElementById("guest-score").textContent = guestScore

function homeAdd1Point() {
    homeScore += 1
    document.getElementById("home-score").textContent = homeScore
}

function homeAdd2Point() {
    homeScore += 2
    document.getElementById("home-score").textContent = homeScore
}

function homeAdd3Point() {
    homeScore += 3
    document.getElementById("home-score").textContent = homeScore
}


function guestAdd1Point() {
    guestScore += 1
    document.getElementById("guest-score").textContent = guestScore
}

function guestAdd2Point() {
    guestScore += 2
    document.getElementById("guest-score").textContent = guestScore
}

function guestAdd3Point() {
    guestScore += 3
    document.getElementById("guest-score").textContent = guestScore
}

function reset() {
    homeScore = 0
    guestScore = 0
    document.getElementById("home-score").textContent = homeScore
    document.getElementById("guest-score").textContent = guestScore
}