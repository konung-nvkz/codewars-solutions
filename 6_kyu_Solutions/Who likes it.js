/*Who likes it?*/


function likes(names) {
    let result ="";
switch(names) {
    case (names.length===0):
        result = 'no one likes this';
        console.log(result);
    case (names.length===1):
        result = `${names[0]} likes this`;
        console.log(result);
    case (names.length===2):
        result = `${names[0]} and ${names[1]} like this`;
        console.log(result);
    case (names.length===3):
        result = `${names[0]}, ${names[1]} and ${names[2]} like this`;
        console.log(result);
    case (names.length>=4):
        result = `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
        console.log(result);
}
    return result;
}
console.log(likes([]));
console.log(likes["Peter"]);
console.log(likes["Jacob", "Alex"] );
console.log(likes["Max", "John", "Mark"] );
console.log(likes["Alex", "Jacob", "Mark", "Max"] );
