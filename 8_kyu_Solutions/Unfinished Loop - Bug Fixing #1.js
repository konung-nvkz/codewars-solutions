/*Unfinished Loop - Bug Fixing #1

Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!*/

function createArray(number){
    var newArray = [];
    
   for(var counter = 1; counter <= number; counter++){ // looks like Timmy has forgotten to start the counter
        newArray.push(counter);
    }
    
    return newArray;
}

// we add up "counter++" and the programm starts working