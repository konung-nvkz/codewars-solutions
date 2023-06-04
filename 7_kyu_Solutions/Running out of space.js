/*Running out of space
DESCRIPTION:
Kevin is noticing his space run out! Write a function that removes the spaces 
from the values and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] 
would produce ['i','ihave','ihaveno','ihavenospace']
*/

function spacey(array){
    let arr =[];
    for (let i=0;i<array.length;i++){
        arr.push(array.slice(0,i+1))
        console.log(arr);
    }
    return arr.map(v=>v.join(``))
}

console.log(spacey(['i', 'have','no','space'] ));