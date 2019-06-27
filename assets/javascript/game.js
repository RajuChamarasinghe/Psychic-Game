
var count = 0;
var wonCount = 0;
var lostCount = 0;
var myRandom;

var myDiv = document.getElementById("myDiv");
var winDiv = document.getElementById("winDiv");
var lostDiv = document.getElementById("lostDiv");
var guessesLeftDiv = document.getElementById("guessesLeftDiv");


function processTheGame(e) {
    // Function-level strict mode syntax
    'use strict';

    count++;

    var charStr = String.fromCharCode(e.keyCode || e.which);
    myDiv.innerHTML += charStr + ", ";

    guessesLeftDiv.innerHTML = 9 - count;

    if (e.keyCode === myRandom) {

        wonCount++;
        winDiv.innerHTML = wonCount;
        guessesLeftDiv.innerHTML = "9";
        count = 0;
        myRandom = getRandomInt(97, 122);
        myDiv.innerHTML = " ";
    
    } 
    
    if (count === 9) {

        lostCount++;
        myDiv.innerHTML = " ";
        lostDiv.innerHTML = lostCount;
        guessesLeftDiv.innerHTML = "9";
        count = 0;
        myRandom = getRandomInt(97, 122);

    }

};

document.onkeypress = function (e) {   
    e = e || window.event;

    if (e.keyCode < 97 || e.keyCode > 122) {
        return;
    }

    processTheGame(e);
    
};

/**
* Returns a random integer between min (inclusive) and max (inclusive).
* The value is no lower than min (or the next integer greater than min
* if min isn't an integer) and no greater than max (or the next integer
* lower than max if max isn't an integer).
* Using Math.round() will give you a non-uniform distribution!
*/
function getRandomInt(min, max) {

    min = Math.ceil(min); //The number to be rounded to its nearest integer in upward rounding method.
    max = Math.floor(max); //The number to be rounded to its nearest integer in downward rounding method.
    return Math.floor(Math.random() * (max - min + 1)) + min;

};