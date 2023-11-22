/*Add Length
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/

// we will go the easiest way: split the input string into array of words, calculate the length of each and then create new resulting array of elements like "word + length".

//overall time complexity is O(n + m), where n is the length of the input string and m is the number of words in the input string.

function addLength(input) {
    const words = input.split(' ');
    const result = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const length = word.length;
        const wordWithLength = `${word} ${length}`;
        result.push(wordWithLength);
    }

    return result;
}
