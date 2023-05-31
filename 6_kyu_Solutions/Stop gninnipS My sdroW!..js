/*Stop gninnipS My sdroW!
DESCRIPTION:
Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function spinWords(str) {
    let arr = str.split(' ');
    let newArr = [];
    
    for (i=0; i<arr.length; i++) {
        if (arr[i].length>4){
            newArr.push(arr[i].split('').reverse().join(''));
            //console.log(newArr);
        } else {
            newArr.push(arr[i]);
            //console.log(newArr);
        }
    }
    return newArr.join(' ');
}
console.log(spinWords("Hey fellow warriors"));// "Hey wollef sroirraw" 
console.log(spinWords("This is a test"));// "This is a test" 
console.log(spinWords("This is another test"));//"This is rehtona test"

// solution with .map and arrow function

/*function spinWords(str){
    return str.split(' ')
        .map(value => { 
            if (value.length>4) 
                return value.split('').reverse().join('');
                return value})
                        .join(' ');
}*/

//spinWords = (str) -> str.replace /\w{5,}/g, (a) -> a.split('').reverse().join('')

/***** One more  elegant solution with regExp*****/
// NB /\w{5,}/g means 'search for all words with length 5 and more'

/*function spinWords(str) {
    return str.replace(/\w{5,}/g, function(a) {
    return a.split('').reverse().join('');
    });
};

console.log(spinWords("Hey fellow warriors"));// "Hey wollef sroirraw" 
console.log(spinWords("This is a test"));// "This is a test" 
console.log(spinWords("This is another test"));//"This is rehtona test"*/