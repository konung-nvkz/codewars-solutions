/*Generate user links
Generate user links
Your task is to create userlinks for the url, you will be given a username and must return a valid link.

Example
generate_link('matt c')
http://www.codewars.com/users/matt%20c
reference
use this as a reference encoding
*/

function generateLink(str) {
    return `http://www.codewars.com/users/${encodeURIComponent(str)}`;
}

console.log(generateLink('matt c')); //http://www.codewars.com/users/matt%20c

//Explanation:

/*URL Encoding Functions
In JavaScript, PHP, and ASP there are functions that can be used to URL encode a string.

PHP has the rawurlencode() function, and ASP has the Server.URLEncode() function.

In JavaScript you can use the encodeURIComponent() function.*/