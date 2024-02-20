/*Kebabize

DESCRIPTION:
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters*/

function kebabize(str) {
    return str.replace(/([A-Z])/g,'-$1').toLowerCase().replace(/[0-9]/g,'').replace(/^-/,'')
}

// How it works:

//str.replace(/([A-Z])/g,'-$1'): This part of the code uses the replace function with a regular expression (/([A-Z])/g) 
//to find all uppercase letters in the string and replace them with a hyphen followed by the uppercase letter. 
//The g flag means the replacement should be done globally throughout the string.
//.toLowerCase(): This part of the code converts all the characters in the string to lowercase. 
//.replace(/[0-9]/g,''): This part of the code uses another replace function with a regular expression (/[0-9]/g) to find all numeric digits in the string and remove them. 
//.replace(/^-/,''): This part of the code uses another replace function with a regular expression (/^-/) to remove any leading hyphen ("-") from the string. 
//This ensures that the resulting kebab case string does not start with a hyphen.

//Nearly the same but different (arrow functions and a little bit differentt regexp)
const kebabize = (str) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase())
console.log(kebabize('camelsHaveThreeHumps'));
const camelWords = ['StackOverflow', 'camelCase', 'alllowercase', 'ALLCAPITALLETTERS', 'CustomXMLParser', 'APIFinder', 'JSONResponseData', 'Person20Address', 'UserAPI20Endpoint'];
console.log(camelWords.map(kebabize));

// How it works:

// regular expression pattern /[A-Z]+(?![a-z])|[A-Z]/g in str.replace() method is used to match the capital letters in the string. 
// [A-Z]+(?![a-z]) matches one or more consecutive capital letters that are not followed by a lowercase letter. This is used to match the capital letters within a word.
//| is the logical OR operator
//[A-Z] matches any single capital letter

//The replacement function ($, ofs) => (ofs ? "-" : "") + $.toLowerCase() is called for each match found by the regular expression. 
//It takes two parameters: $ represents the matched substring, and ofs represents the offset of the match within the original string.
//Inside the replacement function, the conditional expression (ofs ? "-" : "") is used to add a hyphen before each matched capital letter, except for the first letter of the string.

//The $.toLowerCase() expression is used to convert the matched capital letter(s) to lowercase.

//The str.replace() method returns the modified string with the capital letters replaced by hyphen-separated lowercase letters.


/***********Function to make an opposite process */

function kebabToCamel(kebabCaseString) {
    return kebabCaseString.replace(/-([a-z])/g, function (match, letter) {
        return letter.toUpperCase();
    });
}
console.log(kebabToCamel('camels-have-three-humps')); //camelsHaveThreeHumps
const words = [
    'stack-overflow',
    'camel-case',
    'alllowercase',
    'allcapitalletters',
    'custom-xml-parser',
    'api-finder',
    'json-response-data',
    'person20-address',
    'user-api20-endpoint'
]
console.log(words.map(kebabToCamel));

//How it works:
//It uses the replace method with a regular expression to match hyphens followed by lowercase letters.
//The callback function converts the matched letter to uppercase and returns it.
//The replace method replaces all occurrences of the pattern with the converted letters, effectively converting the kebab case string to camel case.


