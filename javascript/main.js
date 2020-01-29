/* Button variables */

let d4button = document.getElementById("d4button");
let d6button = document.getElementById("d6button");
let d8button = document.getElementById("d8button");
let d10button = document.getElementById("d10button");
let d12button = document.getElementById("d12button");
let d20button = document.getElementById("d20button");
let current = 1;
let rollButton = document.getElementById("roll");

/* Dice variables */

let d4 = document.getElementById("d4");
let d6 = document.getElementById("d6");
let d8 = document.getElementById("d8");
let d10 = document.getElementById("d10");
let d12 = document.getElementById("d12");
let d20 = document.getElementById("d20");

/* Button functions */

function d4change() {
    if ( current != 1 ) {
        current = 1;
    };
}

function d6change() {
    if ( current != 2 ) {
        current = 2;
    };
}

function d8change() {
    if ( current != 3 ) {
        current = 3;
    };
}

function d10change() {
    if ( current != 4 ) {
        current = 4;
    };
}

function d12change() {
    if ( current != 5 ) {
        current = 5;
    };
}

function d20change() {
    if ( current != 6 ) {
        current = 6;
    };
}

/* Effects of current */