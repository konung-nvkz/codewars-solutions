/*Are You Playing Banjo?
DESCRIPTION:
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!
The function takes a name as its only argument, and returns one of the following strings:
name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/
let name = 'wRob';

// function areYouPlayingBanjo(name) {
//     if ((Array.from(name)[0]==='R')||(Array.from(name)[0]==='r')) { // check the 1st symbol of the input string
//         return `${name} plays banjo`;// if it suits, return what we are asked for
//     } else {
//         return`${name} does not play banjo`; // otherwise, return another string
//     }
// };

// the same as a ternary
function areYouPlayingBanjo(name) {
    return ((Array.from(name)[0]==='R')||(Array.from(name)[0]==='r'))? `${name} plays banjo`:`${name} does not play banjo`;
};
console.log(areYouPlayingBanjo(name));

// uncomment to see code in Python

/*def are_you_playing_banjo(name):
    return f"{name} plays banjo" if name.lower().startswith('r') else f"{name} does not play banjo"*/