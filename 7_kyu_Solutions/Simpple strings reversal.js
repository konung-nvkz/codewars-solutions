/*Simple string reversal

In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space at index 3, so the string becomes "edo cruo"

solve("your code rocks") = "skco redo cruoy". 
solve("codewars") = "srawedoc"
More examples in the test cases. All input will be lower case letters and in some cases spaces.
*/

function solve(str) {
    let arr = [...str].filter(x => x != ' ') // create an array without spaces
    return str.replace(/\S/g, _ => arr.pop()) //replace all symbols that are not spaces (\S) with the last character from the arr array _ => arr.pop()_.
}

/*
Small note:
In this specific code, the underscore _ is used because the replacement function does not require the value of the matched character. 
The purpose of the function is to pop the last element from the arr array and use it as the replacement value.
*/

//More detailed variant:

function solve(str){
        let array = str.split('')
        let spaces = []
        for (let i=0;i<array.length;i++){
        if (array[i] === " "){
            spaces.push(i)
        }
        }
    let noSpaces = array.join('').split(' ').join('');
    
    let reversedArray = noSpaces.split("").reverse();
    
    for (let j=0; j<spaces.length;j++){
        reversedArray.splice(spaces[j],0," ")
    }
                                    
    return reversedArray.join('')     
    
}