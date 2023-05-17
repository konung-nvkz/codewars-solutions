/*JavaScript seems to be broken
There is some horribly rotten script that is not required in your project anymore, 
and it is affecting the way your code is supposed to work.

For some reason you don't have an access to that rotten piece of code 
but you want to get your code working as expected in any possible way.

Go and get it working!
*/

// function semicolonSeparationToCommaSeparation(input) {  
//     // alternative that isn't taken by tests
//       //return input.replace(/;/g, ",")
    
//     /*
//     let str = input.split(';'); // get a single line without ";"
//     return str[0]+","+str[1]+","+str[2]; // and get a little bit cheating*/
// }

  //below is one more attempt that also works.

function semicolonSeparationToCommaSeparation(input) {
    let str='';
    for (let i=0;i<input.length;i++){
        if (!isNaN(input[i]*1)) str+=input[i]+','
    }
    return str.slice(0,-1)
}