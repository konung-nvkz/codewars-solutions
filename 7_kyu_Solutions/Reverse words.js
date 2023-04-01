/*Reverse words
DESCRIPTION:
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
function reverseWords(str) {   
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
let str = "на златом крыльце сидели";// царь царевич, король, королевич, сапожник, портной";
console.log(reverseWords(str));

//we .split('') the string to array
/*e.g. "на златом крыльце сидели царь царевич, король, королевич, сапожник, портной"; =>
[
  'н', 'а', ' ', 'з', 'л', 'а', 'т', 'о', 'м', ' ',
  'к', 'р', 'ы', 'л', 'ь', 'ц', 'е', ' ', 'с', 'и',
  'д', 'е', 'л', 'и'*/

//then reverse that array using reverse(), 
/* [
  'и', 'л', 'е', 'д', 'и',
  'с', ' ', 'е', 'ц', 'ь',
  'л', 'ы', 'р', 'к', ' ',
  'м', 'о', 'т', 'а', 'л',
  'з', ' ', 'а', 'н'
]*/
//and join the resulting array of characters back into a string
/*иледис ецьлырк моталз ан*/

//the string with reversed characters is split by spaces using split(" "), which results in an array
/*[ 'иледис', 'ецьлырк', 'моталз', 'ан' ]*/

//this array of words is reversed using reverse()
/*[ 'ан', 'моталз', 'ецьлырк', 'иледис' ]*/

//and joined back into a string with words in their original order using join(" ").
/*ан моталз ецьлырк иледис*/

