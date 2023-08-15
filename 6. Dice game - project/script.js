"use strict";

const [newGameBtn, infoBtn, rollDiceBtn, holdBtn] = Array.from(document.querySelectorAll(".btn"));
const [playerOneSection, playerTwoSection] = Array.from(document.querySelectorAll(".player"));
const turn = document.querySelector(".turn");
const totalScoreP1 = document.getElementById("score--0");
const totalScoreP2 = document.getElementById("score--1");
const currentScoreP1 = document.getElementById("current--0");
const currentScoreP2 = document.getElementById("current--1");
let [totalSP1, totalSP2, scoreP1, scoreP2] = Array(4).fill(0);
let currentPlayer = 1;
const dice = document.querySelector(".dice");
const rules = document.querySelector(".rules");
const closeRulesBtn = document.querySelector(".close-rules");
const message = document.querySelector(".message");

const openRules = () => rules.classList.remove("hidden");
const closeRules = () => rules.classList.add("hidden");


rollDiceBtn.addEventListener("click", rollingDice);
holdBtn.addEventListener("click", holdScore);
newGameBtn.addEventListener("click", newGame);
infoBtn.addEventListener("click", openRules);
closeRulesBtn.addEventListener("click", closeRules);


function rollingDice() {
    const diceNum = Math.floor(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `./dices/dice-${diceNum}.png`;
    if (diceNum !== 1) {
        if (currentPlayer === 1) {
            scoreP1 += diceNum;
            currentScoreP1.textContent = scoreP1;
        } else {
            scoreP2 += diceNum;
            currentScoreP2.textContent = scoreP2;
        }
    } else {
        if (currentPlayer === 1) {
            scoreP1 = 0;
            currentScoreP1.textContent = scoreP1;
            switchPlayer(currentPlayer);
            currentPlayer = 2;
        } else {
            scoreP2 = 0;
            currentScoreP2.textContent = scoreP2;
            switchPlayer(currentPlayer);
            currentPlayer = 1;
        }
    }
}

function holdScore() {
    if (currentPlayer === 1) {
        totalSP1 += scoreP1;
        scoreP1 = 0;
        currentScoreP1.textContent = scoreP1;
        totalScoreP1.textContent = totalSP1;
        if (checkWinner(currentPlayer)) {
            message.textContent = `Player ${currentPlayer} wins !!!`;
            playerOneSection.classList.add("player--winner");
            rollDiceBtn.disabled = true;
            holdBtn.disabled = true;
            return;
        }
        switchPlayer(currentPlayer);
        currentPlayer = 2;
    } else {
        totalSP2 += scoreP2;
        scoreP2 = 0;
        currentScoreP2.textContent = scoreP2;
        totalScoreP2.textContent = totalSP2;
        if (checkWinner(currentPlayer)) {
            message.textContent = `Player ${currentPlayer} wins !!!`;
            playerTwoSection.classList.add("player--winner");
            rollDiceBtn.disabled = true;
            holdBtn.disabled = true;
            return;
        }
        switchPlayer(currentPlayer);
        currentPlayer = 1;
    }
}

function newGame() {
    currentPlayer = 1;
    scoreP1 = 0;
    scoreP2 = 0;
    totalSP1 = 0;
    totalSP2 = 0;
    currentScoreP1.textContent = scoreP1;
    currentScoreP1.textContent = scoreP2;
    totalScoreP1.textContent = totalSP1;
    totalScoreP2.textContent = totalSP2;
    rollDiceBtn.disabled = false;
    holdBtn.disabled = false;
    message.innerHTML = `Player's <span class="turn">${currentPlayer}</span> turn:`;
    dice.classList.add('hidden');
    if (!playerOneSection.classList.contains("player--active")) {
        playerTwoSection.classList.remove("player--active");
        playerOneSection.classList.add("player--active");
    }
    removeWInner();
}

function checkWinner(playerTurn) {
    let haveWinner = false;
    if ((playerTurn === 1 && totalSP1 >= 100) || (playerTurn === 2 && totalSP2 >= 100)) haveWinner = true;
    return haveWinner;
}

function switchPlayer(currentPlayer) {
    playerOneSection.classList.toggle("player--active");
    playerTwoSection.classList.toggle("player--active");
    currentPlayer == 1 ? turn.textContent = 2 : turn.textContent = 1;
}
function removeWInner() {
    playerOneSection.classList.remove("player--winner");
    playerTwoSection.classList.remove("player--winner");
}