/*Replace all items
DESCRIPTION:
Write function replaceAll (Python: replace_all) that will replace all occurrences 
of an item with another.

Python / JavaScript: The function has to work for strings and lists.

Example: replaceAll [1,2,2] 1 2 -> in list [1,2,2] we replace 1 with 2 to get new list [2,2,2]

replaceAll(replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]
*/

function replaceAll(input, obsolete, updated) {
    if (typeof input === 'string') {
        return input.split('').map(x => x===obsolete ? x=updated:x).join('');
    } else {
        return input.map(x => x===obsolete ? x=updated:x)};
}

console.log(replaceAll([1,2,2], 1, 2)); // [2,2,2]
console.log(replaceAll([1,2,2,1], 2, 1)); // [1, 1, 1, 1]
console.log(replaceAll('1,2,2,1', 2, 1)); // [1, 1, 1, 1]