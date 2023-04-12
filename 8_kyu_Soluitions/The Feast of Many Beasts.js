/*The Feast of Many Beasts
DESCRIPTION:
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name.
For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
Write a function feast that takes the animal's name and dish as arguments 
and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
Assume that beast and dish are always lowercase strings, and that each has at least two letters. 
beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
*/

function feast (beast, dish) {
    console.log((Array.from(beast)[0] + Array.from(beast)[beast.length-1]));
    console.log((Array.from(beast)[0, beast.length-1]));
    console.log((Array.from(dish)[0] + Array.from(dish)[dish.length-1]));
    //we will create arrays from both words, concatenate 1st and last elements of them and compare
    return (Array.from(beast)[0] + Array.from(beast)[beast.length-1]) === (Array.from(dish)[0] + Array.from(dish)[dish.length-1]);
}

console.log(feast('great blue heron', 'garlic naan'))

// longer variant:
// function feast(beast, dish) {
//     return beast.slice(-1) === dish.slice(-1) &&
//            beast.slice(0,1) === dish.slice(0,1);
// }