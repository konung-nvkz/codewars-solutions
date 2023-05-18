/*One Line Task: Making Pizza
*/

function makePizza(pieces) { //Let's make n pieces of Pizza ;-)
    var result = "";
    while ( pieces-- ){
        var needSteps = 5;
        while ( needSteps-- ) result += make( needSteps );
    }
    return result;
    }
function make(step){
    switch ( step+1){ // we write +1 here as we need to get all the steps
        case 5: return "P";
        case 4: return "i";
        case 3: 
        case 2: return "z";
        case 1: return "a";
    }
}

console.log(makePizza(3));
