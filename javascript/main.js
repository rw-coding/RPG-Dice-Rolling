/* Button variables */

let d4button = document.getElementById("d4button");
let d6button = document.getElementById("d6button");
let d8button = document.getElementById("d8button");
let d10button = document.getElementById("d10button");
let d12button = document.getElementById("d12button");
let d20button = document.getElementById("d20button");
let buttons = document.getElementsByClassName("background")
let current = 1;
let diceRoll = 0;
let rollButton = document.getElementById("roll");

/* Dice variables */

let changing = document.getElementById("changing");
let number = document.getElementById("number");

/* Button functions */

function d4change() {
    if ( current !== 1 ) {
        current = 1;
        changing.src = "images/d4.png";
        number.innerHTML = " ";
    };
}

function d6change() {
    if ( current !== 2 ) {
        current = 2;
        changing.src = "images/d6.png";
        number.innerHTML = " ";
    };
}

function d8change() {
    if ( current !== 3 ) {
        current = 3;
        changing.src = "images/d8.png";
        number.innerHTML = " ";
    };
}

function d10change() {
    if ( current !== 4 ) {
        current = 4;
        changing.src = "images/d10.png";
        number.innerHTML = " ";
    };
}

function d12change() {
    if ( current !== 5 ) {
        current = 5;
        changing.src = "images/d12.png";
        number.innerHTML = " ";
    };
}

function d20change() {
    if ( current !== 6 ) {
        current = 6;
        changing.src = "images/d20.png";
        number.innerHTML = " ";
    };
}

/* Dice Functions */

function rollTheDice() {
    if ( current == 1 ) {
        diceRoll = Math.floor(Math.random() * 4) + 1;
        number.innerHTML = diceRoll;
    }
    else if ( current == 2 ) {
        diceRoll = Math.floor(Math.random() * 6) + 1;
        number.innerHTML = diceRoll;
    }
    else if ( current == 3 ) {
        diceRoll = Math.floor(Math.random() * 8) + 1;
        number.innerHTML = diceRoll;
    }
    else if ( current == 4 ) {
        diceRoll = Math.floor(Math.random() * 10) + 1;
        number.innerHTML = diceRoll;
    }
    else if ( current == 5 ) {
        diceRoll = Math.floor(Math.random() * 12) + 1;
        number.innerHTML = diceRoll;
    }
    else if ( current == 6 ) {
        diceRoll = Math.floor(Math.random() * 20) + 1;
        number.innerHTML = diceRoll;
    }
}