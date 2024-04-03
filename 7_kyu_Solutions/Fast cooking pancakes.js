/*Fast cooking pancakes
You need to cook pancakes, but you are very hungry. As known, one needs to fry a pancake one minute on each side. 
What is the minimum time you need to cook n pancakes, if you can put on the frying pan only m pancakes at a time? 
n and m are positive integers between 1 and 1000.
*/

function cookPancakes(n, m) {
    return (n < m) ? 2 : Math.ceil((n * 2) / m);
};
//Explanation:
// The situation has two possible variants.
// The easiest, when m (the capacity that the pan can contain) is more than n.
// If it is so, we need two minutes for everything, time to reverse the pancakes is not taken into the consideration.
// If it is not so, time to cook all of the pancakes is counted by formula from the second part od ternary (2 minutes for each pancake divided to the capacity of pan)

console.log(cookPancakes(4, 5));// 2
console.log(cookPancakes(1, 2)); // 2
console.log(cookPancakes(2, 2));//2
console.log(cookPancakes(4, 2));// 4