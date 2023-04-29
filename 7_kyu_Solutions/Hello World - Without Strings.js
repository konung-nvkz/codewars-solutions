/*Hello World - Without Strings
DESCRIPTION:
Task
You need to create a function, helloWorld, that will return the String Hello, World! 
without actually using raw strings. This includes quotes, double quotes and template strings. 
You can, however, use the String constructor and any related functions.

You cannot use the following:

"Hello, World!"
'Hello, World!'
`Hello, World!`
Good luck and try to be as creative as possible!
*/
// The first solution does't suit cause it uses strings
/*function helloWorld() {
    const elements = ['Hello,', 'World!'];
    return elements.join('-').replace(/-/g, ' ');
}
*/
console.log(helloWorld());

const helloWorld = () => /Hello, World!/.source

//The source accessor property of RegExp instances returns a string 
//containing the source text of this regular expression, 
//without the two forward slashes on both sides or any flags.