let humanPlayer = document.querySelector(".userGuess");
let computerPlayer = document.querySelector(".computerGuess");
let scoreWins = document.querySelector(".yourWins");
let scorelosses = document.querySelector(".yourLoses");
let scoreTie = document.querySelector(".ties");
const resetBtn = document.querySelector(" .reset");

//variables for score
let wins = 0;
let loss = 0;
let tie = 0;

//Array of options the computer can select

const computerChoices = ["r", "p", "s"];

startGame();
//init the game
function startGame() {
  wins = 0;
  loss = 0;
  tie = 0;
  userGuess = "____";
  computerGuess = "____";
}

document.addEventListener("keyup", function (event) {
  let userGuess = event.key;
  console.log(userGuess);
  humanPlayer.innerHTML = userGuess;

  let computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  computerPlayer.innerHTML = computerGuess;

  // if the user picks a valid letter then compare
  if (userGuess === "r" || userGuess === "p" || userGuess === "s") {
    if (userGuess === "r" && computerGuess === "s") {
      wins++;
    } else if (userGuess === "r" && computerGuess === "p") {
      loss++;
    } else if (userGuess === "p" && computerGuess === "r") {
      wins++;
    } else if (userGuess === "p" && computerGuess === "s") {
      loss++;
    } else if (userGuess === "s" && computerGuess === "p") {
      wins++;
    } else if (userGuess === "s" && computerGuess === "r") {
      loss++;
    } else if (userGuess === computerGuess) {
      tie++;
    }

    scoreWins.innerHTML = wins;
    scorelosses.innerHTML = loss;
    scoreTie.innerHTML = tie;

    if (wins === 10) {
      alert("You Win!!!");
    }
  }
});

//update page
const updatePage = function () {
  humanPlayer.innerHTML = userGuess;
  computerPlayer.innerHTML = computerGuess;
  scoreWins.innerHTML = wins;
  scorelosses.innerHTML = loss;
  scoreTie.innerHTML = tie;
};

//reset the game
const resetGame = function () {
  wins = 0;
  loss = 0;
  tie = 0;
  userGuess = "____";
  computerGuess = "____";
  console.log("reset!!!!");
  updatePage();
};

resetBtn.addEventListener("click", resetGame);
