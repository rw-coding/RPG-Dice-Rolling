/* Button variables */

let d4button = document.getElementById("d4button");
let d6button = document.getElementById("d6button");
let d8button = document.getElementById("d8button");
let d10button = document.getElementById("d10button");
let d12button = document.getElementById("d12button");
let d20button = document.getElementById("d20button");
let current = 1;
let diceRoll = 0;
let rollButton = document.getElementById("roll");

/* Dice variables */

let changing = document.getElementById("changing");

/* Button functions */

function d4change() {
    if ( current != 1 ) {
        current = 1;
        changing.src = "images/d4.png";
    };
}

function d6change() {
    if ( current != 2 ) {
        current = 2;
        changing.src = "images/d6.png";
    };
}

function d8change() {
    if ( current != 3 ) {
        current = 3;
        changing.src = "images/d8.png";
    };
}

function d10change() {
    if ( current != 4 ) {
        current = 4;
        changing.src = "images/d10.png";
    };
}

function d12change() {
    if ( current != 5 ) {
        current = 5;
        changing.src = "images/d12.png";
    };
}

function d20change() {
    if ( current != 6 ) {
        current = 6;
        changing.src = "images/d20.png";
    };
}

/* Dice Functions */

function rollTheDice() {
    if ( current = 1 ) {
        diceRoll = Math.floor(Math.random() * 4) + 1;
        console.log(diceRoll);
    };
}