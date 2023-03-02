const difficultyEl = document.querySelector(".level");
const p1guessEl = document.querySelector(".player1__guess--number");
const p1AddEl = document.querySelector(".player1__add");
const p1SubEl = document.querySelector(".player1__subtract");
const p1MulEl = document.querySelector(".player1__multiply");
const p1DivEl = document.querySelector(".player1__divide");
const p1RollEl = document.querySelector(".player1__roll");
const p1FeedbackEl = document.querySelector(".player1__feedback");
const p1AttemptsEl = document.querySelector(".player1__attempts--count");
const p1DiceOutEl = document.querySelector(".player1__dice-output");
const secretNumberEl = document.querySelector(".player1__secret-number");

const diceRoll = function () {
  return Math.floor(Math.random() * 6) + 1;
};

let guess = 0;

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
    p1AddEl.disabled = false;
    p1SubEl.disabled = false;
    p1MulEl.disabled = false;
    p1DivEl.disabled = false;
  }
});

if (p1RollEl.disabled === false) {
  p1AddEl.disabled = true;
  p1SubEl.disabled = true;
  p1MulEl.disabled = true;
  p1DivEl.disabled = true;
}

p1AddEl.addEventListener("click", () => {
  guess += Number(p1DiceOutEl.textContent);
  p1AddEl.disabled = true;
  p1SubEl.disabled = true;
  p1MulEl.disabled = true;
  p1DivEl.disabled = true;
  p1RollEl.disabled = false;
});
