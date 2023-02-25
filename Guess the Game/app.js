"use strict";

const diceRoll = function () {
  return Math.floor(Math.random() * 6) + 1;
};

// const difficulty = "Easy";
const rollButton = document.querySelector(".roll");
const add1 = document.querySelector(".add1");
const subtract1 = document.querySelector(".subtract1");
const multiply1 = document.querySelector(".multiply1");
const divide1 = document.querySelector(".divide1");
const add2 = document.querySelector(".add2");
const subtract2 = document.querySelector(".subtract2");
const multiply2 = document.querySelector(".multiply2");
const divide2 = document.querySelector(".divide2");
let diceOut1 = document.querySelector(".diceOut1");
let diceOut2 = document.querySelector(".diceOut2");
let guess = document.querySelector(".guessedNumber");

rollButton.addEventListener("click", () => {
  diceOut1.textContent = diceRoll();
  diceOut2.textContent = diceRoll();
});

add1.addEventListener("click", () => {
  let newGuess = Number(guess.textContent) + Number(diceOut1.textContent);
  guess.textContent = newGuess;
});
subtract1.addEventListener("click", () => {
  let newGuess = Number(guess.textContent) - Number(diceOut1.textContent);
  guess.textContent = newGuess;
});
multiply1.addEventListener("click", () => {
  let newGuess = Number(guess.textContent) * Number(diceOut1.textContent);
  guess.textContent = newGuess;
});
divide1.addEventListener("click", () => {
  let newGuess = Math.round(
    Number(guess.textContent) / Number(diceOut1.textContent)
  );
  guess.textContent = newGuess;
});

add2.addEventListener("click", () => {
  let newGuess = Number(guess.textContent) + Number(diceOut2.textContent);
  guess.textContent = newGuess;
});
subtract2.addEventListener("click", () => {
  let newGuess = Number(guess.textContent) - Number(diceOut2.textContent);
  guess.textContent = newGuess;
});
multiply2.addEventListener("click", () => {
  let newGuess = Number(guess.textContent) * Number(diceOut2.textContent);
  guess.textContent = newGuess;
});
divide2.addEventListener("click", () => {
  let newGuess = Math.round(
    Number(guess.textContent) / Number(diceOut2.textContent)
  );
  guess.textContent = newGuess;
});
