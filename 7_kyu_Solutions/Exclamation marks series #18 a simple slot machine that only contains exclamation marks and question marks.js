/*Exclamation marks series #18: a simple slot machine that only contains exclamation marks and question marks
Description:
You are playing a simple slot machine that only contains exclamation marks and question marks. Every time the slot machine is started, a string of 5 length is obtained. If you're lucky enough to get a Special permutation, you'll win the bonus. Give you a string s, return the highest bonus.

Bouns list:

Five-of-a-Kind:   ---- 1000
"!!!!!" or "?????"

Four-of-a-Kind:    ---- 800
The string contains a "!!!!" or "????"
"!!!!?","?!!!!","????!","!????"

Full House:         ----500
such as "!!!??" or "???!!"...

Three-of-a-Kind:    ---- 300
The string contains a "!!!" or "???"
such as "!!!?!","!???!"...

Two pair:           ---- 200
The string contains two "!!" or "??"
such as "??!!?","!!?!!"

A Pair:             ---- 100
The string contains a "!!" or "??"
such as "?!??!","!!?!?"

Others              ---- 0
such as "?!?!?","!?!?!"
Examples
slot("!!!!!") === 1000
slot("!!!!?") === 800
slot("!!!??") === 500
slot("!!!?!") === 300
slot("!!?!!") === 200
slot("!!?!?") === 100
slot("!?!?!") === 0
*/
function slot(str) {
    switch (true) {
        case (str.includes("!!!!!") || str.includes("?????")):
            return 1000;
        case (str.includes("!!!!") || str.includes("????")):
            return 800;
        case (str.includes("!!!") && str.includes("??") || str.includes("???") && str.includes("!!")):
            return 500;
        case (str.includes("!!!") || str.includes("???")):
            return 300;
        case (str.includes("!!") && str.includes("??")) || ((str.includes("??!??")) || (str.includes("!!?!!"))):
            return 200;
        case (str.includes("!!") || str.includes("??")):
            return 100;
        default:
            return 0;
    }
}

//Basic tests

console.log(slot("!!!!!"))// === 1000
console.log(slot("!!!!?"))// === 800
console.log(slot("!!!??"))// === 500
console.log(slot("!!!?!"))// === 300
console.log(slot("!!?!!"))// === 200
console.log(slot("!!?!?"))// === 100
console.log(slot("!?!?!"))// === 0

// Alternative solution:

function slot(s){
    var c = s.match(/([?!])\1*/g)
        .map(e=>e.length)
        .sort((a,b)=>b-a); 
    switch(c.length) {
        case 1: return 1000;
        case 2: return c[0]===4?800:500;
        case 3: return c[0]===3?300:200;
        case 4: return 100;
        case 5: return 0;
    }
}

//Explanation:
//The function slot takes a string s as a parameter. 
//It starts by using the match method with a regular expression /([?!])\1*/g to find all consecutive occurrences of either ? or ! characters in the string s. 
//The match method returns an array of matches.

//The map method is then used on the resulting array to transform each match into its length using the arrow function e=>e.length. 
//This creates a new array c containing the lengths of the consecutive occurrences of ? or ! characters.

//The sort method is called on the array c with a comparison function (a,b)=>b-a to sort the lengths in descending order. 
//This means that the longest consecutive occurrences will be at the beginning of the array.
//The function then uses a switch statement on the length of the sorted array c to determine the return value based on the number of different lengths.