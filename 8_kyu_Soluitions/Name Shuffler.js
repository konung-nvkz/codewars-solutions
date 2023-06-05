/*Name Shuffler
DESCRIPTION:
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/

function nameShuffler(str){
    //Shuffle It
    const words = str.split(' ');
    const shuffled = words[1] + " " + words [0];
    return shuffled;
}
console.log(nameShuffler("john McClane"));

// one more attempt that does more than it is asked for
function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
}