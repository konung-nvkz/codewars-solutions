/*Convert string to camel case
DESCRIPTION:
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/
let str = "The_Stealth-Warrior";
console.log(toCamelCase(str))

function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, letter) => letter.toUpperCase());
}


// regExp pattern /[-_](.)/g matches any hyphen or underscore ([-_]) 
// followed by any character (.), 
//and the /g indicates global search.
// callback function takes two arguments, _ and 'letter._ ' represents the whole string 
//(- or _ followed by the character), which we don't need, 
//so we ignore it and use a placeholder variable instead '.letter' 
//represents the second capturing group in the regular expression pattern, 
//which is the character following the hyphen or underscore.
// we use the toUpperCase() method on 'letter' to convert it to uppercase 
