'use strict';

const h1 = document.querySelector("h1");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
let scoreEl = document.querySelector(".score");
let score = 20;
let highscoreEl = document.querySelector(".highscore");
let highscore = 0;
let number = document.querySelector(".number");
let message = document.querySelector(".message");

let magicNumber = Math.floor(Math.random() * 20) + 1;

checkBtn.addEventListener("click", () => {
    let guessNumber = document.querySelector(".guess").value;
    if (guessNumber === "") return setMessage("No number ⛔!");
    guessNumber = Number(guessNumber);
    if (guessNumber < 1 || guessNumber > 20) return setMessage("Range 1-20 only ⛔!");

    if (guessNumber === magicNumber) {
        if (score > highscore) {
            highscore = score;
            highscoreEl.textContent = highscore;
        };
        document.body.style.backgroundColor = "#60b347";
        number.textContent = guessNumber;
        h1.textContent = "You guessed the number! Congrats!";
        setMessage("Yaaay!");
        checkBtn.disabled = true;
        number.style.width = "30rem";
    } else {
        if (score === 0) return setMessage("You cannot try again!");
        scoreEl.textContent = --score;
        if (score === 0) {
            h1.textContent = "You wasted all of your tries and not guessed the number!";
            document.body.style.backgroundColor = "red";
        }
        setMessage(guessNumber > magicNumber ? "Too high 📈!" : "Too low 📉!");
    }
});

againBtn.addEventListener("click", () => {
    h1.textContent = "Guess My Number!";
    number.textContent = "?";
    score = 20;
    scoreEl.textContent = score;
    setMessage("Start guessing...");
    document.body.style.backgroundColor = "#222";
    document.querySelector(".guess").value = "";
    magicNumber = Math.floor(Math.random() * 20) + 1;
    checkBtn.disabled = false;
    number.style.width = "15rem";
});

const setMessage = function (mes) {
    message.textContent = mes;
};