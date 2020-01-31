/* Button variables */

let d4button = document.getElementById("d4button");
let d6button = document.getElementById("d6button");
let d8button = document.getElementById("d8button");
let d10button = document.getElementById("d10button");
let d12button = document.getElementById("d12button");
let d20button = document.getElementById("d20button");
let current = 4;
let diceRoll = 0;
let rollButton = document.getElementById("roll");

/* Dice variables */

let changing = document.getElementById("changing");
let number = document.getElementById("number");

/* Button functions */

function reset() {
    number.innerHTML = " ";
    changing.src = "images/d" + current + ".png";
}

function d4change() {
    current = 4;
}

function d6change() {
    current = 6;
}

function d8change() {
    current = 8;
}

function d10change() {
    current = 10;
}

function d12change() {
    current = 12;
}

function d20change() {
    current = 20;
}

/* Dice Functions */

function rollTheDice() {
    diceRoll = Math.floor(Math.random() * current) + 1;
    number.innerHTML = diceRoll;
}