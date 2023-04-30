/*Playing with types
DESCRIPTION:
JavaScript is a dynamically typed programming language. This means that you don't have to specify what kind of information a variable contains, but sometimes it's useful to know it.

You have to implement a typing() function that takes a parameter and is able to tell the type and value of it.

For example:

typing(2);            //returns "number=2"
typing(true);         //returns "boolean=true"
typing("test");       //returns "string="test""
typing([1,2,3]);      //returns "object=[1,2,3]"
typing({a:1,b:2});    //returns "object={"a":1,"b":2}"
typing(function(){}); //returns "function=function (){}"
typing(undefined);    //returns "undefined"
*/
function typing(param){
    if (typeof(param)==='undefined') return `undefined`; // if we got undefined, it's the easiest case
    if (typeof(param)==='string') return `${typeof(param)}="${param}"`; // if it is a string, we need to add up quotes
    if ((typeof param)==='function') return `${typeof param}=${param}`; //if we have function, it is enough to show as it is 
    return `${typeof param}=${JSON.stringify(param)}`; //for all cases (e.g. when we have key and value), we need to stringify the parameter
}
console.log(typing(2));            //returns "number=2"
console.log(typing(true));         //returns "boolean=true"
console.log(typing("test"));       //returns "string="test""
console.log(typing([1,2,3]));      //returns "object=[1,2,3]"
console.log(typing({a:1,b:2}));    //returns "object={"a":1,"b":2}"
console.log(typing(function(){})); //returns "function=function (){}"
console.log(typing(undefined));    //returns "undefined"