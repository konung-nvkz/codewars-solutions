/*Make Me Slow
Make me slow! Calling makeMeSlow() should take at least 7 seconds.
*/


//Basic approach to 

function makeMeSlow() {
    // This function is too fast!
    const startTime = new Date().getTime(); // Get the current time
    let elapsedTime = 0;

    while (elapsedTime < 7000) {
        for (let x = 0; x < 1000000; ++x) { }
      elapsedTime = new Date().getTime() - startTime; // Calculate the elapsed time
    }
}

/*the function will run the for loop repeatedly until at least 7 seconds have passed. 
The startTime variable stores the initial time, and the elapsedTime variable calculates the time difference between the current time and the start time. 
The loop will continue until the elapsed time reaches or exceeds 7000 milliseconds (7 seconds).
*/

function makeMeSlow(to = Date.now() + 7000) {
    while (to > Date.now());
}