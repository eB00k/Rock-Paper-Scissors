const playerEl = document.querySelector("#player-el");
const computerEl = document.querySelector("#computer-el");
const rockEl = document.querySelector("#rock");
const paperEl = document.querySelector("#paper");
const scissorsEl = document.querySelector("#scissors");
const userScoreEl = document.querySelector("#user-score");
const computerScoreEl = document.querySelector("#computer-score");
const phraseEl = document.querySelector("#phrase");


// icons of hands
const scissorsIcon = '<i class="fa-regular fa-hand-scissors">';
const paperIcon = '<i class="fa-regular fa-hand"></i>';
const rockIcon = '<i class="fa-regular fa-hand-back-fist"></i>';

// scores of computer and user
let userScore = 0;
let computerScore = 0;

// random number 1 to 3 INClUDING
const random = () => Math.floor(Math.random() * 3) + 1;

// getting hand using random number
const handString = (num) => {
  if (num === 1) return rockIcon;
  if (num === 2) return scissorsIcon;
  return paperIcon;
};

// compares user's and computer's hand
const handCompare = (userHand, computerHand) => {
  if (userHand === computerHand) return 0;
  if (userHand === rockIcon && computerHand === paperIcon) return 2;
  if (userHand === rockIcon && computerHand === scissorsIcon) return 1;
  if (userHand === paperIcon && computerHand === rockIcon) return 1;
  if (userHand === paperIcon && computerHand === scissorsIcon) return 2;
  if (userHand === scissorsIcon && computerHand === rockIcon) return 2;
  if (userHand === scissorsIcon && computerHand === paperIcon) return 1;
};

// adding points to score
const addPoints = (whoWon) => {
  if (whoWon === 1) {
    userScore++;
    phraseEl.textContent = "You Won!";
  } else if (whoWon === 2) {
    computerScore++;
    phraseEl.textContent = "Computer Won!";
  } else {
    phraseEl.textContent = "Draw!";
  }
  userScoreEl.textContent = userScore;
  computerScoreEl.textContent = computerScore;
};

// solves
const solve = (userChoise, computerChoise) => {
  playerEl.innerHTML = userChoise;
  computerEl.innerHTML = computerChoise;
  let whoWon = handCompare(userChoise, computerChoise);
  addPoints(whoWon);
};

// when user choose rock
rockEl.addEventListener("click", () => {
  const computerChoise = handString(random());
  const userChoise = rockIcon;
  solve(userChoise, computerChoise);
});

// when user choose paper
paperEl.addEventListener("click", () => {
  const computerChoise = handString(random());
  const userChoise = paperIcon;
  solve(userChoise, computerChoise);
});

// when user choose scissors
scissorsEl.addEventListener("click", () => {
  const computerChoise = handString(random());
  const userChoise = scissorsIcon;
  solve(userChoise, computerChoise);
});
