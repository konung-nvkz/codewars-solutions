/*Who likes it?
DESCRIPTION:
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/


function likes(names) {
switch(names.length) { // we define length of the array received
    case 0: //in case it is empty
        return 'no one likes this';
    case 1: //in case it has one name we return phrase with 1st element of the array
        return `${names[0]} likes this`;        
    case 2: //in case it has two names we return phrase with 1st element of the array, "and" and the 2nd element
        return `${names[0]} and ${names[1]} like this`;        
    case 3: //in case it has three names we return phrase with 1st element of the array, "," the 2nd element, "and" and the 3rd element
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;        
    default: //all other cases are considered default, and we use the last variant
        return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;        
}
}
console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]) );
console.log(likes(["Max", "John", "Mark"]) );
console.log(likes(["Alex", "Jacob", "Mark", "Max"]) );