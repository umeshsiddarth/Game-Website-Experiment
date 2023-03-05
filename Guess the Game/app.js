const difficultyEl = document.querySelector("#difficulty__level");
const p1AddEl = document.querySelector(".player1__add");
const p1SubEl = document.querySelector(".player1__subtract");
const p1MulEl = document.querySelector(".player1__multiply");
const p1DivEl = document.querySelector(".player1__divide");
const p1RollEl = document.querySelector(".player1__roll");
const p1AttemptsEl = document.querySelector(".player1__attempts--count");
const p1DiceOutEl = document.querySelector(".player1__dice-output");
let p1SecretNumberEl = document.querySelector(".player1__secret-number");
let p1guessEl = document.querySelector(".player1__guess--number");
let p1FeedbackEl = document.querySelector(".player1__feedback");

const p2AddEl = document.querySelector(".player2__add");
const p2SubEl = document.querySelector(".player2__subtract");
const p2MulEl = document.querySelector(".player2__multiply");
const p2DivEl = document.querySelector(".player2__divide");
const p2RollEl = document.querySelector(".player2__roll");
const p2AttemptsEl = document.querySelector(".player2__attempts--count");
const p2DiceOutEl = document.querySelector(".player2__dice-output");
let p2SecretNumberEl = document.querySelector(".player2__secret-number");
let p2guessEl = document.querySelector(".player2__guess--number");
let p2FeedbackEl = document.querySelector(".player2__feedback");
let newGame = document.querySelector(".reset");
const diceRoll = function () {
  return Math.floor(Math.random() * 6) + 1;
};

const secretNumberGenerator = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

let guess = 0;
let p1SecretNumber = 0;
let p2SecretNumber = 0;

function p1ResetBtn(bool) {
  // 2nd player implementation pending
  p1AddEl.disabled = bool;
  p1SubEl.disabled = bool;
  p1MulEl.disabled = bool;
  p1DivEl.disabled = bool;
}

function reset(bool) {
  p1ResetBtn(true);
  p1RollEl.disabled = true;
  difficultyEl.value = "";
  p1AttemptsEl.textContent = 0;
  p1DiceOutEl.textContent = 0;
  p1SecretNumber = 0;
  p2SecretNumber = 0;
  p1SecretNumberEl.textContent = 0;
  p2SecretNumberEl.textContent = 0;
  document.body.style.backgroundColor = "#fff";
  p1SecretNumberEl.textContent = "?";
  p2SecretNumberEl.textContent = "?";
}

function feedback() {
  // 2nd player implementation pending
  if (
    p1guessEl.textContent === "0" &&
    p1FeedbackEl.textContent === "Start guessing..."
  ) {
    return;
  } else if (secretNumber < guess) {
    p1FeedbackEl.textContent = "High Number";
  } else if (secretNumber > guess) {
    p1FeedbackEl.textContent = "Low Number";
  } else if (secretNumber === guess) {
    p1FeedbackEl.textContent = "Correct Guess";
    p1SecretNumberEl.textContent = secretNumber;
    document.body.style.backgroundColor = "green";
  }
}

difficultyEl.addEventListener("change", () => {
  if (difficultyEl.value === "easy") {
    p1SecretNumber = secretNumberGenerator(1, 20);
    p1RollEl.disabled = false;
  } else if (difficultyEl.value === "medium") {
    p1SecretNumber = secretNumberGenerator(15, 50);
    p1RollEl.disabled = false;
  } else if (difficultyEl.value === "hard") {
    p1SecretNumber = secretNumberGenerator(25, 200);
    p1RollEl.disabled = false;
  } else {
    p1RollEl.disabled = true;
  }
});

if (difficultyEl.value === "") {
  p1RollEl.disabled = true;
  p1ResetBtn(true);
}

p1RollEl.addEventListener("click", () => {
  const diceOut = diceRoll();
  p1DiceOutEl.textContent = diceOut;
  p1RollEl.disabled = true;
  if (
    p1guessEl.textContent === "0" &&
    p1FeedbackEl.textContent === "Start guessing..."
  ) {
    p1AddEl.disabled = false;
    p1SubEl.disabled = true;
    p1MulEl.disabled = true;
    p1DivEl.disabled = true;
  } else {
    p1ResetBtn(false);
  }
});

if (p1RollEl.disabled === false) {
  p1ResetBtn(true);
}

p1AddEl.addEventListener("click", () => {
  guess += Number(p1DiceOutEl.textContent);
  p1guessEl.textContent = guess;
  feedback();
  p1ResetBtn(true);
  p1RollEl.disabled = false;
});

p1SubEl.addEventListener("click", () => {
  guess -= Number(p1DiceOutEl.textContent);
  p1guessEl.textContent = guess;
  feedback();
  p1ResetBtn(true);
  p1RollEl.disabled = false;
});

p1MulEl.addEventListener("click", () => {
  guess *= Number(p1DiceOutEl.textContent);
  p1guessEl.textContent = guess;
  feedback();
  p1ResetBtn(true);
  p1RollEl.disabled = false;
});

p1DivEl.addEventListener("click", () => {
  const temp = guess / Number(p1DiceOutEl.textContent);
  guess = Math.round(temp);
  p1guessEl.textContent = guess;
  feedback();
  p1ResetBtn(true);
  p1RollEl.disabled = false;
});

newGame.addEventListener("click", () => {
  reset(true);
});

// 2) P2
// 3) Refactor
// 4) Changing turns
// 5) styling
