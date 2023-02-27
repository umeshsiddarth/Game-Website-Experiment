"use strict";
const rollButton = document.querySelector(".roll");
const add1 = document.querySelector(".add1");
const subtract1 = document.querySelector(".subtract1");
const multiply1 = document.querySelector(".multiply1");
const divide1 = document.querySelector(".divide1");
const add2 = document.querySelector(".add2");
const subtract2 = document.querySelector(".subtract2");
const multiply2 = document.querySelector(".multiply2");
const divide2 = document.querySelector(".divide2");
const resetbtn = document.querySelector(".reset");
let tries = document.querySelector(".tries");
let diceOut1 = document.querySelector(".diceOut1");
let diceOut2 = document.querySelector(".diceOut2");
let guess = document.querySelector(".guessedNumber");
let difficulty = document.querySelector("#difficulty");
let secretNumber = 0;
let feedback = document.querySelector(".feedback");
let currentGuess = 0;
const secretNumberGenerator = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

const diceRoll = function () {
  return Math.floor(Math.random() * 6) + 1;
};

const feedbackCond = function (currentGuess, secretNumber) {
  if (currentGuess < secretNumber) {
    document.querySelector(".feedback").textContent = "Low";
  } else if (currentGuess > secretNumber) {
    document.querySelector(".feedback").textContent = "High";
  } else if (currentGuess === secretNumber) {
    document.querySelector(".feedback").textContent = "Winner";
    rollButton.disabled = true;
  }
};

const reset = (value) => {
  rollButton.disabled = value;
  add1.disabled = value;
  subtract1.disabled = value;
  multiply1.disabled = value;
  divide1.disabled = value;
  add2.disabled = value;
  subtract2.disabled = value;
  multiply2.disabled = value;
  divide2.disabled = value;
  diceOut1.textContent = 0;
  diceOut2.textContent = 0;
  guess.textContent = 0;
  tries.textContent = 0;
  feedback.textContent = "Start Guessing";
};

resetbtn.addEventListener("click", () => {
  reset(true);
  difficulty.value = "";
});

if (!difficulty.value) {
  reset(true);
}

difficulty.addEventListener("change", () => {
  if (!difficulty.value) {
    reset(true);
  } else if (difficulty.value === "easy") {
    secretNumber = secretNumberGenerator(1, 20);
    reset(true);
    rollButton.disabled = false;
    console.log(secretNumber);
  } else if (difficulty.value === "medium") {
    secretNumber = secretNumberGenerator(15, 50);
    reset(true);
    rollButton.disabled = false;
    console.log(secretNumber);
  } else if (difficulty.value === "hard") {
    secretNumber = secretNumberGenerator(25, 200);
    reset(true);
    rollButton.disabled = false;
  }
});
rollButton.addEventListener("click", () => {
  diceOut1.textContent = diceRoll();
  diceOut2.textContent = diceRoll();
  if (Number(guess.textContent) <= 0) {
    add1.disabled = false;
    subtract1.disabled = true;
    multiply1.disabled = true;
    divide1.disabled = true;
    add2.disabled = false;
    subtract2.disabled = true;
    multiply2.disabled = true;
    divide2.disabled = true;
  } else {
    add1.disabled = false;
    subtract1.disabled = false;
    multiply1.disabled = false;
    divide1.disabled = false;
    add2.disabled = false;
    subtract2.disabled = false;
    multiply2.disabled = false;
    divide2.disabled = false;
  }
  // Add if conditions for enabling and disabling math buttons
});

add1.addEventListener("click", () => {
  let newGuess = Number(guess.textContent) + Number(diceOut1.textContent);
  console.log(newGuess, secretNumber);
  feedbackCond(newGuess, secretNumber);
  guess.textContent = newGuess;
  add1.disabled = true;
  subtract1.disabled = true;
  multiply1.disabled = true;
  divide1.disabled = true;
});
subtract1.addEventListener("click", () => {
  let newGuess = Number(guess.textContent) - Number(diceOut1.textContent);

  feedbackCond(newGuess, secretNumber);
  guess.textContent = newGuess;
  add1.disabled = true;
  subtract1.disabled = true;
  multiply1.disabled = true;
  divide1.disabled = true;
});
multiply1.addEventListener("click", () => {
  let newGuess = Number(guess.textContent) * Number(diceOut1.textContent);

  feedbackCond(newGuess, secretNumber);
  guess.textContent = newGuess;
  add1.disabled = true;
  subtract1.disabled = true;
  multiply1.disabled = true;
  divide1.disabled = true;
});
divide1.addEventListener("click", () => {
  let newGuess = Math.round(
    Number(guess.textContent) / Number(diceOut1.textContent)
  );

  feedbackCond(newGuess, secretNumber);
  guess.textContent = newGuess;
  add1.disabled = true;
  subtract1.disabled = true;
  multiply1.disabled = true;
  divide1.disabled = true;
});

add2.addEventListener("click", () => {
  let newGuess = Number(guess.textContent) + Number(diceOut2.textContent);

  console.log(newGuess, secretNumber);
  feedbackCond(newGuess, secretNumber);
  guess.textContent = newGuess;
  add2.disabled = true;
  subtract2.disabled = true;
  multiply2.disabled = true;
  divide2.disabled = true;
});
subtract2.addEventListener("click", () => {
  let newGuess = Number(guess.textContent) - Number(diceOut2.textContent);

  feedbackCond(newGuess, secretNumber);
  guess.textContent = newGuess;
  add2.disabled = true;
  subtract2.disabled = true;
  multiply2.disabled = true;
  divide2.disabled = true;
});
multiply2.addEventListener("click", () => {
  let newGuess = Number(guess.textContent) * Number(diceOut2.textContent);

  feedbackCond(newGuess, secretNumber);
  guess.textContent = newGuess;
  add2.disabled = true;
  subtract2.disabled = true;
  multiply2.disabled = true;
  divide2.disabled = true;
});
divide2.addEventListener("click", () => {
  let newGuess = Math.round(
    Number(guess.textContent) / Number(diceOut2.textContent)
  );

  feedbackCond(newGuess, secretNumber);
  guess.textContent = newGuess;
  add2.disabled = true;
  subtract2.disabled = true;
  multiply2.disabled = true;
  divide2.disabled = true;
});
