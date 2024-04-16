/*Can I play right now?
As a strict big brother, I do limit my young brother Vasya on time he spends on computer games. 
I define a prime-time as a time period till which Vasya have a permission to play computer games. 
I specify start hour and end hour as pair of integers.

I need a function which will take three numbers - a present moment (current hour), a start hour of allowed time period and an end hour of allowed time period. 
The function should give answer to a question (as a boolean): "Can Vasya play in specified time?"

If I say that prime-time is from 12 till 15 that means that at 12:00 it's OK to play computer but at 15:00 there should be no more games.

I will allow Vasya to play at least one hour a day.
*/

function canIPlay(now, start, end) {
    if (start < end) {
    return now >= start && now < end;
    }
    return now >= start || now < end;
}

//small tests 
console.log(canIPlay(12, 10, 14)); // true
console.log(canIPlay(12, 13, 14)); // false
console.log(canIPlay(15, 12, 15)); // false
console.log(canIPlay(23, 22, 1)); // true
console.log(canIPlay(7, 6, 9)); // true

// One more elegant solution: 

const canIPlay = (now, start, end) =>
  now + 24 * (now < start) < end + 24 * (end < start);

/*The expression now < start evaluates to 1 (true) if the current hour is less than the start hour, and 0 (false) otherwise.
Similarly, the expression end < start evaluates to 1 (true) if the end hour is less than the start hour, and 0 (false) otherwise.
Multiplying 24 by 1 or 0 gives 24 or 0, respectively.
Adding 24 * (now < start) to now effectively adds 24 to now if now is less than start, and leaves now unchanged otherwise.
Similarly, adding 24 * (end < start) to end effectively adds 24 to end if end is less than start, and leaves end unchanged otherwise.
Finally, the expression now + 24 * (now < start) < end + 24 * (end < start) compares the adjusted now and end values to determine if now is within the allowed time period.
*/
