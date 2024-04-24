/*Pull your words together, man!
Your friend Robbie has successfully created an AI that is capable of communicating in English!

Robbie's almost done with the project, however the machine's output isn't working as expected. Here's a sample of a sentence that it outputs:

["this","is","a","sentence"]
Every time that it tries to say a sentence, instead of formatting it in normal English orthography, it just outputs a list of words.

Robbie has pulled multiple all-nighters to get this project finished, and he needs some beauty sleep. So, he wants you to write the last part of his code, a sentencify function, which takes the output that the machine gives, and formats it into proper English orthography.

Your function should:

Capitalise the first letter of the first word.
Add a period (.) to the end of the sentence.
Join the words into a complete string, with spaces.
Do no other manipulation on the words.

Here are a few examples of what your function should do:

Input	Output
["i", "am", "an", "AI"]	"I am an AI."
["FIELDS","of","CORN","are","to","be","sown"]	"FIELDS of CORN are to be sown."
["i'm","afraid","I","can't","let","you","do","that"]	"I'm afraid I can't let you do that."
*/

function sentencify(words) {
    // Capitalize the first letter of the first word
    let firstWord = words[0][0].toUpperCase() + words[0].slice(1);

    // Join the words into a complete string with spaces
    let sentence = words.slice(1).reduce((acc, word) => acc + ' ' + word, firstWord);

    // Add a period (.) to the end of the sentence
    sentence += '.';

    return sentence;
}

//Optimised version without declaring variables and reducer.

const sentencify = words =>
    `${words[0][0].toUpperCase()}${words.join(` `).slice(1)}.`;

/* The function sentencify takes a single parameter words, which is an array of words.
It uses template literals to construct the sentence.
${words[0][0].toUpperCase()} capitalizes the first letter of the first word in the array.
${words.join( ).slice(1)} joins all the words in the array with spaces and removes the first letter of the first word.
The final period is added at the end of the sentence using the period character ..*/

//Test cases from the task:

console.log(sentencify(["i", "am", "an", "AI"]));//	"I am an AI."
console.log(sentencify(["FIELDS","of","CORN","are","to","be","sown"])); //	"FIELDS of CORN are to be sown."
console.log(sentencify(["i'm","afraid","I","can't","let","you","do","that"]));//	"I'm afraid I can't let you do that."