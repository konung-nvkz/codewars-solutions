/*Help the Fruit Guy
Our fruit guy has a bag of fruit (represented as an bagOfFruitsay of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced bagOfFruitsay should be ["apple","banana","apple"]. Your task is to implement a method that accepts an bagOfFruitsay of strings containing fruits should returns an bagOfFruitsay of strings where all the rotten fruits are replaced by good ones.

Notes
If the bagOfFruitsay is null/nil/None or empty you should return empty bagOfFruitsay ([]).
The rotten fruit name will be in this camelcase (rottenFruit).
The returned bagOfFruitsay should be in lowercase.
*/
// As usual, first goes long solution:

function removeRotten(bagOfFruits) {
    if (bagOfFruits === null || bagOfFruits.length === 0) return []; // codewars check works if we omit the second condition 'bagOfFruits.length === 0', but in fact it looks more universal
    let clearedBag = [];
    for (let i = 0; i < bagOfFruits.length; i++) {
        if (bagOfFruits[i].includes("rotten")) {
            clearedBag.push(bagOfFruits[i].replace("rotten", "").toLowerCase());
        } else {
            clearedBag.push(bagOfFruits[i].toLowerCase());
        }
    }
    return clearedBag;
}

//Tests
console.log(removeRotten(["apple","rottenBanana","apple"])); // Output: ["apple", "banana", "apple"]
console.log(removeRotten(["rottenApple", "rottenBanana", "rottenGrape"]));// Output: ["apple", "banana", "grape"]
console.log(removeRotten(["apple", "banana", "grape"]));// Output: ["apple", "banana", "grape"]
console.log(removeRotten([]));// Output: []
console.log(removeRotten(["apple","banana","kiwi","melone","orange"])); //["apple","banana","kiwi","melone","orange"])

//Shorter solution with ternary and map
// We either change "rotten" elements by lowercased normal one or return an empty array 
function removeRotten(arr){
    return arr ? arr.map(x=>x.replace('rotten', '').toLowerCase()) : [] ;
}