/*Human Readable Time
DESCRIPTION:
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/
//let t=359999;
let t=9999;
function humanReadable(t) {
    let hours = Math.floor((t/3600)); // define hours
        minutes = Math.floor( (t/60) % 60); // define minutes
        seconds = Math.floor(t % 60); // define seconds
    //at this point we already can receive hours, minutes and seconds 
    //from initial number of seconds
    //but if any of this numbers is less than 10 we are not in format HH:MM:SS
    //so we need another function to check it and add corrections
    let check = function(x) {
        if (x<10) {// for any value with one digit
            return `0${x}` // we add up zero
        } else{
            return x;
        }
    }
    return `${check(hours)}:${check(minutes)}:${check(seconds)}`;
};

console.log(humanReadable(t));
