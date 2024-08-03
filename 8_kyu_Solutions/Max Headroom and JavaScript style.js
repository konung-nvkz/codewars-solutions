/*Max Headroom and JavaScript style
Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? 
Can you learn something about JavaScript style in this kata?
*/
//Original code:
// function getMax1()
// {
//   var max = 
//   {
//    name: 'Max Headroom'
//   }
//   return max;
// }

// function getMax2()
// {
//   return
//   {
//     name: 'Max Headroom'
//   }
// }

//Fixed
//To fix getMax2, you need to ensure that the object is returned 
//without a line break after the return statement. 
//Here’s the corrected version:
function getMax1(){
    var max = {
        name: 'Max Headroom'
    }
    return max;
}

function getMax2() {
    return {
        name: 'Max Headroom'
    };
}
console.log(getMax1()); // { name: 'Max Headroom' }
console.log(getMax2()); // { name: 'Max Headroom' }