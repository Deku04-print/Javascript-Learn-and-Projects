// Select score elements
const homeScoreEl = document.querySelector(".score-h");
const guestScoreEl = document.querySelector(".score-g");

let homeScore = 0;
let guestScore = 0;
let paused = false;

// Functions to update scores
function updateHome(points) {
  if (!paused) {
    homeScore += points;
    if (homeScore < 0) homeScore = 0;
    homeScoreEl.textContent = homeScore;
  }
}

function updateGuest(points) {
  if (!paused) {
    guestScore += points;
    if (guestScore < 0) guestScore = 0;
    guestScoreEl.textContent = guestScore;
  }
}

// Existing scoring functions
function plusOne() { updateHome(1); }
function plusTwo() { updateHome(2); }
function plusThree() { updateHome(3); }

function plusOneg() { updateGuest(1); }
function plusTwog() { updateGuest(2); }
function plusThreeg() { updateGuest(3); }

// New: Penalty buttons
function penaltyHome() { updateHome(-1); }
function penaltyGuest() { updateGuest(-1); }

// New: Reset scores
function newGame() {
  homeScore = 0;
  guestScore = 0;
  homeScoreEl.textContent = homeScore;
  guestScoreEl.textContent = guestScore;
  paused = false;
}

// New: Pause and resume
function pauseResume() {
  paused = !paused;
  alert(paused ? "Game Paused" : "Game Resumed");
}
