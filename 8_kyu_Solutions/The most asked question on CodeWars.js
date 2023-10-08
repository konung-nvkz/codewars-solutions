/* beta
The most asked question on CodeWars
What is the most asked question on CodeWars?

//Can someone explain /*...?

You need to write a function detect that will check if a string starts with Can someone explain, case sensitive. Return true if so, false otherwise.

Let's hope you don't write a solution that makes people ask that question at you!
*/

function detect(comment) {
    let phrase = "Can someone explain ";
        return comment.startsWith(phrase);
}

//task is as easy as 8 kyu.
//The easiest method of solution - built-in startsWith();

// one more method is to slice the first 19 symbols of the string 
// and compare them to the asked phrase
function detectSlice(comment) {
    return comment.slice(0, 19) == 'Can someone explain' ? true : false;
}
